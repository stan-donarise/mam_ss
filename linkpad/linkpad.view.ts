namespace $.$$ {

	type Link_id = string
	type Link = NonNullable<ReturnType<$$.$ss_linkpad["ml"]>>["links"][number]

	export class $ss_linkpad extends $.$ss_linkpad {

		typeLinks: Set< Link > = new Set()

		ui_id( id: string ) {
			return id
		}

		// conter = 10000
		guid(): Link_id {
			return $mol_guid()
			// return (this.conter++).toString()
		}
		undef_guid() {
			return $mol_guid()
		}
		
		Type_link_id() {
			return this.Type_link()?.value( 'id' )
		}

		@ $mol_mem
		Type_link() {
			$mol_wire_solid()
			const Type_id = 'Type'
			const data = this.Link_data( Type_id, new $ss_linkpad_link_data( { id: Type_id, type_id: '0_0' } ) )!
			data.name( 'Type' )
			return data
		}

		@ $mol_mem
		Contain_link() {
			$mol_wire_solid()
			const Type_id = this.Type_link_id()
			return this.add_DEV( Type_id, 'Contain', null, true )
		}

		@ $mol_mem
		Package_link() {
			$mol_wire_solid()
			const Type_id = this.Type_link_id()
			return this.add_DEV( Type_id, 'Package', null, true )
		}
		@ $mol_mem
		Admin_link() {
			$mol_wire_solid()
			const Type_id = this.Type_link_id()
			const TUser = this.add_DEV( Type_id, 'User', null, true )
			const User = this.add_DEV( TUser[1], 'admin', null, true )
			return User
		}

		@ $mol_action
		add_DEV( type_id: $ss_linkpad_link_id, name_or_val: string, parent_ui_id: $ss_linkpad_link_ui_id | null, node?: boolean ) {
			const id = this.guid()
			const ui_id = $ss_linkpad_link_ui_id_build( id, parent_ui_id )
			if (node) {
				const from_id = parent_ui_id ? $ss_linkpad_link_id_from_ui( parent_ui_id ) : undefined
				this.to_link( parent_ui_id, this.Link( ui_id ) )
				const data = this.Link_data( id, new $ss_linkpad_link_data( { id, type_id, from_id, hue: this.color_gen().get_next_hue() } ) ) !
			} else {
				const data = this.Link_data( id, new $ss_linkpad_link_data( { id, type_id, hue: this.color_gen().get_next_hue() } ) ) !
			}
			if ( type_id == this.Type_link_id() ) {
				this.Link_data( id )?.name( name_or_val )
			} else {
				this.Link_data( id )?.val( name_or_val )
			}
			return ui_id
		}

		@ $mol_action
		add_undef( name_or_val: string, parent_ui_id: $ss_linkpad_link_ui_id | null, node?: boolean ) {
			const id = this.undef_guid()
			const ui_id = $ss_linkpad_link_ui_id_build( id, parent_ui_id )
			const type_id = this.Type_link_id()
			if (node) {
				const from_id = parent_ui_id ? $ss_linkpad_link_id_from_ui( parent_ui_id ) : undefined
				this.to_link( parent_ui_id, this.Link( ui_id ) )
				const data = this.Link_data( id, new $ss_linkpad_link_data( { id, type_id, from_id, hue: this.color_gen().get_next_hue() } ) ) !
			} else {
				const data = this.Link_data( id, new $ss_linkpad_link_data( { id, type_id, hue: this.color_gen().get_next_hue() } ) ) !
			}
			this.Link_data( id )?.name( name_or_val )
			return ui_id
		}

		@ $mol_action
		add_link( args: { from: $ss_linkpad_link_ui_id, link: $ss_linkpad_link_ui_id, pos?: number } ) {
			const { from, link, pos } = args
			const links = [ ...this.link_links_id( from ) ]
			if ( pos === undefined ) {
				this.link_links_id( from, [ ...links, link[1] ] )
			} else {
				this.link_links_id( from, [ ...links.slice(0, pos), link[1], ...links.slice(pos) ] )
			}
		}

		@ $mol_action
		add_new_link( args: { from: $ss_linkpad_link_ui_id, val?: string, pos?: number } ) {
			const { from, pos, val } = args
			
			const link = this.add_DEV( this.Type_link_id(), val || 'newlink', from )
			this.Link_data( link[1] )?.undef( true )
			this.add_link( {from, link, pos} )

			const to_link = this.add_DEV( this.Type_link_id(), '', link, true )
			this.Link_data( to_link[1] )?.undef( true )
			// this.link_links_id( link, [ to_link[1] ] )
			return this.Link( link )
		}

		@ $mol_action
		replace( args: { 
			ui_id: $ss_linkpad_link_ui_id, 
			new_id?: string
			new_to?: string
			new_type_id?: string
		} ) {
			const { ui_id, new_id, new_to, new_type_id } = args

			const parent_ui_id = ui_id[0]
			const old_id = ui_id[1]
			
			if ( new_id ) {
				const links = [ ...this.link_links_id( parent_ui_id ) ]
				const ind = links.findIndex( id=> id == old_id )
				links[ ind ] = new_id
				this.link_links_id( parent_ui_id, links )
				return $ss_linkpad_link_ui_id_build( new_id, parent_ui_id )

			} else if ( new_to ) {
				this.to_link( parent_ui_id, this.Link( new_to ) )
				return new_to

			} else if ( new_type_id ) {
				const old_link = this.Link( ui_id )

				const id = this.guid()
				const data = this.Link_data( id, new $ss_linkpad_link_data( { 
					id, 
					type_id: new_type_id, 
					from_id: old_link.data().from_id(),
					hue: this.color_gen().get_next_hue() 
				} ) ) !
				const new_ui_id = $ss_linkpad_link_ui_id_build( id, parent_ui_id )
				const to_link = this.to_link( ui_id )
				if ( to_link ) {
					const to_link_id = to_link.ui_id()[1]
					const new_to_link_ui_id = $ss_linkpad_link_ui_id_build( to_link_id, new_ui_id )
					this.to_link( new_ui_id, this.Link( new_to_link_ui_id ) )
				}

				const links = [ ...this.link_links_id( parent_ui_id ) ]
				const ind = links.findIndex( id=> id == old_id )
				if ( ind != -1) {
					links[ ind ] = id
					this.link_links_id( parent_ui_id, links )
				} else {
					this.to_link( parent_ui_id, this.Link( new_ui_id ) )
				}

				if ( new_type_id == '1006' ) {
					const User = this.Admin_link()
					const Contain = this.Contain_link()
					const Package = this.Package_link()
					const User_contain_pack = this.add_DEV( Contain[1], '', User )
					const Pack = this.add_DEV( Package[1], '@deep-foundation/mathjs', User_contain_pack, true )
					this.add_link( { from: User, link: User_contain_pack } )
				}

				return new_ui_id
			}
		}

		@ $mol_action
		replace_to_link( args: { link: $ss_linkpad_link_ui_id, new_to: string } ) {
			const { link, new_to } = args
			this.to_link( link, this.Link( new_to ) )
		}

		@ $mol_mem
		gql_path() {
			const path = this.raw_gql_path()?.replace('https://', '')
			return path
		}

		@ $mol_mem
		deep() {
			$ss_linkpad_lib_deep.gql_path( this.gql_path() )
			return this.gql_path() ? $ss_linkpad_lib_deep.deep() : null
		}
		@ $mol_mem
		minilinks( data?: any[] ) {
			$mol_wire_solid()
			return data ? $ss_linkpad_lib_deep.minilinks()( data as any ) : null
		}
		@ $mol_mem
		sync_deep() {
			return this.deep() ? $mol_wire_sync( this.deep()! ) : null
		}

		@ $mol_mem
		ml() {
			const ml = this.minilinks( this.deep_data() )
			return ml
		}

		@ $mol_mem
		default_data() {
			const json = $mol_fetch.json( '/ss/linkpad/data/default.json' ) as any []
			return json
		}

		@ $mol_mem
		deep_data() {
			if ( ! this.gql_path() ) {
				return this.default_data()
			}
			const sync_deep = this.sync_deep()!
			const res = sync_deep.select({ })
			return res.data
		}
		
		nameL = ( L: Link )=> {
			const containL = L.inByType[3]
			return containL?.find( L => L.value )?.value.value || ''
		}
		addL = (L: Link, parent_ui_id: $ss_linkpad_link_ui_id | null, node?: boolean ) => {
			const id = L.id.toString()
			const ui_id = $ss_linkpad_link_ui_id_build( id, parent_ui_id )
			if ( ! this.Link_data( L.type.id+'') ) this.Link_data( L.type.id+'', new $ss_linkpad_link_data( { 
				id: L.type.id+'', 
				type_id: L.type.type_id+'', 
				hue: this.color_gen().get_next_hue(),
				name: this.nameL(L.type),
				val: L.type?.value?.value || '',
			} ) )!
			let from_id: undefined | $ss_linkpad_link_id = undefined
			if ( parent_ui_id ) {
				if ( node ) {
					from_id = $ss_linkpad_link_id_from_ui( parent_ui_id )
					this.to_link( parent_ui_id, this.Link( ui_id ) )
				} else {
					this.add_link( { from: parent_ui_id, link: ui_id } )
				}
			}
			if ( ! this.Link_data( id ) ) this.Link_data( id, new $ss_linkpad_link_data( { 
				id,
				type_id: L.type_id+'', 
				from_id,
				hue: this.color_gen().get_next_hue(),
				val: L?.value?.value || '',
				name: this.nameL(L),
			} ) ) !
			return ui_id
		}
		sort_linksL = (A: Link, B: Link) => {
			const sort = $mol_compare_text()
			const aStr = this.nameL(A.type) + this.nameL(A.to.type)
			const bStr = this.nameL(B.type) + this.nameL(B.to.type)
			return sort( aStr, bStr )
		}
		// add_outL = ( L: Link, from_ui_id: $ss_linkpad_link_ui_id, depth = 1, filter?: (L: Link)=> boolean ) => {
		add_outL = ( L: Link, from_ui_id: $ss_linkpad_link_ui_id, depth = 1, visited = new Set< string >() ) => {
			// const filtered: Link[] | null = filter ? L.to.out.filter( filter ) : null
			// const out = filtered ? filtered : L.to.out
			// visited: Set< string > = visited ?? new Set< string >()
			if ( ['Join','Focus','User','Package'].includes( this.nameL(L.type) ) ) return
			if ( visited.has( L.id+'' ) ) return
			visited.add( L.id+'' )

			const out = L.out
			out.forEach( L=> {
				const ui_id = this.addL( L, from_ui_id, false )
				this.addL( L.to, ui_id, true )
				if ( ['Join','Focus','User'].includes( this.nameL(L.type) ) ) return
				if ( visited.has( L.id+'' ) ) return
				visited.add( L.id+'' )
				if ( depth > 0 ) this.add_outL( L, ui_id, --depth, visited )
				// if ( depth > 0 ) this.add_outL( L, ui_id, --depth, filter )
			} )
		}
	

		@ $mol_mem
		right_link_id( next?: any ): string {
			return this.$.$mol_state_arg.value( 'right' , next ) || ''
		}

		@ $mol_mem
		Admin_page() {
			const ml = this.ml()!
			const TypeL = ml.byId[1]
			this.addL( TypeL, null )

			const AdminL = ml.byId[380]
			const UserL = AdminL.type
			this.addL( UserL, null )


			const Admin = this.addL( AdminL, null )
			AdminL.out.sort( this.sort_linksL ).forEach( L=> {
				const ui_id = this.addL( L, Admin, false )
				this.addL( L.to, ui_id, true )
			} )
			
			const AdminPage = this.Link( Admin )
			AdminPage.ui_type = () => 'page'
			return AdminPage
		}

		@ $mol_mem_key
		Package_page( id: $ss_linkpad_link_id ) {
			const ml = this.ml()!
			if ( ! id ) return null
			const DeepcaseL = ml.byId[ Number( id ) ]
			if ( ! DeepcaseL ) return null
			const Deepcase = this.addL( DeepcaseL, null )

			const visited = new Set< string >()
			// const filter = (L: Link) => !['Join','Focus','User'].includes( this.nameL(L.type) )
			DeepcaseL.out
				// .filter( filter )
				.sort( this.sort_linksL ).forEach( L=> {
					const ui_id = this.addL( L, Deepcase, false )
					const to_ui_id = this.addL( L.to, ui_id, true )
					// if ( this.Link_data( L.id+'' ) ) return
					this.add_outL( L, ui_id, 4, visited )
					this.add_outL( L.to, to_ui_id, 4, visited )
					// this.add_outL( L, ui_id, 2, filter )
				} )

			const PackagePage = this.Link( Deepcase )
			PackagePage.ui_type = () => 'page'
			return PackagePage
		}


		Root_user_link() {
			return this.Admin_page()
		}

		Root_package_link() {
			return this.Package_page( this.right_link_id() )
		}

		pages(): readonly any[] {
			return this.right_link_id() ? super.pages() : [ this.Contenteditable_user(), this.Placeholder() ]
		}

		auto() {
			// this.init()
		}

		@ $mol_mem
		all_link_ids( next?: any ): readonly string[] {
			$mol_wire_solid()
			return next ?? []
		}

		@ $mol_action
		upd_link_ids( id: string ) {
			const ids = this.all_link_ids()
			this.all_link_ids( [ ...ids, id ] )
		}

		@ $mol_mem_key
		Link_data( link_id: string, next?: $ss_linkpad_link_data ): $ss_linkpad_link_data | null {
			if ( next !== undefined ) this.upd_link_ids( link_id )
			return next ?? null
			// const data_default = this.$.$mol_state_local.value( `Link_data('${ link_id }')` , next && next.data() )
			// this.upd_link_ids( link_id )
			// if ( ! data_default ) return null
			// const data = new $ss_linkpad_link_data( data_default )
			// return data
		}

		@ $mol_mem_key
		link_data_by_ui_id( ui_id: $ss_linkpad_link_ui_id ): $ss_linkpad_link_data | null {
			const link_id = $ss_linkpad_link_id_from_ui( ui_id )
			return this.Link_data( link_id )
		}

		@ $mol_mem_key
		type_data_by_ui_id( ui_id: $ss_linkpad_link_ui_id ): $ss_linkpad_link_data | null {
			const link_id = $ss_linkpad_link_id_from_ui( ui_id )
			const type_id = this.Link_data( link_id )?.type_id()
			return this.Link_data( type_id! )
		}
		
		@ $mol_mem_key
		link_links( ui_id: $ss_linkpad_link_ui_id ) {
			return this.link_links_id( ui_id )
				.map< $ss_linkpad_link >( ( id, index ) => {
					const link = this.Link( $ss_linkpad_link_ui_id_build( id, ui_id ) )
					return link
				} )
		}

	}

}
