namespace $.$$ {

	const color = $mol_style_func.vary('--color')
	const linecolor = $mol_style_func.vary('--linecolor')
	// const linecolor = color
	const semitransporent = $mol_style_func.vary('--semitransporent')

	$mol_style_define( $ss_linkpad_link_default, {
		backgroundColor: 'var(--block-color)',
		// '--linecolor': line_color,
		border: {
			// radius: $mol_gap.block,
		},
		flex: {
			direction: 'column',
			grow: 1,
			shrink: 1,
		},
		Open: {
			padding: {
				top: 0,
				bottom: 0,
				left: $mol_gap.space,
				right: $mol_gap.space,
			},
		},
		Type: {
			color
		},
		Self: {
			gap: $mol_gap.space,
			flex: {
				grow: 1,
			},
			":hover": {
				background: {
					color: $mol_theme.hover,
				}
			}
			// gap: $mol_gap.text,
		},
		Label: {
			height: 'fit-content',
			width: 'fit-content',
			gap: '.5rem',
			flex: {
				shrink: 1,
				grow: 1,
				wrap: 'wrap',
			},
			alignItems: 'flex-start',
			// margin: {
			// 	top: '-.75rem',
			// },
		},
		Name: {
			flex: {
				shrink: 1,
				grow: 1,
			},
			color: $mol_theme.shade,
		},
		Name_disabled: {
			flex: {
				shrink: 1,
			},
			color: $mol_theme.shade,
		},
		Value: {
			flex: {
				shrink: 1,
				grow: 1,
			},
		},

		Circle_and_line: {
			flex: {
				direction: 'column',
			},
		},
		Line_bottom: {
			border: {
				left: {
					color: linecolor,
					width: '1px',
					style: 'solid',
				},
			},
			flex: {
				grow: 1,
			},
			margin: {
				left:  $mol_style_func.calc('.75rem - 0px'),
			},
		},
		Left_line: {
			border: {
				top: {
					radius: '1rem',
					color: linecolor,
					width: '1px',
					style: 'solid',
				},
			},
			width: '.75rem',
			margin: {
				top: '.75rem',
				left: '.25rem',
			},
		},
		Right_line: {
			borderTopRightRadius: '1rem',
			border: {
				top: {
					color: linecolor,
					width: '1px',
					style: 'solid',
				},
				right: {
					color: linecolor,
					width: '1px',
					style: 'solid',
				},
			},
			width: '.75rem',
			height: '.75rem',
			margin: {
				// right: '-.25rem',
				top: '.75rem',
				bottom: '.25rem',
			},
			// position: 'absolute',
		},
		Chevron: {
			position: 'absolute',
			margin: {
				top: '.15rem',
			},
			marginLeft: 'calc( .3rem - 1px )',
			color: linecolor
		},
		Connected_link: {
			flex: {
				direction: 'column',
			},
		},
		To_link_gap: {
			width: '1.75rem',
			// margin: {
			// 	left: '1.75rem',
			// 	// top: $mol_gap.block,
			// },
		},

		Slot: {
			font: {
				size: '.5rem',
			},
			height: '.5rem',
			lineHeight: '1',
		},
		// Name_block: {
		// 	padding: {
		// 		left: '1rem',
		// 	},
		// },
		// Type_name: {
		// 	padding: {
		// 		left: '1rem',
		// 	},
		// },

		Circle: {
			// outline: 'var(--color) 2px solid',
			outline: 'var(--color) 1px solid',
			border: {
				radius: '.75rem',
				color: 'rgba(255,255,255,0.1)' as any,
				width: '1px',
				// style: 'solid',
			},
			background: {
				color: semitransporent,
			},
			width: '1.5rem',
			height: '1.5rem',
			alignItems: 'center',
			justifyContent: 'center',
		},
		Icon: {
			margin: {
				top: '-0.15rem',
			},
			// fontSize: '1rem',
		},

		// Type_name: {
		// 	color: $mol_theme.control,
		// },
		// Type_type: {
		// 	color: $mol_theme.control,
		// 	opacity: 0.5,
		// },

		Links: {
			flex: {
				direction: 'column',
			},
			margin: {
				left: '.75rem',
			},
			padding: {
				// left:s '1rem',
			},
			// border: {
			// 	left: {
			// 		color: 'white',
			// 		width: '1px',
			// 		style: 'solid',
			// 	},
			// },
		},

		Link_id: {
			opacity: 0.2,
		},
	})

}
