import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import JobPagination from "./JobPagination"
import SearchForm from "./SearchForm";

export default function SearchResults() {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

    function handleParamChange(e) {
        const param = e.target.name
        const value = e.target.value
        setPage(1)
        setParams(prevParams => {
            return { ...prevParams, [param]: value}
        })
    }
return(
<Container className="my-4">
 <SearchForm  params={params} onParamChange={handleParamChange} />
 <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
 {loading && <h1>Loading...</h1>}
 {error && <h1>Error. Try Refreshing.</h1>}
 {jobs.map(job => {
     return <Job key={job.id} job={job} />
 })}
  <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
</Container>
)
}