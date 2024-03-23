import { MdLocationOn,MdAttachMoney  } from "react-icons/md";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl border p-4 border-gray-200">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{job_title}</h2>
                <p className="text-xl">{company_name}</p>
                <div className="my-2">
                    <button className="px-2 py-2 font-extrabold border border-blue-500 rounded mr-4 text-blue-400">{remote_or_onsite}</button>
                    <button className="px-2 py-2 font-extrabold border border-blue-500 rounded mr-4 text-blue-400">{job_type}</button>
                </div>
                <div className="flex gap-4 my-2" >
                    <h2 className="flex"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
                    <h2 className="flex"><MdAttachMoney  className="text-2xl"></MdAttachMoney>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn  bg-blue-500 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;