namespace $.$$ {
	
	export class $ss_linkpad_link_undef extends $.$ss_linkpad_link_undef {
		color() {
			return `hsl(${this.data().hue()} 0% 60%)`
		}
		semitransporent() {
			return `hsl(${this.data().hue()} 0% 60% / 20%)`
		}
		insert_view(): readonly any[] {
			return this.valid() ? super.insert_view() : []
			// return ['','\n'].includes( this.name() ) ? [] : super.insert_view()
		}
		type_and_name(): readonly any[] {
			return []
		}

		Name_block() {
			const block_id: $ss_linkpad_link_block_id = [ this.ui_id(), 'name' ]
			const block = this.Block( block_id )
			block.value_changed = next => this.data().name( next )
			// block.value_changed = next => {
			// 	const val = next
			// 	return this.data().name( val )
			// }
			block.update_value( this.data().name() )
			block.focused = next => this.name_focused( next )

			block.keydown_enter = () => {
				if ( this.data().name() == this.options_filtered()[0] ) {
					// this.insert()
					return true
				}
				this.event_select( this.options_filtered()[0] )
				block.focus()
				return true
			}
			// block.color = ()=> `hsl(${this.data().hue()} 60% 60%)`
			return block
		}

		@ $mol_action
		insert() {
			const sel_id = this.select_links().find( item=> {
				return item.key == this.data().name()
			} )?.id
			if ( ! sel_id ) return
			const sel_data = this.Link_data( sel_id )
			let new_ui_id = this.ui_id()
			if ( sel_data.name() ) {
				new_ui_id = this.replace( { 
					ui_id: this.ui_id(),
					new_type_id: sel_id,
				} )
			} else if (this.is_node()) {
				new_ui_id = this.replace( { 
					ui_id: this.ui_id(), 
					new_to: $ss_linkpad_link_ui_id_build( sel_id, this.ui_id()[0] )
				} )
			} else {
				new_ui_id = this.replace( { 
					ui_id: this.ui_id(),
					new_id: sel_id,
				} )
			}
			const value_block_id: $ss_linkpad_link_block_id = [ new_ui_id, 'value' ]
			const value_block = this.Block( value_block_id )
			value_block.focus()
		}
		// @ $mol_mem
		// autocomplete_showed(): boolean {
		// 	return this.autocomplete() && this.data_node().value() == ''
		// }

		// @ $mol_mem
		// visible_bubble_content() {
		// 	return this.autocomplete_showed() ?
		// 		[ this.Autocomplete_bubble_content() ] :
		// 		this.showed() ? 
		// 			[ this.Bubble_content() ] : []
		// }

		// @ $mol_mem
		// showed() {
		// 	return ( this.self_hovered() && this.block_focused() )
		// 		|| ( this.autocomplete_showed() && this.block_focused() )
		// }

		// @ $mol_mem_key
		// event_select( opt: string, e: Event ) {
		// 	return null
		// }
		
		@ $mol_mem
		filter_pattern() {
			return this.data().name()
		}

		@ $mol_mem
		valid(): boolean {
			return this.options_filtered().includes( this.data().name() )
		}

		@ $mol_mem
		autocomplete_showed(): boolean {
			return ! this.valid()
		}

		select_value( next?: any ): string {
			return this.data().name()
		}

		// @ $mol_mem
		// props_of_class() {
		// 	const class_name = this.data_node_parent().value()
		// 	return this.props_of( '$' + class_name )
		// }
		@ $mol_mem
		select_links() {
			const links: { id: string, key: string }[] = []
			this.all_link_ids().forEach( id=> {
				const data = this.Link_data( id )
				if ( ! data ) return
				if ( data.undef() ) return
				// const parts = [type?.name(), data.name(), data.val(), id]
				// const key = parts.join(':')
				if ( ! ( data.name() || data.val() ) ) return
				const type = this.Link_data( data.type_id() )
				const key = data.name() ? data.name() : `${type.name()} ${data.val()}`
				links.push( { id, key } )
			} )
			return links
		}

		@ $mol_mem
		select_dict() {
			const dict: Record< string, string > = Object.fromEntries( 
				this.select_links().map( item=> [ item.key, item.key ] ) 
			)
			return dict
		}

		event_select( selected: string ) {
			// const prop_tree = this.props_of_class().find( tree => this.$.$mol_view_tree2_prop_name( tree ) == selected )
			this.data().name( selected )
			// this.set_subprop_tree( this.id(), prop_tree )
		}

	}
	
}
