import axios from 'axios'

export type Photo ={
    id: number,
    sol: number,
    img_src: string,
    earth_date: string
}

  export async function getPhotos(camera: any, rovername: string,sol:number): Promise<Photo[]> {
    const response = await axios.get<Photo[]>(`http://localhost:7000/rovers/${rovername}/camera/${camera}&sol=${sol}`);
    console.log(response.data);
    return response.data;
  };