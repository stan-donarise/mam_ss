namespace $.$$ {

	export class $ss_editor_node_ui_prop_sub extends $.$ss_editor_node_ui_prop_sub {
		
		@ $mol_mem
		bind( next?: boolean ) {
			if ( next === undefined ) {
				return this.binded()
			}
			return this.binded(next) ?? false
		}

		@ $mol_mem
		bind_value( next?: string ) {
			if ( next === undefined ) {
				const kid = this.data_node().child_nodes()[0]
				return kid.type()
			}
			if ( !this.bind() ) this.bind( true )
			const kid = this.data_node().child_nodes()[0]
			kid.type(next)
			switch (next) {
				case 'left':
					kid.value('<=')
					break;
				case 'right':
					kid.value('<=')
					break;
				case 'bi':
					kid.value('<=')
					kid.child_nodes()[0].changeable( true )
					this.changeable( true )
					break;
				default:
					this.bind( false )
					break;
			}
			return next ?? ''
		}

		@ $mol_mem
		bubble_content() {
			return [
				... this.children()[0]?.type() == 'list' ? [ this.Add_list_item_popover() ] : [],
				... this.children().length > 0 ? [ this.Bind_popover() ] : [],
				... this.bind() ? [ this.Changeable() ] : [],
				this.Drop(),
			]
		}
		
		@ $mol_mem
		valid(): boolean {
			return this.options_filtered().includes( this.data_node().value() )
		}

		@ $mol_mem
		autocomplete_showed(): boolean {
			return ! this.valid()
		}

		select_value( next?: any ): string {
			return this.data_node().value()
		}

		@ $mol_mem
		props_of_class() {
			const class_name = this.data_node_parent().value()
			return this.props_of( '$' + class_name )
		}

		@ $mol_mem
		select_dict() {
			const overridden_props = this.data_node_parent().child_nodes().map( node => node.value() )
			const dict: Record< string, string > = {}
			this.props_of_class().forEach( tree => {
				const prop_name = this.$.$mol_view_tree2_prop_name( tree )
				if( overridden_props.includes( prop_name ) && this.data_node().value() != prop_name ) return
				dict[ prop_name ] = prop_name
			})
			return dict
		}

		event_select( selected: string ) {
			const prop_tree = this.props_of_class().find( tree => this.$.$mol_view_tree2_prop_name( tree ) == selected )
			this.set_subprop_tree( this.id(), prop_tree )
		}

	}

}
