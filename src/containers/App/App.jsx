import AllTaskPage from "../AllTaskPage/AllTaskPage";
import ActiveTaskPage from "../ActiveTaskPage/ActiveTaskPage";
import DoneTaskPage from "../DoneTaskPage/DoneTaskPage";
import Header from "../../components/Header/Header";
import AddForm from "../../components/AddForm/AddForm";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import ButtonsFilter from "../../components/ButtonsFilter/ButtonsFilter";
import style from './App.module.css';
const App = ()=>{
  return(
    <>
        
        <div className={style.appPosition}>
          <BrowserRouter>
              <Header/><br/><br/><br/>
              <ButtonsFilter/><br/><br/>
              <Route exact path="/" component={AllTaskPage}/>
              <Route exact path="/" component={AddForm}/>
              <Route exact path="/activetask" component={ActiveTaskPage}/>
              <Route exact path="/donetask" component={DoneTaskPage}/>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App;