import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JoblistingHome from './JoblistingHome';

import JoblistingLogin from './JoblistingLogin';
import JoblistingRegister from './JoblistingRegister';
import JoblistingLoginEmployer from './JoblistingLoginEmployer';
import JoblistingPostJob from './JoblistingPostJob';
import JoblistingBoard from './JoblistingBoard';
import JoblistingSingle from './JoblistingSingle';

export default function JoblistingIndex()
{
    return(
        <div className="container-fluid">
            <header className="bg-success text-white text-center p-2 mt-2">
                <h1>Get Hired Hub</h1>
            </header>
            <section className="mt-2 row">
               <BrowserRouter>
               <nav className="col-3">
                    <div className="mb-2">
                        <Link className="btn btn-success w-100" to="/home">Home</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-success w-100" to="/employer">Employer Login</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-success w-100" to="/register">Register</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-success w-100" to="/login">Login</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-success w-100" to="/jobBoard">Job Board</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="/" element={<JoblistingBoard/>} />
                        <Route path="home" element={<JoblistingHome />} />
                        <Route path="login" element={<JoblistingLogin />} />
                        <Route path="register"  element={<JoblistingRegister />} />
                        <Route path="employer"  element={<JoblistingLoginEmployer />} />
                        <Route path="postjobs"  element={<JoblistingPostJob/>} />
                        {/* <Route path="jobBoard"  element={<JoblistingBoard/>} />
                        <Route path="jobSingle"  element={<JoblistingSingle/>} /> */}
                        <Route  path="jobBoard"  element={<JoblistingBoard/>}>
                        </Route>
                        <Route path="getjobs/:id"  element={<JoblistingSingle/>} ></Route>
                        <Route path="errorpage" element={
                            <div>
                                <h2 className="text-success">Invalid Credentials</h2>
                                <Link to="/login">Try Again</Link>
                            </div>
                        } /> 
                    </Routes>
                </main>
               </BrowserRouter>
            </section>
        </div>
    )
}