namespace $.$$ {

	$mol_style_define( $ss_linkpad_link_undef, {
		Insert_row: {
			position: 'absolute',
			width: '100%',
			justifyContent: 'center',
			gap: $mol_gap.space,
			pointerEvents: 'none',
		},
		Autocomplete_bubble_content: {
			flex: {
				shrink: 1,
			},
		},
		// Insert: {
		// 	padding: 0,
		// 	pointerEvents: 'auto',
		// },
		// Insert_label: {
		// 	color: $mol_theme.shade,
		// 	opacity: .5,
		// },
		// Existed: {
		// 	padding: 0,
		// 	pointerEvents: 'auto',
		// },
		// Existed_label: {
		// 	color: $mol_theme.shade,
		// 	opacity: .5,
		// },
		// Name: {
		// 	flex: {
		// 		grow: 0,
		// 	},
		// },
		Anchor: {
			width: 'fit-content',
			gap: $mol_gap.block,
			flex: {
				shrink: 1,
				grow: 1,
			},
			alignItems: 'flex-start',
		},
		Label: {
			position: 'relative',
			justifyContent: 'space-between',
		}
	})
	
}
