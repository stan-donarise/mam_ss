namespace $.$$ {

	export class $ss_editor_node_ui_component extends $.$ss_editor_node_ui_component {
		@ $mol_mem
		Class_body() {
			return this.children()[0]?.Class_base_body()
		}
		
		@ $mol_mem
		class_children() {
			return super.class_children().map( child => {
				if ( child.type() != 'object' ) child.type_force('prop_root')
				return child
			} )
		}

		@ $mol_action
		add_new_rootprop() {
			this.add_rootprop( this.id() )
		}
	}

}
