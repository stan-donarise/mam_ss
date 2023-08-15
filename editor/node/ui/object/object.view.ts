namespace $.$$ {
	
	export class $ss_editor_node_ui_object extends $.$ss_editor_node_ui_object {

		@ $mol_mem
		multiple( next?: boolean ) {
			if ( next === undefined ) return this.data_node().multiple()
			return this.data_node().multiple( next )
		}

		@ $mol_mem
		icons() {
			return [
				... this.multiple() ? [ this.Icon_multiple() ] : [],
			]
		}

		@ $mol_mem
		class_ui_node() {
			return this.children()[0]
		}

		@ $mol_mem
		object_label() {
			return [
				this.Block(),
				... this.icons().length > 0 ? [ this.Icons() ] : []
			]
		}

		@ $mol_mem
		type_tree() {
			return this.tree()?.kids?.[0]
		}

		clear() {
			this.data_node().value('')
		}

		select_value( next?: any ): string {
			return this.data_node().value()
		}

		@ $mol_mem
		select_dict() {
			const dict: Record< string, string >  = {}
			this.props_by_type( 'object' ).forEach( data => {
				if ( ! data.value() ) return
				dict[ data.id() ] = data.value()
			} )
			return dict
		}

		event_select( selected_data_id: string ) {
			this.replace( this.id(), selected_data_id )
		}

		@ $mol_mem
		class_tree() {
			const class_name = this.type_tree().type
			const class_tree = this.library_tree().select( class_name, null )
			const sup = class_tree.kids[0]
			return this.$.$mol_tree2.struct( class_name, [ sup ] )
		}

		@ $mol_mem
		class_tree_string() {
			return this.class_tree().toString()
		}

		@ $mol_action
		drop() {
			this.drop_parent_node( this.id() )
		}

		@ $mol_action
		add_sibling_above() {
			this.add_sibling_object_above( this.id() )
		}

		@ $mol_action
		add_new_subprop() {
			this.add_subprop( this.id() )
		}

	}

}
