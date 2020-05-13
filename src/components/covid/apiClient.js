import axios from 'axios';
//import {safeStringify} from 'json-stringify-safe';
import {safeJsonStringify} from 'safe-json-stringify';
class ApiClient {
	constructor(){
		this.saveToServer = this.saveToServer.bind(this);
	}
	
	saveToServer(file, date, type) {
		let uri = 'https://covidmaps.herokuapp.com/saveSvg';
		console.log('uri is ', uri);
		var s = new XMLSerializer();
		var strSvg = s.serializeToString(file[0]);
 		const typeText = type === 4 ? 'Contagion' : 'Mortality';
    const svgData = {
      file:strSvg,
      date:date,
			type:typeText
    }
		return new Promise((resolve, reject) => {
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