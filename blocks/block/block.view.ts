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
	export function $ss_blocks_block_trim( str: string ){
		return str?.at(-1) == '\n' ? str.slice(0, -1) : str
	}


	export class $ss_blocks_block extends $.$ss_blocks_block {
		@ $mol_mem
		br() {
			return document.createElement('br')
		}

		@ $mol_mem
		sub() {
			const value = this.default_value()
			if( value && value != '\n' ) {
				// return [ value + '\n' ]
				// return [ value + '\n', this.br() ]
				return [ value, this.br() ]
			}
			return [ this.br() ] as readonly any[]
		}

		@ $mol_action
		update_value( data_value: string ) {
			// const val = $ss_blocks_block_trim( data_value )
			const val = data_value || '\n'
			this.default_value = ()=> val
			const innerText = this.dom_node()?.parentElement?.innerText
			if ( val != innerText ) {
				this.dom_node().innerHTML = val != '\n' ? val : '<br/>'
			}
		}

		// inner_text() {
		// 	const innerText = this.dom_node()?.parentElement?.innerText
		// 	const trimmed = $ss_blocks_block_trim( innerText! )
		// 	return trimmed
		// }
		// @ $mol_mem
		// value_changed(next?: any) {
		// 	$mol_wire_solid()
		// 	return super.value_changed( next )
		// 	// if ( next !== undefined ) return next as never
		// 	// return "default_block_value_changed"
		// }
		input( e?: any ) {
			const innerText = this.dom_node()?.parentElement?.innerText
			this.value_changed( innerText )
			// this.value_changed( this.inner_text() )
		}
		// auto() {
		// 	this.value_changed()
		// }

		@ $mol_mem
		before_content() {
			return `"${ this.visible_placeholder() }"`
		}
		// @ $mol_mem
		// after_content() {
		// 	return `"${ this.visible_placeholder() }"`
		// }
		@ $mol_mem
		empty() {
			// console.log('this.empty()')
			return ['','\n'].includes( this.value_changed() )
		}
		@ $mol_mem
		visible_placeholder() {
			const placeholder = this.placeholder()
			return this.empty() ? placeholder : ''
		}

		auto() {
			this.focused_or_hovered()
		}
		// @ $mol_mem
		// focused_or_hovered() {
		// 	$mol_wire_solid()
		// 	const next = this.focused() || this.hovered()
		// 	this.on_focused_or_hovered( next )
		// 	return next
		// }
		@ $mol_action
		set_focused_or_hovered( args: { focused?: boolean, hovered?: boolean } ) {
			const { focused, hovered } = args
			if ( focused === undefined ) {
				this.on_focused_or_hovered( this.focused() || hovered )
			} else {
				this.on_focused_or_hovered( this.hovered() || focused )
			}
		}
		
		@ $mol_mem
		focus_state( next?: $ss_blocks_block_focus_states ) {
			if ( next == 'focused' ) { 
				this.focused( true )
				this.set_focused_or_hovered( { focused: true } )
			} else {
				this.focused( false )
				this.set_focused_or_hovered( { focused: false } )
			}
			return next || "blurred"
		}

		async focus( pos: 'start' | 'end' = 'end' ): Promise<void> {
			this.focus_state( 'setting' )
			const dom = this.dom_tree()
			// wait until dom_node appended

			// export function focusInEnd(el: HTMLElement) {
			// 	const selection = window.getSelection();
			// 	const range = document.createRange();
			// 	selection.removeAllRanges();
			// 	let focusEl = el.lastChild
			// 	if (isBR(focusEl) && focusEl.previousSibling) focusEl = focusEl.previousSibling //fix firefox, for chrome isn't need
			// 	range.setEnd(focusEl, focusEl.textContent.length);
			// 	range.collapse(false);
			// 	selection.addRange(range);
			//   }
			if( 
				dom?.parentElement?.innerText == this.value_changed() 
				|| dom.parentElement && !this.value_changed() 
			) {
				// if( dom.parentElement ) {
				const selection = window.getSelection()!
				const range = document.createRange()
				selection.removeAllRanges()
				let focusEl = dom.lastChild!
				if( ! focusEl ) focusEl = dom
				if( focusEl?.nodeName == 'BR' && focusEl.previousSibling ) focusEl = focusEl.previousSibling //fix firefox, for chrome isn't need
				// console.log(focusEl)
				// console.log('focusEl?.textContent?.length', focusEl?.textContent?.length)
				// console.log('this.value_changed()', this.value_changed())
				// console.log('focusEl?.textContent?.length || this.value_changed().length', focusEl?.textContent?.length || this.value_changed().length)
				// range.setEnd( focusEl, 0 )
				// range.setEnd( focusEl, this.value_changed().length )
				// console.log(...dom.childNodes)
				// setTimeout(() => {
				// 	console.log(dom)
				// 	console.log(...dom.childNodes)
				// 	console.log(focusEl)
				// }, 1000);
				// range.setEnd( focusEl, focusEl?.textContent?.length || this.value_changed().length )
				range.setEnd( focusEl, focusEl.textContent!.length )
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

		// input( e?: any ) {
			// this.value(this.dom_node().textContent)
			// this.value_changed(this.dom_node().textContent)
		// }

		beforeinput( e?: InputEvent ) {
			const el = $ss_blocks_block_anchor_el()
			if (el.parentElement != focus_el().parentElement) {
			  e?.preventDefault()
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
				const keydown_enter = this.keydown_enter( e )
				if ( keydown_enter !== true ) {
					document.execCommand( 'insertLineBreak' )
				}
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
			
			this.before_any_input( e )

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

			const innerText = this.dom_node()?.parentElement?.innerText
			this.value_changed( innerText )

		}

		cut(e: any) {
		}

		mouseover() {
			this.hovered( true )
			this.set_focused_or_hovered( { hovered: true } )
		}

		mouseout() {
			this.hovered( false )
			this.set_focused_or_hovered( { hovered: false } )
		}

		@ $mol_mem
		hovered( next?: any ): boolean {
			$mol_wire_solid()
			return next
		}
		@ $mol_mem
		focused( next?: any ): boolean {
			$mol_wire_solid()
			return next
		}

	}
	

}
