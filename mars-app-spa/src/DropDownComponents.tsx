import { createContext, useContext, useState } from "react";
import Select from "react-select";
import NumericInput from "react-numeric-input"
import { getCameras, SelectOption } from "./getCameraHelper";
import { getPhotos } from "./getPhotosHelper";
import { PhotoContext } from "./DropDownAndPhotoComponent";
import { getMaxSol, getTotalPhotos, Sollog } from "./solhelper";

const roverNames: SelectOption[] = [
  { value: "Curiosity", label: "Curiosity" },
  { value: "Spirit", label: "Spirit" },
  { value: "Opportunity", label: "Opportunity" },
  { value: "Perseverance", label: "Perseverance" },
];

const RoverContext = createContext({
  cameralist: [{ value: "", label: "" }],
  rovername: "",
  setcameralist: (value: SelectOption[]) => {},
  setrovername: (name: string) => {},
  sol: 0,
  setsol: (x:number)=>{},
  max_sol:0,
  setmaxsol: (x:number)=>{},
  total_photos: 0,
  settotalphotos: (x:number)=>{}
});

const DropDown: React.FC = () => {
  var [cameralist, setCameraList] = useState([{ value: "", label: "" }]);
  function setcameralist(value: SelectOption[]) {
    setCameraList(value);
  }
  var [rovername, setRoverName] = useState("");
  var [sol,setSol]=useState(1000);
  var [max_sol,setMaxSol]=useState(1000);
  var [total_photos,setTotalPhotos]=useState(0);


  function setrovername(name: string) {
    setRoverName(name);
  }
  function setsol(x:number){
    setSol(x);
  }
  function setmaxsol(x:number){
    setMaxSol(x)
  }
  function settotalphotos(x:number){
    setTotalPhotos(x)
  }

  const Provider = RoverContext.Provider;

  return (
    <div>
      <Provider value={{ cameralist, rovername, setcameralist, setrovername,sol,setsol,max_sol,setmaxsol,total_photos,settotalphotos }}>
        <FirstChoice />
        {rovername && 
        <>
          <SecondChoice />
          <ThirdChoice/>
        </>
        }
      </Provider>
    </div>
  );
};

const FirstChoice: React.FC = () => {
  let { cameralist, rovername, setcameralist, setrovername,max_sol,setmaxsol} =
    useContext(RoverContext);
  return (
    <div className="App-header">
      <Select
        options={roverNames}
        autosize={true}
        clearable={true}
        onChange={async (response) => {
          setrovername(response ? response.value : "");
          cameralist = await getCameras(response?.value);
          const soldata = await  getMaxSol(response?.value);
          setmaxsol(soldata.max_sol)
          console.log(cameralist)
          setcameralist(cameralist);
        }}
      />
    </div>
  );
};

const SecondChoice: React.FC = ()=>{
  let {rovername,sol,setsol,max_sol,total_photos,settotalphotos}=useContext(RoverContext);
    return(
      <div>
      Select a sol in the range 0 to {max_sol}<div>
      <NumericInput min={0} max={max_sol} value={sol} placeholder = {"Select sol in range"}onChange={async  (response)=>{
      const solval = response??100;
      setsol(solval);
      let sollog: Sollog = await getTotalPhotos(rovername,sol)
      settotalphotos(sollog.total_photos)}}
    /></div>
    There are {total_photos} photos from {rovername} on Sol {sol}</div>
  )
}

const ThirdChoice: React.FC = () => {
  let { cameralist, rovername,sol } = useContext(RoverContext);
  console.log(sol)
  let { photoList, setphotolist } = useContext(PhotoContext);
  return (
    <div>
      Select a camera
      <Select
        options={cameralist}
        autosize={true}
        clearable={true}
        onChange={async (response) => {
          photoList = await getPhotos(response?.value, rovername,sol);
          setphotolist(photoList);
        }}
      />
    </div>
  );
};



export default DropDown;
