import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';

function Register() {
    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await register(inputs);
            navigate('/login')
        } 
        catch(e){
            console.log(e);
        }
    }
    
  return (
    <AuthLayout>
        <div className="text-center mb-1">
            <img src="../../assets/dist/img/logo.JPG" height="100" className='mb-4 rounded-circle'/>
            <h3>Sign Up</h3>
            <p>Please fill the form to register.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="row md-6">
                <div className="mb-6 col-md-6">
                    <label htmlFor="name" className="form-label">Name<sup className=" text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Name"
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        defaultValue={inputs.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-6 col-md-6">
                    <label htmlFor="nid" className="form-label">Nid</label>
                    <input
                        placeholder="Nid"
                        type="number"
                        className={`form-control ${errors.nid ? 'is-invalid' : ''}`}
                        id="nid"
                        name="nid"
                        defaultValue={inputs.nid}
                        onChange={handleChange}
                    />
                    {errors.nid && <div className="invalid-feedback">{errors.nid}</div>}
                </div>
                
                <div className="mb-6 col-md-6">
                    <label htmlFor="email" className="form-label">Email<sup className="text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Email"
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        defaultValue={inputs.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="phone" className="form-label">Phone<sup className=" text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Contact"
                        type="number"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        defaultValue={inputs.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="mb-3 col-md-6">
                    <label htmlFor="password" className="form-label">Password<sup className=" text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Password"
                        type="text"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        defaultValue={inputs.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
            
                <div className="mb-3 col-12">
                    <label htmlFor="currentAddress" className="form-label display-6">Current Address</label>
                </div>
                <div className="mb-6 col-md-6">
                    <label htmlFor="country" className="form-label text-black">Country <span className=" text-danger">*</span></label>
                    <select
                        required
                        id="country"
                        name="country"
                        defaultValue={inputs.country}
                        onChange={handleChange}
                        className={`form-control ${errors.country ? 'is-invalid' : ''}`}>
                        <option defaultValue="0">Select a country</option>
                        <option defaultValue="2">Bangladesh</option>
                        <option defaultValue="3">Algeria</option>
                        <option defaultValue="4">Afghanistan</option>
                        <option defaultValue="5">Ghana</option>
                        <option defaultValue="6">Albania</option>
                        <option defaultValue="7">Bahrain</option>
                        <option defaultValue="8">Colombia</option>
                        <option defaultValue="9">Dominican Republic</option>
                    </select>
                    {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                </div>
                <div className="mb-6 col-md-6">
                    <label htmlFor="districts" className="form-label">Districts<sup className="text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Districts"
                        type="text"
                        className={`form-control ${errors.districts ? 'is-invalid' : ''}`}
                        id="districts"
                        name="districts"
                        defaultValue={inputs.districts}
                        onChange={handleChange}
                    />
                    {errors.districts && <div className="invalid-feedback">{errors.districts}</div>}
                </div>
                <div className="mb-6 col-md-6">
                    <label htmlFor="upozila" className="form-label">Upozila<sup className="text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Upozila"
                        type="text"
                        className={`form-control ${errors.upozila ? 'is-invalid' : ''}`}
                        id="upozila"
                        name="upozila"
                        defaultValue={inputs.upozila}
                        onChange={handleChange}
                    />
                    {errors.upozila && <div className="invalid-feedback">{errors.upozila}</div>}
                </div>

                <div className="mb-6 col-md-6">
                    <label htmlFor="post" className="form-label">Post<sup className="text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Post"
                        type="text"
                        className={`form-control ${errors.post ? 'is-invalid' : ''}`}
                        id="post"
                        name="post"
                        defaultValue={inputs.post}
                        onChange={handleChange}
                    />
                    {errors.post && <div className="invalid-feedback">{errors.post}</div>}
                </div>

                <div className="mb-6 col-md-6">
                    <label htmlFor="zipCode" className="form-label">Zip Code<sup className=" text-danger">*</sup></label>
                    <input
                        required
                        placeholder="Zip Code"
                        type="number"
                        className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                        id="zipCode"
                        name="zipCode"
                        defaultValue={inputs.zipCode}
                        onChange={handleChange}
                    />
                    {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                </div>
                <div className="mb-6 col-md-6">
                    <label htmlFor="state" className="form-label">State<sup className=" text-danger">*</sup></label>
                    <input
                        required
                        placeholder="State"
                        type="text"
                        className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                        id="state"
                        name="state"
                        defaultValue={inputs.state}
                        onChange={handleChange}
                    />
                    {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                </div>
            </div>
                <Link to="/login">Have an account? Login</Link>      
            <div className="clearfix">
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
                   
    </AuthLayout>
  )
}

export default Register