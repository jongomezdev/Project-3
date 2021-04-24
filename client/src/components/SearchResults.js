import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

export default function SearchResults() {
    const [params, setParams] = useState({})
    const [page, setState] = useState(1)
    const { jobs, loading, error } = useFetchJobs(params, page)
return(
<Container>
 {loading && <h1>Loading...</h1>}
 {error && <h1>Error. Try Refreshing.</h1>}
 <h1>{jobs.length}</h1>
</Container>
)
}