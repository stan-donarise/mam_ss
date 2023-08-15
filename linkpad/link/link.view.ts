namespace $.$$ {
		
	// export type $ss_linkpad_link_id = number
	export type $ss_linkpad_link_id = string
	export type $ss_linkpad_link_ui_id = [ $ss_linkpad_link_ui_id | null, $ss_linkpad_link_id ]
	export type $ss_linkpad_link_block_id = [ $ss_linkpad_link_ui_id, 'type' | 'value' | 'name' | string ]
	export function $ss_linkpad_link_ui_id_build( 
		link_id: $ss_linkpad_link_id, 
		parent_ui_id: $ss_linkpad_link_ui_id | null = null 
	): $ss_linkpad_link_ui_id {
		return [ parent_ui_id, link_id ]
	}
	export function $ss_linkpad_link_id_from_ui( ui_id: $ss_linkpad_link_ui_id ): $ss_linkpad_link_id {
		return ui_id[ 1 ]
	}
	export function $ss_linkpad_link_id_parent_from_ui( ui_id: $ss_linkpad_link_ui_id ): $ss_linkpad_link_id | undefined {
		return ui_id[ 0 ]?.[ 1 ]
	}

	export class $ss_linkpad_link extends $.$ss_linkpad_link {

		type_data(): $ss_linkpad_link_data {
			return this.Link_data( this.data().type_id() )
		}

		@ $mol_mem
		ui_type(): string {
			let type = 'default'
			if ( this.type_data()?.name() == 'Type' ) type = 'type_link'
			if ( this.data().undef() ) type = 'undef'
			return type
		}

		@ $mol_mem
		Sub() {
			return this.variants()[ this.ui_type() ]
		}

	}
	
}
