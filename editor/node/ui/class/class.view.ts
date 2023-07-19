namespace $.$$ {

	export class $ss_editor_node_ui_class extends $.$ss_editor_node_ui_class {

		@ $mol_mem
		valid(): boolean {
			return this.options_filtered().includes( '$' + this.data_node().value() )
		}

		@ $mol_mem
		autocomplete_showed(): boolean {
			return ! this.valid()
		}

		select_dict() {
			return Object.fromEntries(this.class_list().map( cl => [cl, cl] ))
		}

		event_select( class_name: string ) {
			this.data_node().value( class_name.slice(1) )
			this.Block().focus()
		}

		clear() {
			this.data_node().value('')
			this.Block().focus()
		}
	}

}
