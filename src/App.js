import logo from './logo.svg';
import './App.css';
import Counter from './Components/count'
import {createStore} from "redux";
import {Provider} from 'react-redux'

const initialState = {
  count : 0
}

function reducer(state = initialState,action){
    switch(action.type){
      case "INCREMENT":
        return{
          count : state.count + 1
        };
        case "DECREMENT":
          return{
            count : state.count - 1
          };
      default:
        return state;
    }
}

const store = createStore(reducer);

const App = () =>(
  <Provider store = {store}>
  <Counter/>
  </Provider>
)

export default App