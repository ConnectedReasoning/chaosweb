import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { 
  initChaos,
  loadChaos,
} from '../store/actions'; 
import App from '../App'; 
 
const mapStateToProps = state => {
  return  {chaos: state.chaos};
}; 
 
const mapDispatchToProps = dispatch => {
  return  bindActionCreators({ 
    initChaos,
    loadChaos,

  }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 