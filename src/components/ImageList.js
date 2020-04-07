import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imagesMapped = props.images.map(image => <ImageCard key={image.id} image={image} />)
    
    return (
    <div className='image-list'>{imagesMapped}</div>
    )
};

export default ImageList;