namespace $ {

	// type DeepClient = import("@deep-foundation/deeplinks/imports/client").DeepClient
	// type minilinks = Awaited< typeof import("@deep-foundation/deeplinks/imports/minilinks") >['minilinks']
	type DeepClient = any
	type minilinks = any

	export class $ss_linkpad_lib_deep {

		@ $mol_mem
		static deepBundle() {
			$mol_wire_solid()
			// if ( ! this.gql_path() ) $mol_fail( 'no gql_path' )
			const { makeDeepClient, minilinks } = require('../ss/linkpad/lib/deep/main.bundle.js') as {
				makeDeepClient: (path: string, ssl: boolean) => Promise<DeepClient>,
				minilinks: minilinks
			}
			return { makeDeepClient, minilinks }
		}

		@ $mol_mem
		static gql_path( next?: string ) {
			$mol_wire_solid()
			return next ?? ''
		}

		@ $mol_mem
		static deep() {
			$mol_wire_solid()
			if ( ! this.gql_path() ) $mol_fail( 'no path' )
			const deep = $mol_wire_sync( this.deepBundle() ).makeDeepClient( this.gql_path(), true )
			return deep
		}

		@ $mol_mem
		static minilinks() {
			$mol_wire_solid()
			return $mol_wire_sync( this.deepBundle() ).minilinks
		}
		
	}

}
