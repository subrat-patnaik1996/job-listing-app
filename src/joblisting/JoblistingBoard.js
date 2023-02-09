import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

export default function JoblistingBoard(){
    const[jobs,setJobs]=useState([])



    useEffect(()=>{
        // setCategory(params.category);
        // axios.get("http://localhost:4000/getjobs")
        // .then(response=> {
        //     setJobs(response.data);
        // })
        fetch("http://127.0.0.1:4000/getjobs")
        .then(response=>response.json())
        .then(data=>{
            setJobs(data)
        })
    })



    return(
        <div className="container-fluid">
            <h2>joblisting board</h2>
            <table className="table table hover">
               <thead>
               <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Role</th>
                    <th>PostedAt</th>
                    <th>Contract</th>
                    <th>Location</th>
                    <th>Job description</th>
                    <th>Apply for the job</th>
                </tr>
               </thead>
               <tbody>
                {
                    jobs.map(item=>
                        <tr>
                            <td>{item.company}</td>
                            <td>{item.position}</td>
                            <td>{item.role}</td>
                            <td>{item.postedAt}</td>
                            <td>{item.contract}</td>
                            <td>{item.location}</td>
                            <td>{item.jobDescription}</td>
                            {/* <td><button className="btn btn-primary" key={item.id}> <Link to={"/getjobs/" + item.id}>Apply</Link></button></td>
                             */}
                             <td><Link to={'/getjobs/' + item.id} className="btn btn-primary w-100">Apply</Link></td>
                        </tr>
                        )
                }
               </tbody>

            </table>

        </div>
    )
}