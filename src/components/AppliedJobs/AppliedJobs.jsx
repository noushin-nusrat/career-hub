import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobs, storedJobIds, JobsApplied);
        }
    }, [])
    return (
        <div>
            <h2>jobs i applied</h2>
        </div>
    );
};

export default AppliedJobs;