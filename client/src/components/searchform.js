import React, {useState, useEffect}  from "react";
import ReactDOM from "react-dom";


function SearchForm() {
  // create a state named searchTerm that gets updated every onChange
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  // create a state named searchResults
  const [searchResults, setSearchResults] = useState([]);
  // filters the searchable data and sets the value to "results"
//   useEffect(() => {
//     // TODO: update "people" to the api results 
//     const results = people.filter(person =>
//       person.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

    return (
    <div>
        <form>
        <label>
        Search:
        </label>
        <input 
        type="text" 
        value={searchTerm} 
        placeholder="Search for a job"
        onChange={handleChange} />
        </form>

{/* placeholder for search results
TODO: move search results to the SearchResults component */}
<ul>
{/* {searchResults.map(job => (
<li>{job}</li>
))} */}
{searchTerm}
</ul>


    </div>
    )
}


export default SearchForm;