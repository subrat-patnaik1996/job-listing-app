
import { useState, useEffect } from "react";
import axios from 'axios';
import {  useParams } from "react-router-dom";



export default function JoblistingSingle() {
    const [job, setJob] = useState([{
        id: 0,
        company: '', position: '', role: '', postedAt: '', contract: '', location: '', jobDescription: ''
    }]);
    let params = useParams();

  

    useEffect(()=>{
        axios({
            method:'get',
            url: `http://localhost:4000/getjobs/${params.id}`
        }).then(response=>{
            setJob(response.data);
        })
    },[]);

    return (
        <div className="container-fluid">

            <h2>Job Details {params.id} </h2>
            <dl>
                <dt>job id</dt>
                <dd key={job.id}>{job.id}</dd>
                <dt>Company name</dt>
                <dd>{job.company}</dd>
                <dt>Position</dt>
                <dd>{job.position}</dd>
                <dt>Role</dt>
                <dd>{job.role}</dd>
                <dt>PostedAt</dt>
                <dd>{job.postedAt}</dd>
                <dt>Contract</dt>
                <dd>{job.contract}</dd>
                <dt>Location</dt>
                <dd>{job.location}</dd>
                <dt> job Description</dt>
                <dd>{job.jobDescription}</dd>
            </dl>
        </div>
    )
}