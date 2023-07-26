import ImageShow from "./ImageShow";

function ImageList ({ images }) {
    //don't forget to add keys while mapping
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });

    return (
      <div>{renderedImages}</div>  
    )
};

export default ImageList;