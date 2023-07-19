namespace $.$$ {

	export class $ss_editor_node_ui_prop_root extends $.$ss_editor_node_ui_prop_root {

		@ $mol_mem
		bubble_content() {
			return [
				... this.children()[0]?.type() == 'list' ? [ this.Add_list_item_popover() ] : [],
				... this.bind() ? [ this.Changeable() ] : [],
				this.Drop(),
			]
		}

	}

}
