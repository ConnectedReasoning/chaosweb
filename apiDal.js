const fetch = require('node-fetch');
const moment = require('moment');
var fs = require('fs');

class ApiDal {
	constructor(){
		// error handlers
		this.saveSvg = this.saveSvg.bind(this);
	}

	saveSvg(file, date, type) {
		console.log('file length  is ', file.length);
		const fileName = moment(date).dayOfYear().toString().padStart(3,'0') + '-[' + moment(date).format('MMM-DD') + ']';
		const dateText = moment(date).format('MMMM DD, YYYY');
		file = file.replace(`class="rsm-svg ">`,`class="rsm-svg ">
		<style>.heavy {font: bold 15px sans-serif;} .small { font: italic 10px sans-serif; }</style>`)
		console.log('file name will be ', fileName);
		fs.writeFile('./contagion/'+fileName + '.svg', file,  function (err) {
			if (err) throw err;
		});
	}
}
//		<text x="350" y="60" class="heavy">COVID-19 ${type}, ${dateText}</text>/
//		<text x="350" y="75" class="small">Chart color, light to dark shows percentiles in 5% intervals</text>
//		<text x="350" y="85" class="small">Green indicates no count</text>
module.exports = ApiDal;