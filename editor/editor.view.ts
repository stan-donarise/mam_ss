namespace $.$$ {

	type Prop_definition = {
		in_class: string,
		tree: $mol_tree2,
	}

	export class $ss_editor extends $.$ss_editor {

		auto() {
			const tree = $$.$mol_tree2_from_string( this.initial_tree_string() )
			this.init( tree )
		}

		@ $mol_action
		add_data( tree: $mol_tree2, id?: string, type?: string ) {
			if ( [ 'prop', 'object' ].includes( type || '' ) ) return this.add_prop_data( tree, type )

			const val = tree.type?.replace('$', '') || tree.value
			const data_id = id || $mol_guid() + ':' + val

			this.data_value( data_id, val )
			this.data_tree( data_id, tree )
			this.data_type( data_id, type )

			return data_id
		}

		prop_sign( type: string ){
			const normal = type.replace( /!\w+/, '*' )
			const sign = [ ... normal.matchAll( $mol_view_tree2_prop_signature ) ][ 0 ]?.groups ?? {
				name: '',
				key: '',
				next: '',
			}
			return { name: sign.name, changeable: Boolean( sign.next ), multiple: Boolean( sign.key ) }
		}

		prop_name( type: string ){
			return this.prop_sign( type ).name
		}

		prop_ids( next?: any ): readonly string[] {
			$mol_wire_solid()
			return super.prop_ids( next )
		}

		@ $mol_mem
		root_props() {
			const root = this.Ui_root_node().data_node()
			const component = this.Data_node( root.child_ids()[ 0 ] )
			const base_class = this.Data_node( component.child_ids()[ 0 ] )
			const root_props = base_class.child_ids().map( id => this.Data_node( id ) )
			return root_props
		}

		@ $mol_mem_key
		props_by_type( type: string ) {
			const props: $ss_editor_node_data[] = []

			this.prop_ids().forEach( id => {
				if (this.data_type(id) == type) props.push( this.Data_node( id ) )
			} )

			return props
		}

		@ $mol_action
		add_prop_data( tree: $mol_tree2, type?: string ) {
			const sign = this.prop_sign( tree.type )

			const id = sign.name
			const val = sign.name

			this.data_value( id, val ) //if it prop - find existed..?
			this.data_tree( id, tree )
			this.data_type( id, type )

			this.data_changeable( id, sign.changeable )
			this.data_multiple( id, sign.multiple )

			this.prop_ids( [...this.prop_ids(), id] )

			return sign.name
		}
		@ $mol_action
		add_prop_sub_data( tree: $mol_tree2, id?: string ) {
			const sign = this.prop_sign( tree.type )

			const val = sign.name
			const data_id = id || $mol_guid() + ':' + val

			this.data_value( data_id, val ) //if it prop - find existed..?
			this.data_tree( data_id, tree )
			this.data_type( data_id, 'prop_sub' )

			this.data_changeable( data_id, sign.changeable )
			this.data_multiple( data_id, sign.multiple )

			return data_id
		}

		@ $mol_action
		parse_prop_tree( parent_id: string, tree: $mol_tree2, parent_type?: string ) {
			const val = tree.type || tree.value
			const parent_val = this.data_value( parent_id )

			if ( parent_val == '=>' ) {
				const id = this.prop_name( val )
				this.add_data( tree, id, 'prop' )
				return id
			} else if ( parent_val == '<=' || parent_val == '<=>' ) {
				const id = this.prop_name( val )
				const data = this.data_value( id )
				if ( !data ) this.add_data( tree, id, 'prop' )
				return id
			}
			let id = $mol_guid() + ':' + val

			let data_type = 'default'
			if ( parent_type == 'class' ) data_type = 'prop_sub'
			if ( parent_type == 'prop' ) data_type = 'value'
			if ( parent_type == 'prop_sub' ) data_type = 'value'
			if ( parent_type == 'value' ) data_type = 'value'
			if ( parent_type == 'list' ) data_type = 'value'
			if ( val == 'null' ) data_type = 'null'
			if ( parent_type == 'dict' ) data_type = 'key'
			if ( val == '*' ) data_type = 'dict'
			if ( val?.[0] == '/' ) data_type = 'list'
			if ( val == '<=' ) data_type = 'left'
			if ( val == '=>' ) data_type = 'right'
			if ( val == '<=>' ) data_type = 'bi'
			if ( val == '@' ) data_type = 'locale'
			if ( val == 'false' ) data_type = 'bool'
			if ( val == 'true' ) data_type = 'bool'
			if ( val[0] == '$' ) data_type = 'class'
			if ( tree.value ) data_type = 'string'

			if (data_type == 'prop_sub') id = this.add_prop_sub_data( tree )
			else this.add_data( tree, id, data_type )

			this.data_child_ids( id, tree.kids.map( t => this.parse_prop_tree( id, t, data_type ) ) ) //it's like normalization
			return id
		}

		@ $mol_action
		add_prop_from_tree( tree: $mol_tree2 ) {
			const id = this.prop_name( tree.type )
			const prop_type = tree.kids[0]
			const is_object = prop_type.type?.[0] == '$'
			const data_type = is_object ? 'object' : 'prop'
			this.add_data( tree, id, data_type )
			const subprop_data_id = this.parse_prop_tree( id, prop_type, data_type )
			this.data_child_ids( id, [subprop_data_id] )
		}

		@ $mol_action
		add_norm_subprop( obj_name: string, subprop_tree: $mol_tree2 ) {
			const id = obj_name
			const class_data_id = this.data_child_ids( id )[0]
			this.data_child_ids( class_data_id, [
				this.parse_prop_tree( class_data_id, subprop_tree, 'class' ),
				...this.data_child_ids( class_data_id ) 
			] )
		}

		data_id_to_prop_name() {
		}
		prop_name_to_data_id() {
		}

		@ $mol_action
		init(tree: $mol_tree2) {
			const props = this.$.$mol_view_tree2_normalize( tree ).kids[0].kids[0].kids

			const component_tree = tree.kids[0]
			const component_name = tree.kids[0].type
			const baseclass_tree = tree.kids[0].kids[0]
			const baseclass_name = tree.kids[0].kids[0].type
			const root_props = tree.kids[0].kids[0].kids

			const root_id = 'root_id'
			this.data_value( root_id, 'root' )
			this.data_type( root_id, 'root' )

			const component_id = this.add_data( component_tree, undefined, 'component' )
			this.data_child_ids( root_id, [ component_id ] )

			const baseclass_id = this.add_data( baseclass_tree, undefined, 'class_base' )
			this.data_child_ids( component_id, [ baseclass_id ] )

			props.forEach( tree => this.add_prop_from_tree(tree) )

			const root_props_ids = root_props.map( tree => this.prop_name( tree.type ) )
				.filter( id => id && id !== '-' )
			this.data_child_ids( baseclass_id, root_props_ids )

			root_props_ids.forEach( id=> {
				if ( this.data_type( id ) !== 'object' ) {
					this.data_type( id, 'prop' )
				}
			} )

			const ui_root = this.Ui_node( $ss_editor_node_ui_id_build( root_id ) )

			this.Ui_root_node( ui_root )
		}

		@ $mol_mem_key
		Ui_node_id_by_pos( pos: number, next: $ss_editor_node_ui | null ) {
			if( next !== undefined ) return next as never
			return null as $ss_editor_node_ui | null
		}

		data_id_from_ui_id(ui_id: $ss_editor_node_ui_id){
			return ui_id[ 1 ]
		}

		@ $mol_mem_key
		data_tree_from_ui_id(ui_id: $ss_editor_node_ui_id){
			const data_id = this.data_id_from_ui_id( ui_id )
			return this.data_tree( data_id )
		}

		@ $mol_mem_key
		data_child_nodes( data_id: string ){
			return this.data_child_ids( data_id ).map( id => this.Data_node(id) )
		}

		@ $mol_mem_key
		data_node_by_ui_id(ui_id: $ss_editor_node_ui_id){
			const data_id = this.data_id_from_ui_id( ui_id )
			return this.Data_node( data_id )
		}

		@ $mol_mem_key
		data_node_parent_by_ui_id(ui_id: $ss_editor_node_ui_id){
			const parent_data_id = ui_id[ 0 ]?.[ 1 ]
			return this.Data_node( parent_data_id )
		}

		ui_node_type( ui_id: $ss_editor_node_ui_id ){
			const data_id = this.data_id_from_ui_id( ui_id )
			return this.data_type( data_id ) || 'default'
		}

		id( id: string ){
			return id
		}
		
		@ $mol_mem_key
		Ui_node_block( ui_id: $ss_editor_node_ui_id ) {
			const block = this.Block( ui_id )
			const data_id = this.data_id_from_ui_id( ui_id )
			block.value = ()=> this.data_value( data_id )
			block.placeholder = ()=> this.data_type( data_id )
			block.input = ()=> {
				this.data_value( data_id, block.dom_node().textContent )
			}
			return block
		}
		
		@ $mol_mem_key
		Block_fabric( id: string ) {
			const block = this.Block( id )
			return block
		}
		
		@ $mol_mem_key
		ui_node_children( ui_id: $ss_editor_node_ui_id, next?: $ss_editor_node_ui[] ) {
			if ( next !== undefined ) return next as never
			return this.data_child_ids( ui_id[ 1 ] ).map<$ss_editor_node_ui>( ( data_id, index ) => {
				const child = this.Ui_node( $ss_editor_node_ui_id_build( data_id, ui_id ) )
				return child
			} )
		}
		
		@ $mol_action
		drop_node( ui_id: $ss_editor_node_ui_id ){
			const data_id = this.data_id_from_ui_id( ui_id )
			const parent_data_id = ui_id[ 0 ]?.[ 1 ]
			if ( parent_data_id ) {
				this.data_child_ids( parent_data_id, 
					[...this.data_child_ids( parent_data_id ).filter(id => id !== data_id)] 
				)
			}
		}
		
		@ $mol_action
		replace_prop( from_prop_ui_id: $ss_editor_node_ui_id, to_prop_data_id: string ){
			const parent_data_id = from_prop_ui_id[ 0 ]?.[ 1 ] //binding
			if ( parent_data_id ) {
				this.data_child_ids( parent_data_id, [ to_prop_data_id ] )
			}
		}

		@ $mol_action
		drop_parent_node( ui_id: $ss_editor_node_ui_id ){
			const parent_data_id = ui_id[ 0 ]?.[ 1 ]
			const grand_parent_data_id = ui_id[ 0 ]?.[0]?.[ 1 ]
			if ( grand_parent_data_id ) {
				this.data_child_ids( grand_parent_data_id, 
					[...this.data_child_ids(grand_parent_data_id).filter(id => id !== parent_data_id)] 
				)
			}
		}
		
		@ $mol_action
		unbind_prop( ui_id: $ss_editor_node_ui_id ){
			const grand_parent_data_id = ui_id[ 0 ]?.[0]?.[ 1 ]
			const subprop = this.Data_node( grand_parent_data_id )
			subprop.binded( false )
		}

		@ $mol_action
		add_sibling_object_above( ui_id: $ss_editor_node_ui_id ){
			const parent_data_id = ui_id[ 0 ]?.[ 1 ]
			const grand_parent_data_id = ui_id[ 0 ]?.[0]?.[ 1 ]
			if ( grand_parent_data_id ) {
				const tree = this.$.$mol_tree2_from_string('Noname $mol_view sub /\n').kids[0]

				const bind_id = $mol_guid() + ':<='
				this.data_value( bind_id, '<=' )
				this.data_type( bind_id, 'left' )

				const object_id = 'Noname'
				this.add_prop_from_tree( tree )
				this.data_child_ids( bind_id, [object_id] )
				const subprop = this.$.$mol_tree2_from_string('dom_name <= dom \\div\n').kids[0]
				const prop2 = this.$.$mol_tree2_from_string('dom \\div\n').kids[0]
				this.add_prop_from_tree( prop2 )
				this.add_norm_subprop( 'Noname', subprop )

				const new_child_ids = [...this.data_child_ids(grand_parent_data_id)]
				const pos = new_child_ids.findIndex( id => id == parent_data_id )
				new_child_ids.splice(pos, 0, bind_id)
				this.data_child_ids( grand_parent_data_id, 
					new_child_ids
				)
			}
		}

		@ $mol_action
		add_object_in_list( list_ui_id: $ss_editor_node_ui_id, pos: number ){
			const list_id = this.data_id_from_ui_id( list_ui_id )

			const tree = this.$.$mol_tree2_from_string('Noname $mol_view sub /\n').kids[0]

			const bind_id = $mol_guid() + ':<='
			this.data_value( bind_id, '<=' )
			this.data_type( bind_id, 'left' )

			const object_id = $mol_guid()
			this.data_value( object_id, '' )
			this.data_type( object_id, 'object' )
			this.prop_ids( [...this.prop_ids(), object_id] )
			
			const class_id = $mol_guid()
			this.data_value( class_id, '' )
			this.data_type( class_id, 'class' )

			this.data_child_ids( object_id, [class_id] )
			this.data_child_ids( bind_id, [object_id] )

			const new_child_ids = [...this.data_child_ids( list_id )]
			new_child_ids.splice(pos, 0, bind_id)
			this.data_child_ids( list_id, 
				new_child_ids
			)
		}

		@ $mol_action
		add_subprop( ui_id: $ss_editor_node_ui_id ){
			const data_id = this.data_id_from_ui_id( ui_id )
			const class_id = this.Data_node( data_id ).child_ids()[ 0 ]

			const new_data_id = $mol_guid() + ':test'
			this.data_value( new_data_id, '' )
			this.data_type( new_data_id, 'prop_sub' )

			this.data_child_ids( class_id, [ new_data_id, ...this.data_child_ids( class_id ) ] )

			const class_ui_id = $ss_editor_node_ui_id_build( class_id, ui_id )
			const new_data_ui_id = $ss_editor_node_ui_id_build( new_data_id, class_ui_id )
			this.Block( new_data_ui_id ).focus()
		}

		@ $mol_action
		add_rootprop( ui_id: $ss_editor_node_ui_id ){
			const data_id = this.data_id_from_ui_id( ui_id )
			const class_id = this.Data_node( data_id ).child_ids()[ 0 ]

			const new_data_id = $mol_guid() + ':test'
			this.data_value( new_data_id, '' )
			this.data_type( new_data_id, 'prop' )

			this.data_child_ids( class_id, [ new_data_id, ...this.data_child_ids( class_id ) ] )

			const class_ui_id = $ss_editor_node_ui_id_build( class_id, ui_id )
			const new_data_ui_id = $ss_editor_node_ui_id_build( new_data_id, class_ui_id )
			this.Block( new_data_ui_id ).focus()
		}

		@ $mol_action
		set_subprop_tree( subprop_ui_id: $ss_editor_node_ui_id, subprop_tree: $mol_tree2 ){
			const data_id = this.data_id_from_ui_id( subprop_ui_id )
			this.add_prop_sub_data( subprop_tree, data_id )
			const truncated = subprop_tree.kids[0].clone( [] )
			if ( truncated.type[0] == '$' ) {
				const new_object_prop_tree = this.$.$mol_tree2_from_string(`${this.data_value( data_id )} ${truncated.type}\n`).kids[0]
				this.add_prop_from_tree( new_object_prop_tree )
				const class_tree_string = truncated.type[0] == '$' ? `<= ${this.data_value( data_id )}\n` : null
				const class_tree = class_tree_string ? this.$.$mol_tree2_from_string( class_tree_string ).kids[0] : null
				const kid_id = this.parse_prop_tree( 
					data_id,
					class_tree ? class_tree : truncated,
					'prop_sub',
				)
				this.data_child_ids( data_id, [kid_id] )
			} else {
				const kid_id = this.parse_prop_tree( data_id, truncated, 'prop_sub' )
				this.data_child_ids( data_id, [kid_id] )
			}
		}

		click( next?: any ) {
			const data_to_tree = (id: $ss_editor_node_data_id) => {
				const data = this.Data_node( id )
				const tree = $mol_tree2_empty.data(
					this.data_value( id ), 
					data.child_ids().map(id => data_to_tree(id))
				)
				return tree
			}
		}
		
		@ $mol_mem
		library_tree() {
			const uri = new URL( 'web.view.tree', 'https://mol.hyoo.ru' ).toString()
			const str = this.$.$mol_fetch.text( uri )
			const predef = '$mol_view $mol_object\n\tdom_name \\\n\tstyle *\n\tevent *\n\tfield *\n\tattr *\n\tsub /\n\ttitle \\\n'
			const tree = this.$.$mol_tree2_from_string( predef + str )
			return tree
		}

		@ $mol_mem
		library() {
			const norm = this.$.$mol_view_tree2_normalize( this.library_tree() )
			return norm
		}
		
		@ $mol_mem
		class_list() {
			return this.library().kids.map( cl => cl.type )
		}
		
		/** arr[ i ] is subclass, arr[ i+1 ] is superclass. */
		@ $mol_mem_key
		inherit_chain_trees( cl: string ) {
			const lib = this.library()

			const collect = ( cl: string )=> {
				const class_tree = lib.select( cl, null )
				const sup = class_tree.kids[0]
				if( !sup ) return
				const tree = this.$.$mol_tree2.struct( cl, [ sup ] )
				chain.push( tree )
				collect( sup.type )
			}

			const chain: $mol_tree2[] = []
			collect( cl )

			return chain
		}

		@ $mol_mem_key
		inherit_chain_names( cl: string ) {
			const names = this.inherit_chain_trees( cl ).map( tree => tree.type )
			return names
		}

		@ $mol_mem_key
		props_map( base: string ) {

			const props = new Map< string, Prop_definition[] >()
			
			const add = ( class_name: string, prop_tree: $mol_tree2 )=> {
				const name = this.$.$mol_view_tree2_prop_split( prop_tree ).name.text()
				const prop_defs = props.get( name ) ?? []
				props.set( name, prop_defs )
				prop_defs.push({
					in_class: class_name,
					tree: prop_tree,
				})
			}

			this.inherit_chain_trees( base ).forEach( tree => {
				const class_name = tree.type
				const props = tree.kids[0].kids
				for( const prop_tree of props ) add( class_name, prop_tree )
			} )

			return props
		}

		@ $mol_mem_key
		props_of( base: string ) {
			const prop_trees: $mol_tree2[] = []
			this.props_map( base ).forEach( defs => {
				prop_trees.push( defs.at(0)!.tree )
			} )
			return prop_trees
		}

	}
	
}
