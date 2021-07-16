import React from 'react'
import axios from 'axios'
export type Mission={
    rover:string,
    max_sol:number
}
export type Sollog={
    rover: string,
    sol:number,
    total_photos:number
}

export async function getMaxSol(rovername: any): Promise<Mission> {
    const response = await axios.get<Mission>(`http://localhost:7000/rovers/${rovername}`);
    console.log(response.data);
    return response.data;
  };

export async function getTotalPhotos(rovername:string, sol:number){
    const response = await axios.get<Sollog>(`http://localhost:7000/rovers/${rovername}/${sol}`);
    console.log(response.data);
    return response.data;
}