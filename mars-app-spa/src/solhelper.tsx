import React from 'react'
import axios from 'axios'
export type Mission={
    rover:string,
    max_sol:number
}

export async function getMaxSol(rovername: any): Promise<Mission> {
    const response = await axios.get<Mission>(`http://localhost:7000/rovers/${rovername}`);
    console.log(response.data);
    return response.data;
  };