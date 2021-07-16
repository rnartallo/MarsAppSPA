import "./App.css";
import { SelectOption, getCameras } from "./getCameraHelper";
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
