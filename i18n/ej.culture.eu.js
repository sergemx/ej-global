ej.addCulture( "eu", {
	name: "eu",
	englishName: "Basque",
	nativeName: "euskara",
	language: "eu",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "EdZ",
		negativeInfinity: "-Infinitu",
		positiveInfinity: "Infinitu",
		percent: {
			pattern: ["% -n","% n"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"],
				namesAbbr: ["ig.","al.","as.","az.","og.","or.","lr."],
				namesShort: ["ig","al","as","az","og","or","lr"]
			},
			months: {
				names: ["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua",""],
				namesAbbr: ["urt.","ots.","mar.","api.","mai.","eka.","uzt.","abu.","ira.","urr.","aza.","abe.",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "yyyy/MM/dd",
				D: "dddd, yyyy'(e)ko' MMMM'ren' d'a'",
				t: "HH:mm",
				T: "H:mm:ss",
				f: "dddd, yyyy'(e)ko' MMMM'ren' d'a' HH:mm",
				F: "dddd, yyyy'(e)ko' MMMM'ren' d'a' H:mm:ss",
				M: "MMMM'ren' d'a'",
				Y: "yyyy'(e)ko' MMMM"
			}
		}
	}
});
