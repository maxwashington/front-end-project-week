import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import SView from "./components/SView";
import MainView from "./components/MainView";
import EditNote from "./components/EditNote";
import NewNote from "./components/NewNote";
import SideBar from "./components/SideBar";

//LeftSide
function LeftSide() {
  return (
    <div className="LeftSide">
      <SideBar />
    </div>
  )
}
//RightSide
function RightSide(){
  return (
    <div className="RightSide">
      <MainView />
    </div>
  )
}

//SplitScreen
function SplitScreen(props){
  return (
    <div className="SplitScreen">
      <div className="SplitScreenLeft"> 
        {props.left}
      </div>
      <div className="SplitScreenRight"> 
        {props.right}
      </div>
    </div>
  )
}

//Home

const Home = props => {
  return (
    <SplitScreen 
    left={<LeftSide />}
    right={<RightSide notes= {props.notes}/>}
  />)
}

//New

const New = props => {
  return (
    <SplitScreen
    left = {<ContentLeft />}
    right = {<ContentRight />}
  />)
}

//View

const View = props => {
  let id = props.match.params.id;
  return (
    <div>
      <SplitScreen left={<ContentLeft />} right={<RightView id={id} />} />
    </div>
  );
};

//Edit

export const Edit = props => {
  let idX = props.match.params.idX;
  return (
    <div>
      <SplitScreen left={<ContentLeft />} right={<EditRight idX={idX} />} />
    </div>
  );
};

//Delete

const Delete = props => {
  let id = props.match.params.id;

  return (
    <div>
      <SplitScreen
      left = {<ContentLeft/>}
      right = {<RightView id={id}/>}/>
    </div>
  )
}

const RightView = props => {
  return (
    <div className="RightSide">
      <SView id={props.id} />
    </div>
  )
}

const EditRight = props => {
  return (
    <div className="RightSide">
      <EditNote idX={props.idX} />
    </div>
  )
}

const ContentLeft = props => {
  return (
    <div className="LeftSide">
      <SideBar />
    </div>
  )
}

const ContentRight = props => {
  return (
<div className="RightSide">
      <MainView />
    </div>
  )
}

const App = props => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/notes/new" component={New} />
      <Route path="/notes/edit" component={Edit} />
      <Route path="/notes/view/:id" component={View} />
      <Route path="/notes/edit/:idX" component={Edit} />
      <Route path="/notes/view/delete/:idX" component={Delete} />
    </div>
  );
};

export default App;
