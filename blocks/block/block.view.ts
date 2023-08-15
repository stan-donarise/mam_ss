namespace $.$$ {

	export type $ss_blocks_block_focus_states = 'focused' | 'setting' | 'blurred'
	export type $ss_blocks_block_id = any

	export function $ss_blocks_block_anchor_el() {
		const sel = document.getSelection()
		const anchor_el = sel?.anchorNode as HTMLElement
		let el = anchor_el
		if( !anchor_el?.dataset?.type ) {
			el = sel?.anchorNode?.parentElement as HTMLElement
		}
		return el
	}
	function focus_el(): HTMLElement {
		const sel = document.getSelection()
		const focus_node = sel?.focusNode as HTMLElement
		let el = focus_node
		if( !focus_node?.dataset?.type ) {
			el = sel?.focusNode?.parentElement as HTMLElement
		}
		return el
	}


	export class $ss_blocks_block extends $.$ss_blocks_block {

		@ $mol_mem
		sub() {
			const value = this.value()
			if( value && value != '\n' ) {
				return [ value ]
			}
			return [] as readonly any[]
		}

		@ $mol_mem
		after_content() {
			return `"${ this.visible_placeholder() }"`
		}
		@ $mol_mem
		visible_placeholder() {
			const placeholder = this.placeholder()
			return this.value() == '' ? placeholder : ''
		}

		@ $mol_mem
		focus_state( next?: $ss_blocks_block_focus_states ) {
			if ( next == 'focused' ) { 
				this.focused( true )
			} else {
				this.focused( false )
			}
			return next || "blurred"
		}

		async focus(): Promise<void> {
			this.focus_state( 'setting' )
			const dom = this.dom_node()
			// wait until dom_node appended
			if( dom.parentElement ) {
				const selection = window.getSelection()!
				const range = document.createRange()
				selection.removeAllRanges()
				let focusEl = dom.lastChild!
				if( ! focusEl ) focusEl = dom
				if( focusEl?.nodeName == 'BR' && focusEl.previousSibling ) focusEl = focusEl.previousSibling //fix firefox, for chrome isn't need
				range.setEnd( focusEl, focusEl.textContent?.length || 0 )
				range.collapse( false )
				selection.addRange( range )
				return
			}
			else {
				return new Promise( resolve => requestAnimationFrame( () => {
					resolve( this.focus() )
				} ) )
			}
		}

		input( e?: any ) {
			// this.value(this.dom_node().textContent)
			// this.value_changed(this.dom_node().textContent)
		}

		beforeinput( e?: any ) {
			const el = $ss_blocks_block_anchor_el()
			if (el.parentElement != focus_el().parentElement) {
			  e.preventDefault()
			  return
			}

			this.before_any_input( e )
			
			const sel = document.getSelection()!

			switch( e?.inputType ) {

				case 'insertParagraph':
					break

				case 'insertText':
					this.before_insert_text( e )
					break

				case 'deleteContentBackward':
				case 'deleteWordBackward': {
					if( sel.focusOffset == 0 && sel.isCollapsed ) {
						//block must be first child in parent (otherwise it won't work)
						if( sel.anchorNode == el.firstChild || sel.anchorNode == el ) {
							e.preventDefault()
						}
					}
					if( el?.textContent == '' || el?.innerText == '\n' ) {
						e.preventDefault()
						// removing.set(true);
					}
					break
				}

				case 'deleteContentForward':
				case 'deleteWordForward': {
					if( el?.parentElement?.innerText == '' || el?.parentElement?.innerText == '\n' ) {
						e.preventDefault()
						// removing.set( true )
						return
					}
					//br may exist, may not
					if( sel?.isCollapsed ) {
						if( sel.focusOffset == sel.anchorNode?.textContent?.length ) {
							if( sel.anchorNode == el.lastChild?.previousSibling )
								e.preventDefault()
							//el.lastChild.previousSibling(?) - because when there is only one line then previousSibling=null
							//== 'BR' - it should be only br, if not - there is text, and shouldn't preventDefault!
							//sel.anchorNode == el.lastChild.previousSibling?.previousSibling - beacause first previous it's br, and second previous it's focused textNode
							if( el.lastChild?.previousSibling?.nodeName == 'BR' && sel.anchorNode == el.lastChild.previousSibling?.previousSibling )
								e.preventDefault() //it's should consider that last el may be text... a may be not!
							if( sel.anchorNode == el.lastChild )
								e.preventDefault()
						}
						//sel.anchorNode - div, caret in empty line
						if( sel.anchorNode?.nodeType != 3 && ( sel.focusOffset >= sel.anchorNode!.childNodes.length - 2 ) ) {
							e.preventDefault()
						}
					}
					break
				}

			}

			if( e !== undefined ) return e as never
			return null as any
		}

		on_ctrl_x( e?: any ) {
		}

		keydown( e?: any ) {
			if( e.key == 'Tab' ) {
				e.preventDefault()

			} else if( e.key === 'Enter' ) {
				// document.execCommand( 'insertLineBreak' )
				e.preventDefault()

			} else if( e.ctrlKey ) {

				if( e.code == "KeyX" ) {
					this.on_ctrl_x( e )

				} else if (e.code == "KeyB") {
					e.preventDefault()

				} else if (e.code == "KeyI") {
					e.preventDefault()

				} else if (e.code == "KeyU") {
					e.preventDefault()
				}

			}
			if( e !== undefined ) return e as never
			return null as any
		}

		dragenter(e: any) {
			e.preventDefault()
		}

		drop(e: any) {
			e.preventDefault()
		}

		drag(e: any) {
			e.preventDefault()
		}

		dragleave(e: any) {
			e.preventDefault()
		}

		paste(e: any) {
			e.preventDefault()
			
			const sel = document.getSelection()

			if( sel?.rangeCount ) {
				const range = sel.getRangeAt( 0 )
				const data = e.clipboardData.getData( 'text/plain' )
				const lines = data.split( '\n' )
				range.deleteContents()
				let wasThereTextLineAlready = false
				lines.forEach( ( line: string, index: number ) => {
					if( line == '' || line == '\r' ) {
						range.insertNode( document.createElement( 'br' ) )
						range.collapse()
					} else {
						if( wasThereTextLineAlready ) {
							range.insertNode( document.createElement( 'br' ) )
							range.collapse()
						}
						range.insertNode( document.createTextNode( line ) )
						range.collapse()
						wasThereTextLineAlready = true
					}
				} )
			}

		}

		cut(e: any) {
		}

		mouseover() {
			this.hovered( true )
		}

		mouseout() {
			this.hovered( false )
		}

	}
	

}
