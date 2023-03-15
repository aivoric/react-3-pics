function ImageShow({ image }) {
    // return <img src={src} />
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow;