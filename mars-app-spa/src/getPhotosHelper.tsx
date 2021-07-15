import axios from 'axios'

type Photo ={
    id: number,
    sol: number,
    img_src: string,
    earth_date: string
}
export async function getPhotos(camera: any,rovername: string) {
  const photolist : Photo[] =  await axios.get(`https://localhost:8000/rovers/${rovername}/camera/${camera}`);
  console.log(photolist)
  return photolist}