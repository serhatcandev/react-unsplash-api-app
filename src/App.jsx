import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/ImageList/ImageList";
import searchImages from "./Api";

function App() {
	const [images, setImages] = useState([]);

	const handleClick = async (term) => {
		const result = await searchImages(term);

		setImages(result);
	};
	return (
		<div className="App">
			<SearchBar onSubmit={handleClick} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
