import axios from 'axios';
//import {safeStringify} from 'json-stringify-safe';
import {safeJsonStringify} from 'safe-json-stringify';
class ApiClient {
	constructor(){
		this.saveToServer = this.saveToServer.bind(this);
		this.host = process.env.SAVE_SVG_HOST || 'http://localhost:8080/saveSvg';
	}
	
	saveToServer(file, date, type) {
		//console.log('svg is ', file[0])
		let uri = this.host;
		var s = new XMLSerializer();
		var strSvg = s.serializeToString(file[0]);
 		const typeText = type === 4 ? 'Contagion' : 'Mortality';
    const svgData = {
      file:strSvg,
      date:date,
			type:typeText
    }
		console.log('svgData is ', svgData);
		return new Promise((resolve, reject) => {
			console.log('in goalline api client')
			axios({
				method: 'POST',
				url:uri,
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json',
				},
				data:svgData
			})
			.then(result => {
				const payload = result.data;
				resolve(payload);
			}).catch(error =>{
				console.log('error is ', error)
			});
		});
	}

}

export default new ApiClient();