namespace $.$$ {

	export class $ss_editor_node_ui_default extends $.$ss_editor_node_ui_default {

		@ $mol_mem
		block_focused() {
			return this.Block().focused()
		}

		@ $mol_mem
		auto() {
			this.data_node().value()
			this.data_node().type()
		}

	}

}
