import { Link } from "react-router-dom";

export default function JoblistingHome()
{
    return(
        <div>
            <h2>Job Search Home</h2>
            <Link to="/register"> New Register</Link>
            <span> | </span>
            <Link to="/login">Existing User</Link>
            <div>
            <Link to="/jobBoard">Job Search</Link>
            </div>
        </div>
    )
}