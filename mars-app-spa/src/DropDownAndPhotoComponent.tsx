import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import DropDown from "./DropDownComponents";
import {Photo} from "./getPhotosHelper"
export const PhotoContext = createContext({
    photoList: [{id: 0, sol: 0, img_src: '', earth_date: ''}],
    setphotolist: (value: Photo[]) => {},
  });
  
  const Provider = PhotoContext.Provider;

export const DropDownPhotos: React.FC = () => {
    var [photoList, setPhotoList] = useState([{id: 0, sol: 0, img_src: '', earth_date: ''}]);
    function setphotolist(value: Photo[]) {
      setPhotoList(value);
    }

    return(
        <div>
        <Provider value = {{photoList, setphotolist}}>
            <DropDown /> 
            <Photos />
        </Provider>
        </div>

    )

}

const Photos: React.FC = () => {
    var { photoList } = useContext(PhotoContext);
    const blankPhoto: Photo = {id: 0, sol: 0, img_src: '', earth_date: ''}
    if (photoList.length ==0){
        return (<div>There are no results matching your search criteria</div>)
    }else if (photoList[0].id==0){
        return (<div/>)
    }
    else{
    //const len = Math.min(photoList.length,5);
    return(
        <div>
            Displaying {photoList.length} of {photoList.length} results matching your search criteria
        {photoList.slice(0,photoList.length).map((photo) => (
        <figure>
        <img src={photo.img_src}/>
        <figcaption > <b> PhotoID = {photo.id}, Sol = {photo.sol}, Earth Date ={photo.earth_date}  </b>
        </figcaption>
        </figure>
        ))}
        </div>
    )}


}

export default DropDownPhotos;