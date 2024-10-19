
import React,{useState} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';

function Login(){
    const navigate = useNavigate();
    const [inputs, setInputs ] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await login(inputs);
        console.log(check)
        if(check){
            window.location=process.env.REACT_APP_BASE_URL
        }else{
            alert("Sorry password or email address is wrong!");
        }
    }
    return(
        <AuthLayout>
            <div className="text-center mb-5">
                <img src="../../assets/dist/img/logo.JPG" height="50" className='mb-4 rounded-circle'/>
                <h3>Sign In</h3>
            </div>
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
            <div className="mb-12 col-md-12">
                <select
                    className="form-control"
                    required
                    type="text"
                    // className={`form-control ${errors.role_id ? 'is-invalid' : ''}`}
                    id="role_id"
                    name="role_id"
                    // value={inputs.role_id}
                    onChange={handleChange}>
                        <option value="">Select role</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Customer Exicutive</option>
                        <option value="3">Staff</option>
                        <option value="4">Customer</option>
                </select>
                
                {/* {errors.name && <div className="invalid-feedback">{errors.name}</div>} */}
            </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" onChange={handleChange}/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange={handleChange}/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="icheck-primary">
                        <input type="checkbox" id="remember"/>
                        <label htmlFor="remember">
                            Remember Me
                        </label>
                        </div>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                </div>
            </form>
            <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
            </div>
            <p className="mb-1">
                <Link to="#">I forgot my password</Link>
            </p>
        </AuthLayout>
    )
}
export default Login ;


