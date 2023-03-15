import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        let images = await searchImages(term);
        setImages(images);
    }
    return (
        <div>
            <SearchBar handleSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;