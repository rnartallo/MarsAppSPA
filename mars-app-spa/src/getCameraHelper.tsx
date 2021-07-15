import axios from 'axios'

export type SelectOption={
    value:string,
    label:string,
  }

type Camera ={
    name: string,
    full_name: string
}
export async function getCameras(response: any) {
    var cameralist:SelectOption[] =[]
    console.log(response)
    const cameraListJSON: Camera[] =  await axios.get(`https://localhost:8000/rovers/${response}/cameras`)
    for (var camera of cameraListJSON){
      const cameraOption :SelectOption ={value: camera.name,label: camera.full_name}
      cameralist.push(cameraOption)
    }
    return cameralist
  }
  