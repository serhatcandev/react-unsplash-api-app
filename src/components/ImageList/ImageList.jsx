import React from "react";
import ImageShow from "../ImageShow/ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
	const renderedImages = images.map((image) => {
		return (
			<div className="image-list" key={image.id}>
				<ImageShow image={image} />
			</div>
		);
	});
	return <div className="rendered-images">{renderedImages}</div>;
};

export default ImageList;
