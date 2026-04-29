declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	export class $ss_blocks_block extends $mol_view {
		value( next?: string ): string
		focus_state( next?: string ): string
		after_content( ): string
		mouseout( next?: any ): any
		mouseover( next?: any ): any
		minimal_height( ): number
		sub( ): readonly(any)[]
		value_changed( next?: string ): string
		attr( ): ({ 
			'focus-state': ReturnType< $ss_blocks_block['focus_state'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'--after': ReturnType< $ss_blocks_block['after_content'] >,
		})  & ReturnType< $mol_view['style'] >
		visible_placeholder( ): string
		placeholder( ): string
		on_ctrl_x( next?: any ): any
		before_any_input( next?: any ): any
		before_insert_text( next?: any ): any
		beforeinput( next?: any ): any
		keydown( next?: any ): any
		input( next?: any ): any
		dragenter( next?: any ): any
		drop( next?: any ): any
		drag( next?: any ): any
		dragleave( next?: any ): any
		paste( next?: any ): any
		cut( next?: any ): any
		event( ): ({ 
			mouseout( next?: ReturnType< $ss_blocks_block['mouseout'] > ): ReturnType< $ss_blocks_block['mouseout'] >,
			mouseover( next?: ReturnType< $ss_blocks_block['mouseover'] > ): ReturnType< $ss_blocks_block['mouseover'] >,
		})  & ReturnType< $mol_view['event'] >
		focused( next?: boolean ): boolean
		hovered( next?: boolean ): boolean
		focus( ): any
	}
	
}

//# sourceMappingURL=block.view.tree.d.ts.map
declare namespace $ {

	export class $ss_blocks extends $mol_object2 {
		Block( id: any): $ss_blocks_block
		beforeinput( next?: any ): any
		keydown( next?: any ): any
		input( next?: any ): any
		dragenter( next?: any ): any
		drop( next?: any ): any
		drag( next?: any ): any
		dragleave( next?: any ): any
		paste( next?: any ): any
		cut( next?: any ): any
	}
	
}

//# sourceMappingURL=blocks.view.tree.d.ts.map
declare namespace $ {

