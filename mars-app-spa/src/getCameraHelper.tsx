import axios from "axios";

export type SelectOption = {
  value: string;
  label: string;
};

export type Camera = {
  name: string;
  full_name: string;
};
export async function getCameras(rovername: any) {
  var cameralist: SelectOption[] = [];
  console.log(rovername);
  const url = `http://localhost:8000/rovers/${rovername}/cameras`;
  console.log(url);
  const {data} = await axios.get(
    `http://localhost:8000/rovers/${rovername}/cameras`
  );
  console.log(data);
  for (var camera of data) {
    const cameraOption: SelectOption = {
      value: camera.name,
      label: camera.full_name,
    };
    cameralist.push(cameraOption);
  }
  console.log(cameralist)
  return cameralist;
}
