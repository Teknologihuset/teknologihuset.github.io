import React from "react";

type SpotlightImageProps = {
    imgSrc: string
    alt?: string
}

const SpotlightImage: React.FC<SpotlightImageProps> = (props) => {
    return <span className="image"><img src={props.imgSrc} alt={props.alt} /></span>;
}

export default SpotlightImage;