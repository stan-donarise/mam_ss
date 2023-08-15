namespace $.$$ {

	export class $ss_linkpad_app extends $.$ss_linkpad_app {

		// gql_bid() {
		// 	return this.gql_path_draft() ? '' : super.gql_bid()
		// }
		// submit_button() {
		// 	return this.gql_path_draft() ? [ this.Submit() ] : [ this.Demo() ]
		// }
		// @ $mol_action
		// submit() {
			// this.$.$mol_state_arg.value( 'path' , this.gql_path_draft() )
			// this.opened_path( this.gql_path_draft() )
		// }
		// @ $mol_action
		// demo() {
		// 	this.$.$mol_state_arg.value( 'path' , null )
		// }

		opened_editor_pages(): readonly any[] {
			return this.editor_pages( this.opened_path() )
		}

		raw_gql_path( next?: any ): string {
			if ( next === undefined ) return this.$.$mol_state_arg.value( 'path' ) || ''
			return this.$.$mol_state_arg.value( 'path', next ) || ''
		}

		opened_path( ): string {
			// const next = this.raw_gql_path()
			// if ( next == undefined )
			const path = this.$.$mol_state_arg.value( 'path' )
			// this.raw_gql_path( path )
			return path || ''
		}

	}

}
