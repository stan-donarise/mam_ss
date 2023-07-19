namespace $.$$ {

	$mol_style_define( $ss_editor_node_ui_prop, {
		flex: {
			direction: 'row'
		},
		Position_label: {
			Content: {
				padding: 0,
			},
		},
		Anchor: {
			align: {
				self: 'flex-start'
			},
		},
		Add_list_item_popover: {
			width: 'fit-content',
			flex: {
				grow: 0,
			},
		},
		Icons: {
			color: $mol_theme.shade,
			opacity: .6,
		},
		Drop: {
			color: $mol_theme.shade,
			flex: {
				grow: 1
			},
		},
		Self_body: {
			align: {
				self: 'flex-start',
			},
		},
		Children: {
			padding: {
				left: $mol_gap.space,
			},
		},
	})
	
}
