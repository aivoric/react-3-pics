import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImages = images.map((image)=> {
        // Keys are important
        // https://reactjs.org/docs/lists-and-keys.html#keys
        // Keys help React identify which items have changed, 
        // are added, or are removed. This helps re-render 
        // lists more efficiently 
        return <ImageShow key={image.id} image={image} />
    });

    return (
        <div className="image-list">{renderedImages}</div>
    )
}

export default ImageList;