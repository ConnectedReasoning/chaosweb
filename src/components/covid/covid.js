import React, {useState, useEffect} from 'react';
import { ComposableMap, Geographies, Geography, } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import moment from 'moment';
import _ from 'lodash';
import Papa from 'papaparse';
import counties from './counties';
import apiClient from './apiClient';
import county_populations from './county_populations'

const type=4;
 
const  Covid = props => {
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
  const [covidCounties, setCovidCounties] = useState([]);
  const [dayCount, setDayCount] = useState(null);

  useEffect(() => {
    const covidDays = moment().diff( moment('01-21-2020'), 'days');
    console.log('covidDays is ', covidDays);
    fetch('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv')
    .then((r) => r.text())
    .then(covidData  => {
      console.log('data downloaded');
      setTimeout(()=>{countdown(covidDays)},1000);
      const jsonCountyReports = Papa.parse(covidData,{header:true});
      const populatedCovid = jsonCountyReports.data.map(jsonCountyReport => {
        const fipsFound = county_populations.find(county_population =>{
          return jsonCountyReport.fips === county_population.county_code;
        });
        jsonCountyReport.percentage = (jsonCountyReport.cases / fipsFound.population_estimate) * 100;
        jsonCountyReport.population = fipsFound.population_estimate;
        return jsonCountyReport;
      });
      console.log('data parsed');
      //console.log('populatedCovid', populatedCovid);
      setCovidCounties(populatedCovid);
      const percentages = jsonCountyReports.data.map( report =>{
        return report.percentage;
      });
      //console.log('percentages is ', percentages);
      console.log(' min is ', _.min(percentages));
      console.log(' max is ', _.max(percentages));
      percentages.sort();
      var len =  percentages.length;
      console.log('length of percentages is ', len);
      var per20 =  (Math.floor(len * 0.05));
      console.log('per20 is ', per20);
      var i;
      var twentileplace = [];
      for(i = 1; i <=20; i++){
        twentileplace.push(per20 * i);
      }

      console.log('twentileplace is ', twentileplace);
      const twentile=[];
      for(var i = 0; i <=twentileplace.length; i++){
        twentile.push(percentages[twentileplace[i]]);
      }
      console.log(twentile);
    });

  }, []);
  const saveSVG = (svgElement, date) => {
    //console.log('saveSVG for svgElement ', svgElement);
    //apiClient.saveToServer(svgElement, date, type);
  }
  const countdown = (d) => {
    console.log('d is ', d);
    var timeleft = d;
    var downloadTimer = setInterval(function(){
      timeleft -= 1;
      const svgElement = document.getElementsByTagName("svg");
      setDayCount(timeleft);
      if(timeleft <= 1){
        setDayCount(1);
        clearInterval(downloadTimer);
      }
    }, 100);
  }
  //console.log('counties is ', counties);
  const colorScale = scaleQuantile()
  .domain(covidCounties.map(d => d.percentage))
  .range([
    "#F9E310",
    "#F7D70F",
    "#F6CC0E",
    "#F5C10E",
    "#F3B50D",
    "#F2AA0D",
    "#F19F0C",
    "#F0930B",
    "#EE880B",
    "#ED7D0A",
    "#EC710A",
    "#EB6609",
    "#E95B09",
    "#E84F08",
    "#E74407",
    "#E63907",
    "#E42D06",
    "#E32206",
    "#E21705",
    "#E10C05"
    /*
    "#FED3CD",
    "#F8C8C2",
    "#F2BDB7",
    "#ECB3AC",
    "#E6A8A2",
    "#E09E97",
    "#DA938C",
    "#D48882",
    "#CE7E77",
    "#C8736C",
    "#C26962",
    "#BC5E57",
    "#B6544C",
    "#B04942",
    "#AA3E37",
    "#A4342C",
    "#9E2922",
    "#981F17",
    "#92140C"
    */
  ]);
  //console.log('covidCounties', covidCounties);
    const svgElement = document.getElementsByTagName("svg");
   
    console.log('date is ', moment().subtract(dayCount, 'days').format('MMM DD YYYY'));
    if(svgElement &&  svgElement.length > 0){
      //console.log('svgElement is ', svgElement);
      saveSVG(svgElement, moment().subtract(dayCount, 'days').format('MMM DD YYYY'), type );
    }
  return(
    <div className="home">

      { (covidCounties && covidCounties.length > 0) ?
      (
      <div className="covid">
        <div className="countdown-wrapper">
          <span id="countdown">{ moment().subtract(dayCount, 'days').format('MMM DD YYYY')}</span>
        </div>
        <div className="mapwrap">
          <ComposableMap projection="geoAlbersUsa">
              <Geographies geography={geoUrl}>
              {({ geographies }) =>{
                  return geographies.map(geo => {
                    try{
                      const currentCounty = covidCounties.find(covidCounty =>{
                          return (covidCounty.fips === geo.id && covidCounty.date === moment().subtract(dayCount, 'days').format('YYYY-MM-DD'));
                      });
    
                      const countyColorScale = currentCounty ? colorScale(currentCounty.percentage) : "#999999";

                      return <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        fill={countyColorScale}
                      />
                    }catch(err){  
                      console.log('catch err is ', err);
                    }
                  });
                }
              }
            </Geographies>
          </ComposableMap> 
        </div>
      </div>
      ):null
      }
    </div>
  );
}
export default Covid
