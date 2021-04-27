import {Component} from "react"

import { useSelector,useDispatch ,connect} from 'react-redux';

import {counterActions} from "../store/counter"
import classes from './Counter.module.css';

// const Counter = () => {
//   const dispatch = useDispatch()
//   const counter = useSelector(state => state.counter);

//   const toggleCounterHandler = () => {};

//   const incrementHandler = () => {
//     dispatch({type: "increment"})
//   }

//   const decrementHandler = () => {
//     dispatch({type:"decrement"})
//   }
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//       <button onClick={incrementHandler}>increment</button>
//       <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

class Counter extends Component{


   incrementHandler = () => {
     this.props.increment()
   }

   decrementHandler = () => {
    this.props.decrement()
   }
   toggleCounterHandler = () => {

   };

     render(){
       return (
        <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
        <button onClick={this.incrementHandler}>increment by 5</button>
        <button onClick={this.decrementHandler}>decrement by 5</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
       )
     }
}

const mapStateToProps = (state) => {
 return {
   counter:state.counter.counter
 }
}

const mapDispatchToProps = (dispatch) => {
return {
  increment:()=> dispatch(counterActions.increment(5)),
  decrement:()=> dispatch(counterActions.decrement())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)