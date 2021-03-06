ej.addCulture( "en-AU", {
	name: "en-AU",
	englishName: "English (Australia)",
	nativeName: "English (Australia)",
    language: 'en',
    isRTL: false,
	numberFormat: {
        pattern: ["-n"],
		decimals: 2,
        ',': ",",
        '.': ".",
        groupSizes: [3],
        '+': "+",
        '-': "-",
		percent: {
			pattern: ["-n%","n%"],
			decimals: 2,
            groupSizes: [3],
            ',': ",",
            '.': ".",
            symbol: '%'
		},
		currency: {
			pattern: ["-$n","$n"],
			decimals: 2,
            groupSizes: [3],
            ',': ",",
            '.': ".",
            symbol: '$'
		}
	},
	calendars: {
		standard: {
			'/': '/',
	        ':': ':',
			firstDay: 1,
			days: {
	            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
	        },
	        months: {
	            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
	            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
	        },
			patterns: {
				d: "d/MM/yyyy",
				D: "dddd, d MMMM yyyy",
				f: "dddd, d MMMM yyyy h:mm tt",
				F: "dddd, d MMMM yyyy h:mm:ss tt"
			}
		}
	}
});