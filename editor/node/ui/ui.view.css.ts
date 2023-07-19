namespace $.$$ {

	$mol_style_define( $ss_editor_node_ui_root, {
		padding: $mol_gap.block,
	})
	
	$mol_style_define( $ss_editor_node_ui_dict, {
		color: $mol_theme.shade,
		Self_body: {
			padding: {
				left: $mol_gap.block,
				right: $mol_gap.block,
			},
		},
	})

	$mol_style_define( $ss_editor_node_ui_left, {
		Self_body: {
			color: $mol_theme.shade,
			opacity: 0.6,
		},
	})

	$mol_style_define( $ss_editor_node_ui_right, {
		Self_body: {
			color: $mol_theme.shade,
			opacity: 0.6,
		},
	})

	$mol_style_define( $ss_editor_node_ui_bi, {
		Self_body: {
			color: $mol_theme.shade,
			opacity: 0.6,
		},
	})

	$mol_style_define( $ss_editor_node_ui_value, {
		padding: {
			left: $mol_gap.space,
		},
		Self_body: {
			color: $mol_theme.shade,
			background: {
				color: $mol_theme.back,
			},
			padding: {
				left: $mol_gap.space,
				right: $mol_gap.space,
			},
			border: {
				radius: $mol_gap.space,
			},
		},
	})
	

	$mol_style_define( $ss_editor_node_ui_key, {
		color: $mol_theme.shade,
		Self_body: {
			align: {
				self: 'flex-start',
			},
		},
	})

	$mol_style_define( $ss_editor_node_ui_dict, {
		Children: {
			flex: {
				basis: '100%'
			},
			padding: {
				left: $mol_gap.block,
			},
			border: {
				left: {
					width: '1px',
					style: 'solid',
					color: 'rgba(255, 255, 255, 0.2)' as any,
				}
			},
		},
	})

	$mol_style_define( $ss_editor_node_ui_bool, {
		Noeditable: {
			display: 'none',
			opacity: 0,
		},
	})
	
	$mol_style_define( $ss_editor_node_ui_null, {
		Noeditable: {
			display: 'none',
			opacity: 0,
		},
	})

	$mol_style_define( $ss_editor_node_ui_string, {
		Noeditable: {
			display: 'none',
			opacity: 0,
		},
	})

}
