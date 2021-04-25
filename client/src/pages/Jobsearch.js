import React, { Component } from "react";
import SearchForm from "../components/SearchForm"
import SearchResults from "../components/SearchResults"

function JobSearch() {
    return (
        <div className="bg-light">
        <SearchForm />
        <SearchResults />
        </div>

    )
}

export default JobSearch;
