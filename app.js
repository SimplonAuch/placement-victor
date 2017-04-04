
var apprenants = [
	"Jordy",		"Maxime",		"Florian",
	"Mouad",		"Rafael",		"Marco",
	"Grégory",		"Océane",		"Morel",
	"Emilie",		"Julien",		"Dimitri",
	"Frank",		"Elodie",		"Romain"
];

var tables = [
	"table 0", 		"table 1", 		"table 2", 
	"table 3", 		"table 4"
];

var j = 0;





function shuffle(a) {
	// http://stackoverflow.com/a/6274381
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

shuffle(apprenants)





for( var i=0 ; i<apprenants.length ; i++ ){

	console.log( apprenants[i] + "\t est à la " + tables[j] );

	if( j >= tables.length - 1 )
		j = 0;
		else
		j++;

}


