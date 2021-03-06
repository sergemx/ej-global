ej.addCulture( "da-DK", {
	name: "da-DK",
	englishName: "Danish (Denmark)",
	nativeName: "dansk (Danmark)",
	language: "da",
	numberFormat: {
		pattern: ['-n'],
		",": ".",
		".": ",",
		groupSizes: [3],
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			pattern: ['-n%','n%'],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "kr."
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],
				namesAbbr: ["sø","ma","ti","on","to","fr","lø"],
				namesShort: ["sø","ma","ti","on","to","fr","lø"]
			},
			months: {
				names: ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december",""],
				namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd-MM-yyyy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});