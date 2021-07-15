import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import {SelectOption,getCameras} from './getCameraHelper'
import { getPhotos } from './getPhotosHelper';


const roverNames: SelectOption[]= [{value: "Curiosity",label: "Curiosity"},{value: "Spirit",label: "Spirit"},{value: "Opportunity",label: "Opportunity"},{value: "Perseverance",label: "Perseverance"}]
var cameralist: SelectOption[] =[];
var rovername: any = ""
function App() {
  return (
    <div className="App-header">
      {/* <header className="App-header">
      </header> */}
      <h1>Pictures from Mars</h1>
      Select a rover
      <Select options = {roverNames} autosize = {true} clearable = {true} onChange = {async (response)=>{ 
        rovername = response?.value;
        cameralist = await getCameras(response?.value)}}/>
      Select a camera
      <Select options = {cameralist} autosize = {true} clearable = {true} onChange = {(response)=>{getPhotos(response?.value,rovername)}}/>
    </div>
  );
}




export default App;
