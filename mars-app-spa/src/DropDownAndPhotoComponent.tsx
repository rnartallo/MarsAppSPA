import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import Select from "react-select";
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
    const len = Math.min(photoList.length,5);
    return(
        <div>
        {photoList.slice(0,len).map((photo) => (<img src={photo.img_src}/>))}
        </div>
    )


}

export default DropDownPhotos;