namespace $.$$ {

	export type $ss_editor_node_data_id = string

	export class $ss_editor_node_data extends $.$ss_editor_node_data {

		@ $mol_mem
		binded( next?: any ): boolean {
			if ( next === undefined ) {
				const bind_id = this.child_ids()[0]
				const bind_type = this.data_type( bind_id )
				return ['left','bi','right'].includes( bind_type )
			}
			if ( next ) {
				const value_id = this.child_ids()[0]
				const bind_id = $mol_guid() + ':<='
				this.data_value( bind_id, '<=' )
				this.data_type( bind_id, 'left' )

				const prop_name = this.value()
				const prop_id = prop_name
				this.data_value( prop_id, prop_name )
				this.data_type( prop_id, 'prop' )
				this.data_child_ids( prop_id, [ value_id ] )
				this.data_child_ids( bind_id, [ prop_id ] )
				this.data_child_ids( this.id(), [ bind_id ] )
			} else {
				const bind_id = this.child_ids()[0]
				const prop_id = this.data_child_ids( bind_id )[0]
				const value_id = this.data_child_ids( prop_id )[0]
				this.data_child_ids( this.id(), [ value_id ] )
				this.changeable( false )
			}
			return next
		}

	}
	
}
