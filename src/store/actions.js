import uuidv4 from 'uuid/v4';

import {
  INIT_CHAOS,
  LOAD_CHAOS,
  UPDATE_LOCAL_CHAOS,

  } from './actionTypes'; 
import ChaosDal from '../data/chaosDal';

//import ChaosService from '../services/chaosService';
//const host = 'http://localhost:3005'; //'https://www.chaos.com'; //

export const initChaos = () =>{
  const chaosDal = new ChaosDal();
  chaosDal.initialize();
  return {
    type: INIT_CHAOS,
    payload: 'initialized'
  }
}
export const loadChaos = () => { 
  //console.log('in chaosActions.loadChaos ');
  const chaosDal = new ChaosDal();
  const chaos = chaosDal.getChaos();
  return {
    type: LOAD_CHAOS,
    payload: chaos
  }
}
export const updateLocalChaos = (chaos) =>{
  const chaosDal = new ChaosDal();
  chaosDal.updateLocalChaos(chaos);
  chaos = chaosDal.getChaos();
  return{
    type: UPDATE_LOCAL_CHAOS,
    payload: chaos
  }  
}
