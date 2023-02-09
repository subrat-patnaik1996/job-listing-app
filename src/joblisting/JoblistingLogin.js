import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function JoblistingLogin()
{
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            UserId:'',
            Password:''
        },
        onSubmit : values => {
            for(var user of users) {
                if(user.UserId==values.UserId && user.Password==values.Password){
                    setCookie("userid", user.UserId);
                    navigate("/dashboard");
                    break;
                } else {
                    navigate("/errorpage");
                }
            }
        }
    })

    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
            .then(response=> {
                setUsers(response.data);
            })
    },[]);
    

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input value={formik.values.UserId} name="UserId" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input  value={formik.values.Password} name="Password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-primary">  <Link to="/jobBoard">Login</Link></button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    )
}
//one of the registered userid=john_nit
//and password is=john@11