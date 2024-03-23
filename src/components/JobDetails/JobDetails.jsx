import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {
        contact_information,
        job_title,
        experiences,
        educational_requirements,
        job_responsibility,
        job_description,
        salary,
    } = job;

    return (
        <div className="my-8">
            <div className="grid md:grid-cols-4 my-2 gap-4">
                <div className=" md:col-span-3">
                    <h2 className="text-xl text-gray-600">
                        <p className="py-4">
                            <span className="font-extrabold text-black">Job Description : </span>
                            {job_description}
                        </p>
                        <p className="py-4">
                            <span className="font-extrabold text-black">Job Responsibility : </span>
                            {job_responsibility}
                        </p>
                        <p className="py-4">
                            <span className="font-extrabold text-black">
                                Educational Requirements :{" "}
                            </span>
                            {educational_requirements}
                        </p>
                        <p className="py-4">
                            <span className="font-extrabold text-black">Experiences : </span>
                            {experiences}
                        </p>
                    </h2>
                </div>
                <div className="border bg-blue-100 rounded p-4">
                    <h2 className="text-xl font-bold border py-4 border-b-blue-300">Job Details</h2>
                    <div className="py-4">
                        <p className="py-1">
                            <span className="font-bold">Salary : </span>
                            {salary}{" "}
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Job Title : </span>
                            {job_title}{" "}
                        </p>
                    </div>
                    <h2 className="text-xl font-bold border py-4 border-b-blue-300">Contact Information</h2>
                    <div className="py-4">
                        <p className="py-1">
                            <span className="font-bold">Phone : </span>
                            {contact_information.phone}{" "}
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Email : </span>
                            {contact_information.email}{" "}
                        </p>
                        <p className="py-1">
                            <span className="font-bold">Address : </span>
                            {contact_information.address}{" "}
                        </p>
                        <button className="btn bg-blue-500 mt-3 text-white w-full">Apply Now</button>

                    </div>

                </div>

            </div>


        </div>);
};

export default JobDetails;