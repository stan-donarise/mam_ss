namespace $.$$ {

	export type $ss_editor_node_ui_id = [ $ss_editor_node_ui_id | null, $ss_editor_node_data_id ]
	export function $ss_editor_node_ui_id_build( data_id: string, parent_ui_id: $ss_editor_node_ui_id | null = null ): $ss_editor_node_ui_id {
		return [ parent_ui_id, data_id ]
	}

	export class $ss_editor_node_ui extends $.$ss_editor_node_ui {
		@ $mol_mem
		Sub() {
			return this.variants()[ this.type_force() || this.type() ]
		}
	}

}
