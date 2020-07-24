import React, {createContext, useContext, useEffect, useReducer, Component} from 'react';
import {Link ,useHistory} from 'react-router-dom'
import './App.css';
import {reducer,initialState} from './reducers/userReducer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignUp from './components/screens/SignUp'
import SignUpIncubator from './components/screens/SignUpIncubator'
import SignIn from './components/screens/SignIn'
import Reset from './components/screens/Reset'
import NewPassword from './components/screens/Newpassword'
import MediaCard from './cardview_files/cardview'
import MediaCardShortlisted from './cardview_files/cardviewshortlisted'
import Dashboard from './cardview_files/dashboard'
import NotFound from './components/screens/NotFound';
export const UserContext = createContext()



const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/dashboard')
    }else{
      if(history.location.pathname.startsWith('/dashboard')){
            history.push('/signin')
      }
      // if(!history.location.pathname.startsWith('/cards')){
      //       history.push('/dashboard')
      // }
      // if(history.location.pathname.startsWith('/reset')){
      //       history.push('/signin')
      // }
    }
  },[])
  return(
    <Switch>
<Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/signupInc'>
        <SignUpIncubator />
      </Route>
      <Route path='/signin'>
        <SignIn />
      </Route>
      <Route exact path='/reset'>
        <Reset />
      </Route>
      <Route path='/reset/:token'>
        <NewPassword />
      </Route>
      {/* <Route path='/cards'>
        <MediaCard />
      </Route> */}
      {/* <Route path='/cards'>
        <MediaCard />
      </Route>
      <Route path='/cards-shortlisted'>
        <MediaCardShortlisted />
      </Route> */}
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>

      
    </Switch>
  )
}




function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Routing />
      </BrowserRouter>
      </UserContext.Provider>


  );
}

export default App;