	type __ss_blocks_contenteditable_1 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['Block'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['Block'] >[0]
	>
	type __ss_blocks_contenteditable_2 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_beforeinput'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['beforeinput'] >[0]
	>
	type __ss_blocks_contenteditable_3 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_keydown'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['keydown'] >[0]
	>
	type __ss_blocks_contenteditable_4 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_input'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['input'] >[0]
	>
	type __ss_blocks_contenteditable_5 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_dragenter'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragenter'] >[0]
	>
	type __ss_blocks_contenteditable_6 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_drop'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drop'] >[0]
	>
	type __ss_blocks_contenteditable_7 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_drag'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drag'] >[0]
	>
	type __ss_blocks_contenteditable_8 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_dragleave'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragleave'] >[0]
	>
	type __ss_blocks_contenteditable_9 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_paste'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['paste'] >[0]
	>
	type __ss_blocks_contenteditable_10 = $mol_type_enforce<
		Parameters< $ss_blocks_contenteditable['blocks_cut'] >[0]
		,
		Parameters< ReturnType< $ss_blocks_contenteditable['Blocks'] >['cut'] >[0]
	>
	export class $ss_blocks_contenteditable extends $mol_view {
		Block( id: any): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['Block'] >
		blocks_beforeinput( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['beforeinput'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['beforeinput'] >
		blocks_keydown( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['keydown'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['keydown'] >
		blocks_input( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['input'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['input'] >
		blocks_dragenter( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragenter'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragenter'] >
		blocks_drop( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drop'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drop'] >
		blocks_drag( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drag'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['drag'] >
		blocks_dragleave( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragleave'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['dragleave'] >
		blocks_paste( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['paste'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['paste'] >
		blocks_cut( next?: ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['cut'] > ): ReturnType< ReturnType< $ss_blocks_contenteditable['Blocks'] >['cut'] >
		Body( ): $mol_view
		Blocks( ): $ss_blocks
		sub( ): readonly(any)[]
		field( ): ({ 
			'contentEditable': boolean,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			beforeinput( next?: ReturnType< $ss_blocks_contenteditable['blocks_beforeinput'] > ): ReturnType< $ss_blocks_contenteditable['blocks_beforeinput'] >,
			keydown( next?: ReturnType< $ss_blocks_contenteditable['blocks_keydown'] > ): ReturnType< $ss_blocks_contenteditable['blocks_keydown'] >,
			input( next?: ReturnType< $ss_blocks_contenteditable['blocks_input'] > ): ReturnType< $ss_blocks_contenteditable['blocks_input'] >,
			dragenter( next?: ReturnType< $ss_blocks_contenteditable['blocks_dragenter'] > ): ReturnType< $ss_blocks_contenteditable['blocks_dragenter'] >,
			drop( next?: ReturnType< $ss_blocks_contenteditable['blocks_drop'] > ): ReturnType< $ss_blocks_contenteditable['blocks_drop'] >,
			drag( next?: ReturnType< $ss_blocks_contenteditable['blocks_drag'] > ): ReturnType< $ss_blocks_contenteditable['blocks_drag'] >,
			dragleave( next?: ReturnType< $ss_blocks_contenteditable['blocks_dragleave'] > ): ReturnType< $ss_blocks_contenteditable['blocks_dragleave'] >,
			paste( next?: ReturnType< $ss_blocks_contenteditable['blocks_paste'] > ): ReturnType< $ss_blocks_contenteditable['blocks_paste'] >,
			cut( next?: ReturnType< $ss_blocks_contenteditable['blocks_cut'] > ): ReturnType< $ss_blocks_contenteditable['blocks_cut'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=contenteditable.view.tree.d.ts.map
declare namespace $ {

	export class $ss_editor_node_data extends $mol_object2 {
		id( ): string
		value( next?: string ): string
		type( next?: string ): string
		child_ids( next?: readonly(string)[] ): readonly(string)[]
		child_nodes( next?: readonly($ss_editor_node_data)[] ): readonly($ss_editor_node_data)[]
		tree( next?: $mol_tree2_empty ): $mol_tree2_empty
		multiple( next?: boolean ): boolean
		changeable( next?: boolean ): boolean
		binded( next?: boolean ): boolean
		data_tree( id: any, next?: $mol_tree2_empty ): $mol_tree2_empty
		data_value( id: any, next?: string ): string
		data_type( id: any, next?: string ): string
		data_child_ids( id: any, next?: readonly(string)[] ): readonly(string)[]
		data_child_nodes( id: any, next?: readonly($ss_editor_node_data)[] ): readonly($ss_editor_node_data)[]
		data_changeable( id: any, next?: boolean ): boolean
		data_multiple( id: any, next?: boolean ): boolean
	}
	
}

//# sourceMappingURL=data.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_default_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_width_ss_editor_node_ui_default_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_list__rows_ss_editor_node_ui_default_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_default['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ss_editor_node_ui_default extends $mol_view {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		children( ): readonly($ss_editor_node_ui)[]
		Children( ): $mol_list
		block_focused( ): boolean
		id( ): string
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
		attr( ): ({ 
			'focused': ReturnType< $ss_editor_node_ui_default['block_focused'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=default.view.tree.d.ts.map
declare namespace $ {

	export class $ss_editor_noedit extends $mol_view {
		field( ): ({ 
			'contentEditable': boolean,
		})  & ReturnType< $mol_view['field'] >
	}
	
}

//# sourceMappingURL=noedit.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_pop_over extends $mol_pop {
		hovered( next?: boolean ): boolean
		event_show( next?: any ): any
		event_hide( next?: any ): any
		showed( ): ReturnType< $mol_pop_over['hovered'] >
		attr( ): ({ 
			'tabindex': number,
		})  & ReturnType< $mol_pop['attr'] >
		event( ): ({ 
			mouseenter( next?: ReturnType< $mol_pop_over['event_show'] > ): ReturnType< $mol_pop_over['event_show'] >,
			mouseleave( next?: ReturnType< $mol_pop_over['event_hide'] > ): ReturnType< $mol_pop_over['event_hide'] >,
		})  & ReturnType< $mol_pop['event'] >
	}
	
}

//# sourceMappingURL=over.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_pop_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_pop_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['bubble_content'] >
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_pop_over__showed_ss_editor_node_ui_pop_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['showed'] >
		,
		ReturnType< $mol_pop_over['showed'] >
	>
	type $mol_pop_over__align_ss_editor_node_ui_pop_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['test'] >
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__Anchor_ss_editor_node_ui_pop_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['Anchor'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__bubble_content_ss_editor_node_ui_pop_6 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['visible_bubble_content'] >
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	type $mol_list__rows_ss_editor_node_ui_pop_7 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_ss_editor_node_ui_pop_8 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['bubble_content_autocomplete'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_pop_9 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['autocomplete_footer'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_pop_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_select__no_options_message_ss_editor_node_ui_pop_11 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_select['no_options_message'] >
	>
	type $mol_select__event_select_ss_editor_node_ui_pop_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['event_select'] >
		,
		ReturnType< $mol_select['event_select'] >
	>
	type $mol_select__dictionary_ss_editor_node_ui_pop_13 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['select_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_select__filter_pattern_ss_editor_node_ui_pop_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_pop['filter_pattern'] >
		,
		ReturnType< $mol_select['filter_pattern'] >
	>
	export class $ss_editor_node_ui_pop extends $ss_editor_node_ui_default {
		showed( next?: boolean ): boolean
		test( ): string
		self_hovered( ): ReturnType< ReturnType< $ss_editor_node_ui_pop['Self_body'] >['hovered'] >
		Anchor( ): $mol_view
		bubble_content( ): readonly(any)[]
		Bubble_content( ): $ss_editor_noedit
		visible_bubble_content( ): readonly(any)[]
		Self_body( ): $mol_pop_over
		Children( ): $mol_list
		bubble_content_autocomplete( ): readonly(any)[]
		Bubble_scroll( ): $mol_scroll
		autocomplete_footer( ): readonly(any)[]
		Autocomplete_footer( ): $mol_view
		event_select( id: any, next?: any ): any
		Bubble_pane( ): ReturnType< ReturnType< $ss_editor_node_ui_pop['Autocomplete'] >['Bubble_pane'] >
		select_dict( ): Record<string, any>
		filter_pattern( ): string
		sub( ): readonly(any)[]
		Autocomplete_bubble_content( ): $ss_editor_noedit
		autocomplete( ): boolean
		data_node( ): $ss_editor_node_data
		options_filtered( ): readonly(any)[]
		Autocomplete( ): $mol_select
		attr( ): ({ 
			'hovered': ReturnType< $ss_editor_node_ui_pop['self_hovered'] >,
		})  & ReturnType< $ss_editor_node_ui_default['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_find_replace extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=replace.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__click_ss_editor_node_ui_class_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_class_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $ss_editor_node_ui_class_self__Block_ss_editor_node_ui_class_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class['Block'] >
		,
		ReturnType< $ss_editor_node_ui_class_self['Block'] >
	>
	type $ss_editor_node_ui_class_self__valid_ss_editor_node_ui_class_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class['valid'] >
		,
		ReturnType< $ss_editor_node_ui_class_self['valid'] >
	>
	export class $ss_editor_node_ui_class extends $ss_editor_node_ui_pop {
		Block( ): $ss_blocks_block
		valid( ): boolean
		clear( next?: any ): any
		Replace_class_icon( ): $mol_icon_find_replace
		Replace_class( ): $mol_button_minor
		data_node( ): $ss_editor_node_data
		tree( ): $mol_tree2_empty
		sub( ): readonly(any)[]
		autocomplete( ): boolean
		class_list( ): readonly(string)[]
		Anchor( ): $ss_editor_node_ui_class_self
		bubble_content( ): readonly(any)[]
	}
	
	type $ss_editor_noedit__sub_ss_editor_node_ui_class_self_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_class_self_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_class_self extends $mol_view {
		Dollar( ): $ss_editor_noedit
		Block( ): $ss_blocks_block
		Label( ): $mol_view
		valid( ): boolean
		sub( ): readonly(any)[]
		attr( ): ({ 
			'valid': ReturnType< $ss_editor_node_ui_class_self['valid'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=class.view.tree.d.ts.map
declare namespace $ {

	type $ss_editor_node_ui_locale__children_ss_editor_node_ui_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_locale['children'] >
	>
	type $ss_editor_node_ui_locale__data_node_ss_editor_node_ui_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_locale['data_node'] >
	>
	type $ss_editor_node_ui_root__children_ss_editor_node_ui_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_root['children'] >
	>
	type $ss_editor_node_ui_root__data_node_ss_editor_node_ui_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_root['data_node'] >
	>
	type $ss_editor_node_ui_value__Block_ss_editor_node_ui_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_value['Block'] >
	>
	type $ss_editor_node_ui_value__children_ss_editor_node_ui_6 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_value['children'] >
	>
	type $ss_editor_node_ui_value__data_node_ss_editor_node_ui_7 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_value['data_node'] >
	>
	type $ss_editor_node_ui_string__Block_ss_editor_node_ui_8 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_string['Block'] >
	>
	type $ss_editor_node_ui_string__children_ss_editor_node_ui_9 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_string['children'] >
	>
	type $ss_editor_node_ui_string__data_node_ss_editor_node_ui_10 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_string['data_node'] >
	>
	type $ss_editor_node_ui_bool__Block_ss_editor_node_ui_11 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_bool['Block'] >
	>
	type $ss_editor_node_ui_bool__children_ss_editor_node_ui_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_bool['children'] >
	>
	type $ss_editor_node_ui_bool__data_node_ss_editor_node_ui_13 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_bool['data_node'] >
	>
	type $ss_editor_node_ui_null__Block_ss_editor_node_ui_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_null['Block'] >
	>
	type $ss_editor_node_ui_null__children_ss_editor_node_ui_15 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_null['children'] >
	>
	type $ss_editor_node_ui_null__data_node_ss_editor_node_ui_16 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_null['data_node'] >
	>
	type $ss_editor_node_ui_left__children_ss_editor_node_ui_17 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_left['children'] >
	>
	type $ss_editor_node_ui_left__data_node_ss_editor_node_ui_18 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_left['data_node'] >
	>
	type $ss_editor_node_ui_right__children_ss_editor_node_ui_19 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_right['children'] >
	>
	type $ss_editor_node_ui_right__data_node_ss_editor_node_ui_20 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_right['data_node'] >
	>
	type $ss_editor_node_ui_bi__children_ss_editor_node_ui_21 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_bi['children'] >
	>
	type $ss_editor_node_ui_bi__data_node_ss_editor_node_ui_22 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_bi['data_node'] >
	>
	type $ss_editor_node_ui_default__Block_ss_editor_node_ui_23 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_default['Block'] >
	>
	type $ss_editor_node_ui_default__children_ss_editor_node_ui_24 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_default['children'] >
	>
	type $ss_editor_node_ui_default__data_node_ss_editor_node_ui_25 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_default['data_node'] >
	>
	type $ss_editor_node_ui_list__Block_ss_editor_node_ui_26 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_list['Block'] >
	>
	type $ss_editor_node_ui_list__data_node_ss_editor_node_ui_27 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_list['data_node'] >
	>
	type $ss_editor_node_ui_list__children_ss_editor_node_ui_28 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_list['children'] >
	>
	type $ss_editor_node_ui_list__Block_fabric_ss_editor_node_ui_29 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui_list['Block_fabric'] >
	>
	type $ss_editor_node_ui_list__id_ss_editor_node_ui_30 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_list['id'] >
	>
	type $ss_editor_node_ui_dict__Block_ss_editor_node_ui_31 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_dict['Block'] >
	>
	type $ss_editor_node_ui_dict__data_node_ss_editor_node_ui_32 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_dict['data_node'] >
	>
	type $ss_editor_node_ui_dict__children_ss_editor_node_ui_33 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_dict['children'] >
	>
	type $ss_editor_node_ui_key__Block_ss_editor_node_ui_34 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_key['Block'] >
	>
	type $ss_editor_node_ui_key__children_ss_editor_node_ui_35 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_key['children'] >
	>
	type $ss_editor_node_ui_key__data_node_ss_editor_node_ui_36 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_key['data_node'] >
	>
	type $ss_editor_node_ui_prop__Block_ss_editor_node_ui_37 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_prop['Block'] >
	>
	type $ss_editor_node_ui_prop__children_ss_editor_node_ui_38 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_prop['children'] >
	>
	type $ss_editor_node_ui_prop__data_node_ss_editor_node_ui_39 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop['data_node'] >
	>
	type $ss_editor_node_ui_prop__replace_ss_editor_node_ui_40 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['replace_prop'] >
		,
		ReturnType< $ss_editor_node_ui_prop['replace'] >
	>
	type $ss_editor_node_ui_prop__add_object_in_list_ss_editor_node_ui_41 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui_prop['add_object_in_list'] >
	>
	type $ss_editor_node_ui_prop__id_ss_editor_node_ui_42 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_prop['id'] >
	>
	type $ss_editor_node_ui_prop__unbind_prop_ss_editor_node_ui_43 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['unbind_prop'] >
		,
		ReturnType< $ss_editor_node_ui_prop['unbind_prop'] >
	>
	type $ss_editor_node_ui_prop_root__Block_ss_editor_node_ui_44 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['Block'] >
	>
	type $ss_editor_node_ui_prop_root__children_ss_editor_node_ui_45 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['children'] >
	>
	type $ss_editor_node_ui_prop_root__data_node_ss_editor_node_ui_46 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['data_node'] >
	>
	type $ss_editor_node_ui_prop_root__props_of_ss_editor_node_ui_47 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['props_of'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['props_of'] >
	>
	type $ss_editor_node_ui_prop_root__data_node_parent_ss_editor_node_ui_48 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node_parent'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['data_node_parent'] >
	>
	type $ss_editor_node_ui_prop_root__drop_node_ss_editor_node_ui_49 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['drop_node'] >
	>
	type $ss_editor_node_ui_prop_root__set_subprop_tree_ss_editor_node_ui_50 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['set_subprop_tree'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['set_subprop_tree'] >
	>
	type $ss_editor_node_ui_prop_root__add_object_in_list_ss_editor_node_ui_51 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['add_object_in_list'] >
	>
	type $ss_editor_node_ui_prop_root__id_ss_editor_node_ui_52 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_prop_root['id'] >
	>
	type $ss_editor_node_ui_prop_sub__Block_ss_editor_node_ui_53 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['Block'] >
	>
	type $ss_editor_node_ui_prop_sub__children_ss_editor_node_ui_54 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['children'] >
	>
	type $ss_editor_node_ui_prop_sub__data_node_ss_editor_node_ui_55 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['data_node'] >
	>
	type $ss_editor_node_ui_prop_sub__props_of_ss_editor_node_ui_56 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['props_of'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['props_of'] >
	>
	type $ss_editor_node_ui_prop_sub__data_node_parent_ss_editor_node_ui_57 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node_parent'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['data_node_parent'] >
	>
	type $ss_editor_node_ui_prop_sub__drop_node_ss_editor_node_ui_58 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['drop_node'] >
	>
	type $ss_editor_node_ui_prop_sub__set_subprop_tree_ss_editor_node_ui_59 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['set_subprop_tree'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['set_subprop_tree'] >
	>
	type $ss_editor_node_ui_prop_sub__add_object_in_list_ss_editor_node_ui_60 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['add_object_in_list'] >
	>
	type $ss_editor_node_ui_prop_sub__id_ss_editor_node_ui_61 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_prop_sub['id'] >
	>
	type $ss_editor_node_ui_class__Block_ss_editor_node_ui_62 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_class['Block'] >
	>
	type $ss_editor_node_ui_class__children_ss_editor_node_ui_63 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_class['children'] >
	>
	type $ss_editor_node_ui_class__data_node_ss_editor_node_ui_64 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_class['data_node'] >
	>
	type $ss_editor_node_ui_class__class_list_ss_editor_node_ui_65 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['class_list'] >
		,
		ReturnType< $ss_editor_node_ui_class['class_list'] >
	>
	type $ss_editor_node_ui_class_base__Block_ss_editor_node_ui_66 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['Block'] >
	>
	type $ss_editor_node_ui_class_base__children_ss_editor_node_ui_67 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['children'] >
	>
	type $ss_editor_node_ui_class_base__data_node_ss_editor_node_ui_68 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['data_node'] >
	>
	type $ss_editor_node_ui_class_base__class_list_ss_editor_node_ui_69 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['class_list'] >
		,
		ReturnType< $ss_editor_node_ui_class_base['class_list'] >
	>
	type $ss_editor_node_ui_component__Block_ss_editor_node_ui_70 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_component['Block'] >
	>
	type $ss_editor_node_ui_component__children_ss_editor_node_ui_71 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_component['children'] >
	>
	type $ss_editor_node_ui_component__library_tree_ss_editor_node_ui_72 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['library_tree'] >
		,
		ReturnType< $ss_editor_node_ui_component['library_tree'] >
	>
	type $ss_editor_node_ui_component__data_node_ss_editor_node_ui_73 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_component['data_node'] >
	>
	type $ss_editor_node_ui_component__Block_fabric_ss_editor_node_ui_74 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui_component['Block_fabric'] >
	>
	type $ss_editor_node_ui_component__drop_node_ss_editor_node_ui_75 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_component['drop_node'] >
	>
	type $ss_editor_node_ui_component__drop_parent_node_ss_editor_node_ui_76 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_parent_node'] >
		,
		ReturnType< $ss_editor_node_ui_component['drop_parent_node'] >
	>
	type $ss_editor_node_ui_component__add_sibling_object_above_ss_editor_node_ui_77 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_sibling_object_above'] >
		,
		ReturnType< $ss_editor_node_ui_component['add_sibling_object_above'] >
	>
	type $ss_editor_node_ui_component__add_rootprop_ss_editor_node_ui_78 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_rootprop'] >
		,
		ReturnType< $ss_editor_node_ui_component['add_rootprop'] >
	>
	type $ss_editor_node_ui_component__id_ss_editor_node_ui_79 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_component['id'] >
	>
	type $ss_editor_node_ui_object__Block_ss_editor_node_ui_80 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block'] >
		,
		ReturnType< $ss_editor_node_ui_object['Block'] >
	>
	type $ss_editor_node_ui_object__children_ss_editor_node_ui_81 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['children'] >
		,
		ReturnType< $ss_editor_node_ui_object['children'] >
	>
	type $ss_editor_node_ui_object__library_tree_ss_editor_node_ui_82 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['library_tree'] >
		,
		ReturnType< $ss_editor_node_ui_object['library_tree'] >
	>
	type $ss_editor_node_ui_object__data_node_ss_editor_node_ui_83 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['data_node'] >
		,
		ReturnType< $ss_editor_node_ui_object['data_node'] >
	>
	type $ss_editor_node_ui_object__Block_fabric_ss_editor_node_ui_84 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui_object['Block_fabric'] >
	>
	type $ss_editor_node_ui_object__drop_node_ss_editor_node_ui_85 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui_object['drop_node'] >
	>
	type $ss_editor_node_ui_object__drop_parent_node_ss_editor_node_ui_86 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['drop_parent_node'] >
		,
		ReturnType< $ss_editor_node_ui_object['drop_parent_node'] >
	>
	type $ss_editor_node_ui_object__add_sibling_object_above_ss_editor_node_ui_87 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_sibling_object_above'] >
		,
		ReturnType< $ss_editor_node_ui_object['add_sibling_object_above'] >
	>
	type $ss_editor_node_ui_object__replace_ss_editor_node_ui_88 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['replace_prop'] >
		,
		ReturnType< $ss_editor_node_ui_object['replace'] >
	>
	type $ss_editor_node_ui_object__props_by_type_ss_editor_node_ui_89 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['props_by_type'] >
		,
		ReturnType< $ss_editor_node_ui_object['props_by_type'] >
	>
	type $ss_editor_node_ui_object__add_subprop_ss_editor_node_ui_90 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['add_subprop'] >
		,
		ReturnType< $ss_editor_node_ui_object['add_subprop'] >
	>
	type $ss_editor_node_ui_object__id_ss_editor_node_ui_91 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui['id'] >
		,
		ReturnType< $ss_editor_node_ui_object['id'] >
	>
	export class $ss_editor_node_ui extends $mol_ghost {
		type( ): ReturnType< ReturnType< $ss_editor_node_ui['data_node'] >['type'] >
		Locale( ): $ss_editor_node_ui_locale
		Root( ): $ss_editor_node_ui_root
		Value( ): $ss_editor_node_ui_value
		String( ): $ss_editor_node_ui_string
		Bool( ): $ss_editor_node_ui_bool
		Null( ): $ss_editor_node_ui_null
		Left( ): $ss_editor_node_ui_left
		Right( ): $ss_editor_node_ui_right
		Bi( ): $ss_editor_node_ui_bi
		Default( ): $ss_editor_node_ui_default
		List_body( ): ReturnType< ReturnType< $ss_editor_node_ui['List'] >['Self_body'] >
		List_children( ): ReturnType< ReturnType< $ss_editor_node_ui['List'] >['Children'] >
		List( ): $ss_editor_node_ui_list
		Dict_body( ): ReturnType< ReturnType< $ss_editor_node_ui['Dict'] >['Self_body'] >
		Dict_children( ): ReturnType< ReturnType< $ss_editor_node_ui['Dict'] >['Children'] >
		Dict( ): $ss_editor_node_ui_dict
		Key( ): $ss_editor_node_ui_key
		replace_prop( id: any, next?: any ): any
		add_object_in_list( id: any, next?: any ): any
		unbind_prop( id: any): any
		Prop( ): $ss_editor_node_ui_prop
		props_of( id: any): readonly($mol_tree2)[]
		set_subprop_tree( id: any, next?: any ): any
		Prop_root( ): $ss_editor_node_ui_prop_root
		Subprop( ): $ss_editor_node_ui_prop_sub
		Class_body( ): ReturnType< ReturnType< $ss_editor_node_ui['Class'] >['Self_body'] >
		class_list( ): readonly(string)[]
		valid_class( ): ReturnType< ReturnType< $ss_editor_node_ui['Class'] >['valid'] >
		Class( ): $ss_editor_node_ui_class
		Class_base_body( ): ReturnType< ReturnType< $ss_editor_node_ui['Class_base'] >['Self_body'] >
		Class_base( ): $ss_editor_node_ui_class_base
		drop_node( id: any): any
		drop_parent_node( id: any): any
		add_sibling_object_above( id: any): any
		add_rootprop( id: any): any
		Component( ): $ss_editor_node_ui_component
		props_by_type( id: any): readonly($ss_editor_node_data)[]
		add_subprop( id: any): any
		Object( ): $ss_editor_node_ui_object
		id( ): string
		data_id( ): string
		data_node( ): $ss_editor_node_data
		data_node_parent( ): $ss_editor_node_data
		library_tree( ): $mol_tree2_empty
		Block( ): $ss_blocks_block
		Block_fabric( id: any): $ss_blocks_block
		children( ): readonly($ss_editor_node_ui)[]
		Sub( ): ReturnType< $ss_editor_node_ui['Root'] >
		type_force( next?: string ): string
		variants( ): Record<string, any>
	}
	
	export class $ss_editor_node_ui_root extends $ss_editor_node_ui_default {
		sub( ): readonly(any)[]
	}
	
	export class $ss_editor_node_ui_locale extends $ss_editor_node_ui_default {
		sub( ): readonly(any)[]
	}
	
	type $ss_editor_noedit__sub_ss_editor_node_ui_dict_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_list__rows_ss_editor_node_ui_dict_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_dict['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ss_editor_node_ui_dict extends $ss_editor_node_ui_default {
		Self_body( ): $ss_editor_noedit
		children( ): readonly($ss_editor_node_ui)[]
		sub( ): readonly(any)[]
		Children( ): $mol_list
	}
	
	export class $ss_editor_node_ui_value extends $ss_editor_node_ui_default {
	}
	
	type $mol_view__sub_ss_editor_node_ui_key_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_key_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_ss_editor_node_ui_key_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_key['children'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $ss_editor_node_ui_key extends $ss_editor_node_ui_default {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Delimiter( ): $mol_view
		children( ): readonly($ss_editor_node_ui)[]
		Children( ): $mol_list
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_ss_editor_node_ui_null_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_null_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_null extends $ss_editor_node_ui_value {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Noeditable( ): $ss_editor_noedit
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_ss_editor_node_ui_bool_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_bool_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_bool extends $ss_editor_node_ui_value {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Noeditable( ): $ss_editor_noedit
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_ss_editor_node_ui_string_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_string_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_string extends $ss_editor_node_ui_value {
		Block( ): $ss_blocks_block
		Self_body( ): $mol_view
		Noeditable( ): $ss_editor_noedit
		sub( ): readonly(any)[]
	}
	
	type __ss_editor_node_ui_left_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_left['value'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_left['data_node'] >['value'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_left_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_left extends $ss_editor_node_ui_default {
		value( next?: ReturnType< ReturnType< $ss_editor_node_ui_left['data_node'] >['value'] > ): ReturnType< ReturnType< $ss_editor_node_ui_left['data_node'] >['value'] >
		Self_body( ): $ss_editor_noedit
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
	}
	
	type $ss_editor_noedit__sub_ss_editor_node_ui_left_slot_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_left_slot_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_left_slot extends $ss_editor_node_ui_left {
		Self_body( ): $ss_editor_noedit
		Label( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type __ss_editor_node_ui_right_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_right['value'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_right['data_node'] >['value'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_right_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_right extends $ss_editor_node_ui_default {
		value( next?: ReturnType< ReturnType< $ss_editor_node_ui_right['data_node'] >['value'] > ): ReturnType< ReturnType< $ss_editor_node_ui_right['data_node'] >['value'] >
		Self_body( ): $ss_editor_noedit
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
	}
	
	type __ss_editor_node_ui_bi_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_bi['value'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_bi['data_node'] >['value'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_bi_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_bi extends $ss_editor_node_ui_default {
		value( next?: ReturnType< ReturnType< $ss_editor_node_ui_bi['data_node'] >['value'] > ): ReturnType< ReturnType< $ss_editor_node_ui_bi['data_node'] >['value'] >
		Self_body( ): $ss_editor_noedit
		data_node( ): $ss_editor_node_data
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=ui.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {

	export class $mol_status extends $mol_view {
		message( ): string
		status( ): ReturnType< $mol_status['title'] >
		minimal_height( ): number
		minimal_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=status.view.tree.d.ts.map
declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_form_field_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub_mol_form_1 = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type __mol_form_2 = $mol_type_enforce<
		Parameters< $mol_form['submit_activate'] >[0]
		,
		Parameters< ReturnType< $mol_form['Submit'] >['activate'] >[0]
	>
	type $mol_button_major__title_mol_form_3 = $mol_type_enforce<
		ReturnType< $mol_form['submit_title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__hint_mol_form_4 = $mol_type_enforce<
		ReturnType< $mol_form['submit_hint'] >
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_mol_form_5 = $mol_type_enforce<
		ReturnType< $mol_form['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_status__message_mol_form_6 = $mol_type_enforce<
		ReturnType< $mol_form['result'] >
		,
		ReturnType< $mol_status['message'] >
	>
	type $mol_row__sub_mol_form_7 = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_invalid( ): string
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		submit_title( ): string
		submit_hint( ): string
		submit_activate( next?: ReturnType< ReturnType< $mol_form['Submit'] >['activate'] > ): ReturnType< ReturnType< $mol_form['Submit'] >['activate'] >
		submit( next?: any ): any
		Submit( ): $mol_button_major
		result( next?: any ): any
		Result( ): $mol_status
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		save( next?: any ): any
		message_done( ): string
		errors( ): Record<string, string>
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $ {

	type $ss_editor_noedit__sub_ss_editor_node_ui_list_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	export class $ss_editor_node_ui_list extends $ss_editor_node_ui_default {
		Self_body( ): $ss_editor_noedit
		Block_fabric( id: any): $ss_blocks_block
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=key.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_cached extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=cached.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus_box extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type __ss_editor_node_ui_prop_1 = $mol_type_enforce<
		Parameters< $ss_editor_node_ui_prop['binded'] >[0]
		,
		Parameters< ReturnType< $ss_editor_node_ui_prop['data_node'] >['binded'] >[0]
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_prop_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['icons'] >
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_check_box__title_ss_editor_node_ui_prop_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_prop_4 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['changeable'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title_ss_editor_node_ui_prop_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_prop_6 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['multiple'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_prop_7 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_prop_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_prop_9 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['add_first'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_prop_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__title_ss_editor_node_ui_prop_11 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['pos_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_prop_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['add_in_pos'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_labeler__title_ss_editor_node_ui_prop_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_ss_editor_node_ui_prop_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['new_item_positions'] >
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $ss_editor_node_data__changeable_ss_editor_node_ui_prop_15 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['changeable'] >
		,
		ReturnType< $ss_editor_node_data['changeable'] >
	>
	type $ss_editor_node_data__multiple_ss_editor_node_ui_prop_16 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['multiple'] >
		,
		ReturnType< $ss_editor_node_data['multiple'] >
	>
	type $mol_view__sub_ss_editor_node_ui_prop_17 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['self_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_pop_over__Anchor_ss_editor_node_ui_prop_18 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop['Add_list_item'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__align_ss_editor_node_ui_prop_19 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__bubble_content_ss_editor_node_ui_prop_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	export class $ss_editor_node_ui_prop extends $ss_editor_node_ui_pop {
		type( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['data_node'] >['type'] >
		binded( next?: ReturnType< ReturnType< $ss_editor_node_ui_prop['data_node'] >['binded'] > ): ReturnType< ReturnType< $ss_editor_node_ui_prop['data_node'] >['binded'] >
		Icon_multiple( ): $mol_icon_key_variant
		Icon_changeable( ): $mol_icon_cached
		icons( ): readonly(any)[]
		Icons( ): $ss_editor_noedit
		self_sub( ): readonly(any)[]
		List_body( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['List_body'] >
		List_children( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['List_children'] >
		Dict_body( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['Dict_body'] >
		Dict_children( ): ReturnType< ReturnType< $ss_editor_node_ui_prop['tail_ui_node'] >['Dict_children'] >
		changeable( next?: boolean ): boolean
		Changeable( ): $mol_check_box
		multiple( next?: boolean ): boolean
		Multiple( ): $mol_check_box
		drop( next?: any ): any
		Drop_icon( ): $mol_icon_trash_can_outline
		Drop( ): $mol_button_minor
		add_first( next?: any ): any
		Add_list_item_icon( ): $mol_icon_plus_box
		Add_list_item( ): $mol_button_minor
		pos_title( id: any): string
		add_in_pos( id: any, next?: any ): any
		New_item_pos( id: any): $mol_button_minor
		new_item_positions( ): readonly(any)[]
		Position_label( ): $mol_labeler
		data_node( ): $ss_editor_node_data
		drop_node( id: any): any
		unbind_prop( id: any): any
		autocomplete( ): boolean
		replace( id: any, next?: any ): any
		add_object_in_list( id: any, next?: any ): any
		position( ): string
		id( ): string
		sub( ): readonly(any)[]
		Anchor( ): $mol_view
		tail_ui_node_type( ): string
		tail_ui_node_nullable( ): any
		tail_ui_node( ): $ss_editor_node_ui
		bubble_content( ): readonly(any)[]
		Add_list_item_popover( ): $mol_pop_over
	}
	
}

//# sourceMappingURL=prop.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_box__title_ss_editor_node_ui_prop_sub_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_prop_sub_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop_sub['bind'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value_ss_editor_node_ui_prop_sub_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop_sub['bind_value'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_ss_editor_node_ui_prop_sub_4 = $mol_type_enforce<
		({ 
			'left': string,
			'bi': string,
			'right': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_pop_over__Anchor_ss_editor_node_ui_prop_sub_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_prop_sub['Bind'] >
		,
		ReturnType< $mol_pop_over['Anchor'] >
	>
	type $mol_pop_over__align_ss_editor_node_ui_prop_sub_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pop_over['align'] >
	>
	type $mol_pop_over__bubble_content_ss_editor_node_ui_prop_sub_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pop_over['bubble_content'] >
	>
	export class $ss_editor_node_ui_prop_sub extends $ss_editor_node_ui_prop {
		valid( ): boolean
		bind( next?: boolean ): boolean
		Bind( ): $mol_check_box
		bind_value( next?: string ): string
		Switch_bind( ): $mol_switch
		data_node_parent( ): $ss_editor_node_data
		props_of( id: any): readonly($mol_tree2)[]
		set_subprop_tree( id: any, next?: any ): any
		position( ): string
		bubble_content( ): readonly(any)[]
		autocomplete_footer( ): readonly(any)[]
		attr( ): ({ 
			'valid': ReturnType< $ss_editor_node_ui_prop_sub['valid'] >,
		})  & ReturnType< $ss_editor_node_ui_prop['attr'] >
		Bind_popover( ): $mol_pop_over
	}
	
}

//# sourceMappingURL=sub.view.tree.d.ts.map
declare namespace $ {

	export class $ss_editor_node_ui_prop_root extends $ss_editor_node_ui_prop_sub {
		position( ): string
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_class_base_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_class_base['root_props'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_class_base extends $ss_editor_node_ui_class {
		root_props( ): readonly($ss_editor_node_ui_prop_root)[]
		Props( ): $mol_view
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=base.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_playlist_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_ss_editor_node_ui_object_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['class_children'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_object_2 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['icons'] >
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_object_3 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['object_label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_object_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_object_5 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['add_new_subprop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_object_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_check_box__title_ss_editor_node_ui_object_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked_ss_editor_node_ui_object_8 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['multiple'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_button_minor__title_ss_editor_node_ui_object_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_object_10 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_object_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_ss_editor_node_ui_object_12 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_object_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $ss_editor_node_data__multiple_ss_editor_node_ui_object_14 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_object['multiple'] >
		,
		ReturnType< $ss_editor_node_data['multiple'] >
	>
	type $mol_view__sub_ss_editor_node_ui_object_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_object extends $ss_editor_node_ui_pop {
		Class_body( ): ReturnType< ReturnType< $ss_editor_node_ui_object['class_ui_node'] >['Class_body'] >
		class_children( ): ReturnType< ReturnType< $ss_editor_node_ui_object['class_ui_node'] >['children'] >
		Props( ): $mol_view
		Icon_multiple( ): $mol_icon_key_variant
		icons( ): readonly(any)[]
		Icons( ): $ss_editor_noedit
		object_label( ): readonly(any)[]
		Object_label( ): $mol_view
		Class_label( ): $mol_view
		add_new_subprop( next?: any ): any
		Props_select_icon( ): $mol_icon_playlist_plus
		Props_select( ): $mol_button_minor
		multiple( next?: boolean ): boolean
		Multiple( ): $mol_check_box
		clear( next?: any ): any
		Replace_icon( ): $mol_icon_find_replace
		Replace( ): $mol_button_minor
		drop( next?: any ): any
		Drop_icon( ): $mol_icon_trash_can_outline
		Drop( ): $mol_button_minor
		tree( ): $mol_tree2_empty
		library_tree( ): $mol_tree2_empty
		Block_fabric( id: any): $ss_blocks_block
		drop_node( id: any): any
		drop_parent_node( id: any): any
		replace( id: any, next?: any ): any
		add_subprop( id: any): any
		add_sibling_object_above( id: any): any
		autocomplete( ): boolean
		props_by_type( id: any): readonly($ss_editor_node_data)[]
		data_node( ): $ss_editor_node_data
		class_ui_node( ): $ss_editor_node_ui
		sub( ): readonly(any)[]
		Anchor( ): $mol_view
		bubble_content( ): readonly(any)[]
		autocomplete_footer( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=object.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__click_ss_editor_node_ui_component_1 = $mol_type_enforce<
		ReturnType< $ss_editor_node_ui_component['add_new_rootprop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_ss_editor_node_ui_component_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $ss_editor_noedit__sub_ss_editor_node_ui_component_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ss_editor_noedit['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_component_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_ss_editor_node_ui_component_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ss_editor_node_ui_component extends $ss_editor_node_ui_object {
		add_new_rootprop( next?: any ): any
		Props_select_icon( ): $mol_icon_playlist_plus
		Props_select( ): $mol_button_minor
		Dollar( ): $ss_editor_noedit
		Component_label( ): $mol_view
		add_rootprop( next?: any ): any
		bubble_content( ): readonly(any)[]
		Anchor( ): $mol_view
	}
	
}

//# sourceMappingURL=component.view.tree.d.ts.map
declare namespace $ {

	type __ss_editor_1 = $mol_type_enforce<
		Parameters< $ss_editor['Block'] >[0]
		,
		Parameters< ReturnType< $ss_editor['Contenteditable'] >['Block'] >[0]
	>
	type $ss_blocks_contenteditable__Body_ss_editor_2 = $mol_type_enforce<
		ReturnType< $ss_editor['Ui_root_node'] >
		,
		ReturnType< $ss_blocks_contenteditable['Body'] >
	>
	type $ss_editor_node_ui__id_ss_editor_3 = $mol_type_enforce<
		ReturnType< $ss_editor['id'] >
		,
		ReturnType< $ss_editor_node_ui['id'] >
	>
	type $ss_editor_node_ui__data_node_ss_editor_4 = $mol_type_enforce<
		ReturnType< $ss_editor['data_node_by_ui_id'] >
		,
		ReturnType< $ss_editor_node_ui['data_node'] >
	>
	type $ss_editor_node_ui__data_node_parent_ss_editor_5 = $mol_type_enforce<
		ReturnType< $ss_editor['data_node_parent_by_ui_id'] >
		,
		ReturnType< $ss_editor_node_ui['data_node_parent'] >
	>
	type $ss_editor_node_ui__children_ss_editor_6 = $mol_type_enforce<
		ReturnType< $ss_editor['ui_node_children'] >
		,
		ReturnType< $ss_editor_node_ui['children'] >
	>
	type $ss_editor_node_ui__library_tree_ss_editor_7 = $mol_type_enforce<
		ReturnType< $ss_editor['library_tree'] >
		,
		ReturnType< $ss_editor_node_ui['library_tree'] >
	>
	type $ss_editor_node_ui__Block_ss_editor_8 = $mol_type_enforce<
		ReturnType< $ss_editor['Ui_node_block'] >
		,
		ReturnType< $ss_editor_node_ui['Block'] >
	>
	type $ss_editor_node_ui__Block_fabric_ss_editor_9 = $mol_type_enforce<
		ReturnType< $ss_editor['Block_fabric'] >
		,
		ReturnType< $ss_editor_node_ui['Block_fabric'] >
	>
	type $ss_editor_node_ui__drop_node_ss_editor_10 = $mol_type_enforce<
		ReturnType< $ss_editor['drop_node'] >
		,
		ReturnType< $ss_editor_node_ui['drop_node'] >
	>
	type $ss_editor_node_ui__unbind_prop_ss_editor_11 = $mol_type_enforce<
		ReturnType< $ss_editor['unbind_prop'] >
		,
		ReturnType< $ss_editor_node_ui['unbind_prop'] >
	>
	type $ss_editor_node_ui__drop_parent_node_ss_editor_12 = $mol_type_enforce<
		ReturnType< $ss_editor['drop_parent_node'] >
		,
		ReturnType< $ss_editor_node_ui['drop_parent_node'] >
	>
	type $ss_editor_node_ui__add_sibling_object_above_ss_editor_13 = $mol_type_enforce<
		ReturnType< $ss_editor['add_sibling_object_above'] >
		,
		ReturnType< $ss_editor_node_ui['add_sibling_object_above'] >
	>
	type $ss_editor_node_ui__props_by_type_ss_editor_14 = $mol_type_enforce<
		ReturnType< $ss_editor['props_by_type'] >
		,
		ReturnType< $ss_editor_node_ui['props_by_type'] >
	>
	type $ss_editor_node_ui__replace_prop_ss_editor_15 = $mol_type_enforce<
		ReturnType< $ss_editor['replace_prop'] >
		,
		ReturnType< $ss_editor_node_ui['replace_prop'] >
	>
	type $ss_editor_node_ui__set_subprop_tree_ss_editor_16 = $mol_type_enforce<
		ReturnType< $ss_editor['set_subprop_tree'] >
		,
		ReturnType< $ss_editor_node_ui['set_subprop_tree'] >
	>
	type $ss_editor_node_ui__add_subprop_ss_editor_17 = $mol_type_enforce<
		ReturnType< $ss_editor['add_subprop'] >
		,
		ReturnType< $ss_editor_node_ui['add_subprop'] >
	>
	type $ss_editor_node_ui__add_rootprop_ss_editor_18 = $mol_type_enforce<
		ReturnType< $ss_editor['add_rootprop'] >
		,
		ReturnType< $ss_editor_node_ui['add_rootprop'] >
	>
	type $ss_editor_node_ui__add_object_in_list_ss_editor_19 = $mol_type_enforce<
		ReturnType< $ss_editor['add_object_in_list'] >
		,
		ReturnType< $ss_editor_node_ui['add_object_in_list'] >
	>
	type $ss_editor_node_ui__class_list_ss_editor_20 = $mol_type_enforce<
		ReturnType< $ss_editor['class_list'] >
		,
		ReturnType< $ss_editor_node_ui['class_list'] >
	>
	type $ss_editor_node_ui__props_of_ss_editor_21 = $mol_type_enforce<
		ReturnType< $ss_editor['props_of'] >
		,
		ReturnType< $ss_editor_node_ui['props_of'] >
	>
	type $ss_editor_node_data__id_ss_editor_22 = $mol_type_enforce<
		ReturnType< $ss_editor['id'] >
		,
		ReturnType< $ss_editor_node_data['id'] >
	>
	type $ss_editor_node_data__tree_ss_editor_23 = $mol_type_enforce<
		ReturnType< $ss_editor['data_tree'] >
		,
		ReturnType< $ss_editor_node_data['tree'] >
	>
	type $ss_editor_node_data__value_ss_editor_24 = $mol_type_enforce<
		ReturnType< $ss_editor['data_value'] >
		,
		ReturnType< $ss_editor_node_data['value'] >
	>
	type $ss_editor_node_data__type_ss_editor_25 = $mol_type_enforce<
		ReturnType< $ss_editor['data_type'] >
		,
		ReturnType< $ss_editor_node_data['type'] >
	>
	type $ss_editor_node_data__child_ids_ss_editor_26 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_ids'] >
		,
		ReturnType< $ss_editor_node_data['child_ids'] >
	>
	type $ss_editor_node_data__child_nodes_ss_editor_27 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_nodes'] >
		,
		ReturnType< $ss_editor_node_data['child_nodes'] >
	>
	type $ss_editor_node_data__changeable_ss_editor_28 = $mol_type_enforce<
		ReturnType< $ss_editor['data_changeable'] >
		,
		ReturnType< $ss_editor_node_data['changeable'] >
	>
	type $ss_editor_node_data__multiple_ss_editor_29 = $mol_type_enforce<
		ReturnType< $ss_editor['data_multiple'] >
		,
		ReturnType< $ss_editor_node_data['multiple'] >
	>
	type $ss_editor_node_data__data_tree_ss_editor_30 = $mol_type_enforce<
		ReturnType< $ss_editor['data_tree'] >
		,
		ReturnType< $ss_editor_node_data['data_tree'] >
	>
	type $ss_editor_node_data__data_value_ss_editor_31 = $mol_type_enforce<
		ReturnType< $ss_editor['data_value'] >
		,
		ReturnType< $ss_editor_node_data['data_value'] >
	>
	type $ss_editor_node_data__data_type_ss_editor_32 = $mol_type_enforce<
		ReturnType< $ss_editor['data_type'] >
		,
		ReturnType< $ss_editor_node_data['data_type'] >
	>
	type $ss_editor_node_data__data_child_ids_ss_editor_33 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_ids'] >
		,
		ReturnType< $ss_editor_node_data['data_child_ids'] >
	>
	type $ss_editor_node_data__data_child_nodes_ss_editor_34 = $mol_type_enforce<
		ReturnType< $ss_editor['data_child_nodes'] >
		,
		ReturnType< $ss_editor_node_data['data_child_nodes'] >
	>
	type $ss_editor_node_data__data_changeable_ss_editor_35 = $mol_type_enforce<
		ReturnType< $ss_editor['data_changeable'] >
		,
		ReturnType< $ss_editor_node_data['data_changeable'] >
	>
	type $ss_editor_node_data__data_multiple_ss_editor_36 = $mol_type_enforce<
		ReturnType< $ss_editor['data_multiple'] >
		,
		ReturnType< $ss_editor_node_data['data_multiple'] >
	>
	export class $ss_editor extends $mol_scroll {
		Ui_root_node( next?: any ): any
		Block( id: any): ReturnType< ReturnType< $ss_editor['Contenteditable'] >['Block'] >
		Contenteditable( ): $ss_blocks_contenteditable
		id( id: any): string
		data_node_by_ui_id( id: any): $ss_editor_node_data
		data_node_parent_by_ui_id( id: any): $ss_editor_node_data
		ui_node_children( id: any, next?: readonly($ss_editor_node_ui)[] ): readonly($ss_editor_node_ui)[]
		library_tree( ): $mol_tree2_empty
		Ui_node_block( id: any): $ss_blocks_block
		Block_fabric( id: any): $ss_blocks_block
		drop_node( id: any): any
		unbind_prop( id: any): any
		drop_parent_node( id: any): any
		add_sibling_object_above( id: any): any
		replace_prop( id: any, next?: any ): any
		set_subprop_tree( id: any, next?: any ): any
		add_subprop( id: any): any
		add_rootprop( id: any): any
		add_object_in_list( id: any, next?: any ): any
		class_list( ): readonly(string)[]
		props_of( id: any): readonly($mol_tree2)[]
		data_tree( id: any, next?: $mol_tree2_empty ): $mol_tree2_empty
		data_value( id: any, next?: string ): string
		data_type( id: any, next?: string ): string
		data_child_ids( id: any, next?: readonly(string)[] ): readonly(string)[]
		data_child_nodes( id: any, next?: readonly($ss_editor_node_data)[] ): readonly($ss_editor_node_data)[]
		data_changeable( id: any, next?: boolean ): boolean
		data_multiple( id: any, next?: boolean ): boolean
		title( ): string
		sub( ): readonly(any)[]
		lib( ): $mol_tree2_empty
		prop_ids( next?: readonly(string)[] ): readonly(string)[]
		props_by_type( id: any): readonly($ss_editor_node_data)[]
		prop_norm_tree( id: any, next?: readonly($mol_tree2)[] ): readonly($mol_tree2)[]
		Ui_node( id: any): $ss_editor_node_ui
		Data_node( id: any): $ss_editor_node_data
		initial_tree_string( ): string
	}
	
}

//# sourceMappingURL=editor.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
