import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "react-select";
import { SelectOption, getCameras } from "./getCameraHelper";
import { getPhotos } from "./getPhotosHelper";
import DropDown from "./DropDownComponents";
import { DropDownPhotos } from "./DropDownAndPhotoComponent";


const roverNames: SelectOption[] = [
  { value: "Curiosity", label: "Curiosity" },
  { value: "Spirit", label: "Spirit" },
  { value: "Opportunity", label: "Opportunity" },
  { value: "Perseverance", label: "Perseverance" },
];

var cameralist: SelectOption[] = [];
var rovername: any = "";

function App() {
  return (
    <div className="App-header">
      {/* <header className="App-header">
      </header> */}
      <h1>Pictures from Mars</h1>
      Select a rover
      <DropDownPhotos />
    </div>
  );
}


export default App;
