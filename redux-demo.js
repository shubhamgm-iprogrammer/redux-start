const redux = require("redux")

const initialState = {
    counter:0
}
const counterReducer =(state = initialState,action) => {
  switch(action.type){
   case "Increment":
    return {
        counter:state.counter + 1
    }
    case "default":
        return state
}
}
const store = redux.createStore(counterReducer)


const counterSubscriber = () => {
   const latestState= store.getState()
   
   console.log(latestState)

}

store.subscribe(counterSubscriber)
store.dispatch({type:'Increment'})