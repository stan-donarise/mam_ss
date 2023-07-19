namespace $.$$ {

	export class $ss_editor_node_ui_pop extends $.$ss_editor_node_ui_pop {

		@ $mol_mem
		autocomplete_showed(): boolean {
			return this.autocomplete() && this.data_node().value() == ''
		}

		@ $mol_mem
		visible_bubble_content() {
			return this.autocomplete_showed() ?
				[ this.Autocomplete_bubble_content() ] :
				this.showed() ? 
					[ this.Bubble_content() ] : []
		}

		@ $mol_mem
		showed() {
			return ( this.self_hovered() && this.block_focused() )
				|| ( this.autocomplete_showed() && this.block_focused() )
		}

		@ $mol_mem_key
		event_select( opt: string, e: Event ) {
			return null
		}
		
		@ $mol_mem
		filter_pattern() {
			return this.data_node().value()
		}

	}
	
}
