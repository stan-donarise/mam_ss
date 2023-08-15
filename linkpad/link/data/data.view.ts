namespace $ {

	export interface Link_DTO {
		id: string
		type_id: string
		from_id?: string
		to_id?: string	
		name?: string
		val?: string
		hue?: number
		undef?: boolean
	}

	export class $ss_linkpad_link_data extends $mol_store<Link_DTO> {

		id(next?: string) {
			return this.value('id', next)
		}

		type_id(next?: string) {
			return this.value('type_id', next)
		}
		// type_id() {
		// 	return this.value('type_id')
		// }

		from_id() {
			return this.value('from_id')
		}

		to_id() {
			return this.value('to_id')
		}

		val(next?: string) {
			return this.value('val', next)
		}

		hue(next?: number) {
			return this.value('hue', next)
		}

		undef(next?: boolean) {
			return this.value('undef', next)
		}

		name(next?: string) {
			return this.value('name', next)
		}

	}

}
