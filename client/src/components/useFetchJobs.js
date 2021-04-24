import React from "react";

export default function useFetchJobs(params, page) {
    return {
        jobs: [],
        loading: false,
        error: false
    }
}