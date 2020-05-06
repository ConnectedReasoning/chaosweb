import React, {useState, useEffect} from 'react';
import { ComposableMap, Geographies, Geography, } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import moment from 'moment';

const type=4;
 
const  Home = props => {
  const [dayCount, setDayCount] = useState(null);
  const [covidDate, setCovidDate] = useState(null);
  const [covidSvg, setCovidSvg] = useState('');
  useEffect(() => {
    countdown(23);
  },[]);
  const countdown = (dayCount) => {
    var downloadTimer = setInterval(function(){
      dayCount += 1;
      const covidFileUrl =`./contagion/${dayCount.toString().padStart(3,'0')}-[${moment(moment().dayOfYear(dayCount)).format('MMM-DD')}].svg`;
      setCovidSvg(covidFileUrl);
      setCovidDate(moment(moment().dayOfYear(dayCount)).format('MMM-DD'));
      //console.log('dayCount is ', dayCount);
      //console.log('moment().dayOfYear() is ', moment().dayOfYear());
      if(dayCount >= (moment().dayOfYear()-2)){
        clearInterval(downloadTimer);
      }
    }, 1000);
  }
  return(

      <div className="covid">
        <div className="title">{covidDate}</div>
        <div className="mapwrap">
          <img src={covidSvg} />
        </div>
      </div>

  );
}
export default Home
