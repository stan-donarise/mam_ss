namespace $.$$ {
	
	export class $ss_linkpad_link_type extends $.$ss_linkpad_link_type {
		color() {
			return `hsl(${this.data().hue()} 80% 60%)`
		}
		semitransporent() {
			return `hsl(${this.data().hue()} 90% 60% / 20%)`
		}
	}
	
}
