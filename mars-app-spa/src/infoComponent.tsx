import React from 'react'

type infoComponentProp = {
    title: string;
    paragraph1: string;
    paragraph2: string;
    image: string
}

const InfoComponent: React.FC<infoComponentProp> = ({ title, paragraph1, paragraph2, image }) => {
    return (
        <>
            <h1> {title}</h1>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <img src={image} alt="" />
        </>
    )
};
export default InfoComponent