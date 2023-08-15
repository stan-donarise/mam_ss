namespace $.$$ {

	export class $ss_editor_node_ui_prop extends $.$ss_editor_node_ui_prop {

		@ $mol_mem
		changeable( next?: boolean ) {
			if ( next === undefined ) return this.data_node().changeable()
			return this.data_node().changeable( next )
		}

		@ $mol_mem
		multiple( next?: boolean ) {
			if ( next === undefined ) return this.data_node().multiple()
			return this.data_node().multiple( next )
		}

		@ $mol_mem
		icons() {
			return [
				... this.multiple() ? [ this.Icon_multiple() ] : [],
				... this.changeable() ? [ this.Icon_changeable() ] : [],
			]
		}

		@ $mol_mem
		tail_ui_node_type() {
			return this.tail_ui_node_nullable()?.type() || null
		}

		@ $mol_mem
		tail_ui_node_nullable() {
			if (this.position() == 'binded') return null

			let ui_node = this.children()[0]
			while (ui_node) {
				switch ( ui_node.data_node().type() ) {
					case 'list':
					case 'dict':
						return ui_node
					case 'object':
						return null
				}
				ui_node = ui_node.children()[0]
			}
			return null
		}

		@ $mol_mem
		tail_ui_node() {
			if ( this.tail_ui_node_type() != '' ) return this.tail_ui_node_nullable()!
			return super.tail_ui_node()
		}

		@ $mol_mem
		self_sub() {
			return [
				this.Self_block(),
				... this.icons().length > 0 ? [ this.Icons() ] : [],
				... this.tail_ui_node_type() == 'list' ? [ this.Children(), this.List_body() ] :
					this.tail_ui_node_type() == 'dict' ? [ this.Children(), this.Dict_body() ] : []
			]
		}

		@ $mol_mem
		sub() {
			return [
				this.Self_body(), 
				... this.tail_ui_node_type() == 'list' ? [ this.List_children() ] :
					this.tail_ui_node_type() == 'dict' ? [ this.Dict_children() ] :
					this.children().length > 0 ? [ this.Children() ] : []
			]
		}

		@ $mol_mem
		bubble_content() {
			return [
				... this.children()[0]?.type() == 'list' ? [ this.Add_list_item_popover() ] : [],
				... super.bubble_content()
			]
		}

		@ $mol_mem
		new_item_positions() {
			const list_children = this.children()[0].children()
			return $mol_range2().slice( 1 , list_children.length + 2 )
				.map( num => this.New_item_pos( num ) )
		}

		pos_title( i: number ) {
			return String( i )
		}

		@ $mol_action
		drop() {
			if ( this.position() == 'binded' ) {
				this.unbind_prop( this.id() )
				return
			}
			this.drop_node( this.id() )
		}

		@ $mol_action
		add_first() {
			const list_ui_id = this.children()[0].id()
			this.add_object_in_list( list_ui_id, 0 )
		}

		@ $mol_action
		add_in_pos( pos: string ) {
			const list_ui_id = this.children()[0].id()
			this.add_object_in_list( list_ui_id, Number( pos ) - 1 )
		}
		
	}

}
