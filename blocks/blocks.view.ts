namespace $.$$ {

	export class $ss_blocks extends $.$ss_blocks {

		constructor() {
			super()
			let selected: $ss_blocks_block | undefined
			document.onselectionchange = ( e )=> {
				if( selected ) selected?.focus_state( 'blurred' )
				selected = this.block_from_sel()
				selected?.focus_state( 'focused' )
			}
		}

		@ $mol_mem
		block_dom_name() {
			return this.Block('0_0').dom_name()
		}

		@ $mol_mem_key
		Block( id: $ss_blocks_block_id ) {
			let obj = new this.$.$ss_blocks_block()
			obj.dom_id = ()=> JSON.stringify( id )
			return obj
		}

		block_from_node( node: Element ) {
			return this.Block( JSON.parse( node.id ) ) as $ss_blocks_block
		}

		block_from_sel() {
			let node = getSelection()?.anchorNode as Element | null
			while( node && node.localName !== this.block_dom_name() ) {
				node = node?.parentElement
			}
			if( node?.id ) return this.block_from_node( node )
		}

		@ $mol_mem
		input( e?: any ) {
			this.block_from_sel()?.input( e )
		}

		@ $mol_mem
		beforeinput( e?: any ) {
			this.block_from_sel()?.beforeinput( e )
		}

		@ $mol_mem
		keydown( e?: any ) {
			this.block_from_sel()?.keydown( e )
		}
		
		@ $mol_mem
		dragenter(e: any) {
			this.block_from_sel()?.dragenter( e )
		}

		@ $mol_mem
		drop(e: any) {
			this.block_from_sel()?.drop( e )
		}

		@ $mol_mem
		drag(e: any) {
			this.block_from_sel()?.drag( e )
		}

		@ $mol_mem
		dragleave(e: any) {
			this.block_from_sel()?.dragleave( e )
		}

		@ $mol_mem
		paste(e: any) {
			this.block_from_sel()?.paste( e )
		}

		@ $mol_mem
		cut(e: any) {
			this.block_from_sel()?.cut( e )
		}

	}
	
}
