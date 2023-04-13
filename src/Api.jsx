import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID qE9e03Z9keSK3v8gScKmjMAizTDW36NHy_z8w6JkqEc",
		},
		params: {
			query: term,
		},
	});

	return response.data.results;
};

export default searchImages;
