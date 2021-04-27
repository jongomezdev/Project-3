import React from "react";
// import ReactDOM from "react-dom";
import { Form, Col } from "react-bootstrap";


function SearchForm({ params, onParamChange }) {
  // create a state named searchTerm that gets updated every onChange
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  // };
  // // create a state named searchResults
  // const [searchResults, setSearchResults] = useState([]);
  // filters the searchable data and sets the value to "results"
//   useEffect(() => {
//     // TODO: update "people" to the api results 
//     const results = people.filter(person =>
//       person.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

    return (
      <Form className="mb-4">
        <Form.Row className="align-items-end">
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control onChange={onParamChange} value={params.location} name="location" type="text" />
          </Form.Group>
          <Form.Group as={Col} xs="auto" className="ml-2">
            <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2"/>
          </Form.Group>
        </Form.Row>
      </Form>
    )
}

// import React, {useState, useEffect}  from "react";


// {/* placeholder for search results
// TODO: move search results to the SearchResults component */}
// {/* <ul> */}
// {/* {searchResults.map(job => (
// <li>{job}</li>
// ))} */}
// {/* {searchTerm} */}
// {/* </ul> */}
// onChange={handleChange}

export default SearchForm;