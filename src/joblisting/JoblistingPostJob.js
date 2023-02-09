import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

export default function JoblistingPostJob() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            id: '',
            company: '',
            position: '',
            role: '',
            postedAt: '',
            contract: '',
            location: '',
            jobDescription: ''
        },
        onSubmit: values => {
            axios.post("http://localhost:4000/postjob", values);
            alert("Registered Successfully");
            navigate("/login");
        }
    })


    return (
        <div>
            <h2>Post a job</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>id</dt>
                    <dd><input type="number" value={formik.values.id} onChange={formik.handleChange} name="id" /></dd>
                    <dt>Company</dt>
                    <dd><input type="text" value={formik.values.company} onChange={formik.handleChange} name="company" /></dd>
                    <dt>Position</dt>
                    <dd><input type="text" value={formik.values.position} onChange={formik.handleChange} name="position" /></dd>
                    <dt>Role</dt>
                    <dd><input type="text" value={formik.values.role} onChange={formik.handleChange} name="role" /></dd>
                    <dt>postedAt</dt>
                    <dd><input type="text" value={formik.values.postedAt} onChange={formik.handleChange} name="postedAt" /></dd>
                    <dt>Contract</dt>
                    <dd><input type="text" value={formik.values.contract} onChange={formik.handleChange} name="contract" /></dd>
                    <dt>Location</dt>
                    <dd><input type="text" value={formik.values.location} onChange={formik.handleChange} name="location" /></dd>
                    <dt>Job Description</dt>
                    <dd><input type="text" value={formik.values.jobDescription} onChange={formik.handleChange} name="jobDescription" /></dd>

                </dl>
                <button className="btn btn-primary">Register</button>
                <br />
                <Link to="/login">Already have account?</Link>
            </form>
        </div>
    )
}