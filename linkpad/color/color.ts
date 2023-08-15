namespace $.$$ {

	const RAW_RANGES = [ [ 160, 210 ], [ 265, 320 ] ]
	const SATURATION = 0.95
	const LIGHTNESS = 0.3

	function randomIntFromInterval( min: number, max: number ) {
		return Math.floor( Math.random() * ( max - min + 1 ) + min )
	}

	type HUE_RANGE = {
		from: number,
		to: number,
		weight: number
		accWeight: number
	}
	const sumHue = RAW_RANGES.reduce<number>( ( sum: number, r ) => sum + r[ 1 ] - r[ 0 ], 0 )
	const HUE_RANGES: HUE_RANGE[] = RAW_RANGES.map( r => {
		return {
			from: r[ 0 ],
			to: r[ 1 ],
			weight: ( r[ 1 ] - r[ 0 ] ) / sumHue,
			accWeight: 0,
		}
	} )
	HUE_RANGES[ 0 ].accWeight = HUE_RANGES[ 0 ].weight
	for( let i = 1; i < HUE_RANGES.length; i++ ) {
		const r = HUE_RANGES[ i ]
		r.accWeight = HUE_RANGES[ i - 1 ].accWeight + r.weight
	}
	function numFromRanges( ranges: HUE_RANGE[] ) {
		const w = Math.random()
		let chosenRange = ranges[ 0 ]
		for( const r of ranges ) {
			if( w < r.accWeight ) {
				chosenRange = r
				break
			}
		}
		return randomIntFromInterval( chosenRange.from, chosenRange.to )
	}

	export class $ss_linkpad_color_generator {
		private step = 100;
		private start = 50;

		private asset: number[] = [];
		constructor() {
			this.generateAsset()
		}

		private generateAsset() {
			for( const range of RAW_RANGES ) {
				for( let i = range[ 0 ] + this.start; i < range[ 1 ]; i += this.step ) {
					this.asset.push( i )
				}
			}
			this.start /= 2
			this.step /= 2
			this.asset = $mol_array_shuffle( this.asset )
		}

		get_next_hue() {
			return numFromRanges( HUE_RANGES )
		}

		get_next_hsl() {
			const h = numFromRanges( HUE_RANGES )
			return { h, s: SATURATION, l: LIGHTNESS }
		}

		foresee(): number {
			return this.asset.at( -1 )!
		}
	}

}
