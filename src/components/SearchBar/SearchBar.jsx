import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");

	const handleSubmitForm = (e) => {
		e.preventDefault();
		onSubmit(term);
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<div className="search-bar">
			<form onSubmit={handleSubmitForm}>
				<label>Search for Images</label>
				<input onChange={handleChange} value={term} autoFocus={true} />
			</form>
		</div>
	);
};

export default SearchBar;
