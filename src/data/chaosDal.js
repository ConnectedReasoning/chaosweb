
export default class ChaosDal{
  constructor(){
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.getChaos = this.getChaos.bind(this);
    this.updateLocalChaos = this.updateLocalChaos.bind(this);
    this.reset = this.reset.bind(this);
    this.initialize = this.initialize.bind(this);
  }
  getData(){
    const value =localStorage.getItem('chaosStorage');
    return value;
  }
  setData(){
    localStorage.setItem('chaosStorage', '');
    return true;
  }
  getChaos(){  

    let chaos =localStorage.getItem('chaosStorage');
    chaos = JSON.parse(chaos)
    return chaos;   
  }
  updateLocalChaos(updatedChaos){
    //console.log('in chaosDal.updateLocalChaos', updatedChaos);
    updatedChaos.timestamp = Date.now();
    localStorage.setItem('chaosStorage', JSON.stringify(updatedChaos));
  }
  reset(){
    const newChaosDoc = JSON.stringify({});
   // console.log('resetting Chaos'); 
   localStorage.setItem('chaosStorage', newChaosDoc);  
  }
  initialize(){
    let checkChaos =localStorage.getItem('chaosStorage');
    checkChaos = JSON.parse(checkChaos);
    if(!checkChaos){
      //console.log('initializing Chaos');
      const newChaosDoc = JSON.stringify({ timestamp:Date(Date.now()).toString()}); 
      localStorage.setItem('chaosStorage', newChaosDoc);
      this.getChaos();
    }
  }
  
}