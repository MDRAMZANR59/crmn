import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function StaffAdd() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'',name:'', nid:'', dob:'',email:'',phone:'', joiningDate:'', employeId:'', designation:'', language:'', department:'', signature:'', password:'', photo:'',country:'', districts:'',upozila:'',post:'',zipCode:'', state:'' });
        const navigate=useNavigate();
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/staff/${id}`).then(function(response) {
                setInputs(response.data.data);
            });
        }
    
        useEffect(() => {
            if(id){
                getDatas();
            }
        }, []);
    
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}));
        }
    
        const handleSubmit = async(e) => {
            e.preventDefault();
            console.log(inputs)
            
            try{
                let apiurl='';
                if(inputs.id!=''){
                    apiurl=`/staff/edit/${inputs.id}`;
                }else{
                    apiurl=`/staff/create`;
                }
                
                let response= await axios({
                    method: 'post',
                    responsiveTYpe: 'json',
                    url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                    data: inputs
                });
                navigate('/staff/staffList')
            } 
            catch(e){
                console.log(e);
            }
        }

    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Add New Staff</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Staff Add form</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row md-6">
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="name" className="form-label">Name By NID<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Name"
                                                    type="text"
                                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                    id="name"
                                                    name="name"
                                                    value={inputs.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="nid" className="form-label">NID Number<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Nid Number"
                                                    type="number"
                                                    className={`form-control ${errors.nid ? 'is-invalid' : ''}`}
                                                    id="nid"
                                                    name="nid"
                                                    value={inputs.nid}
                                                    onChange={handleChange}
                                                />
                                                {errors.nid && <div className="invalid-feedback">{errors.nid}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="dob" className="form-label">Date Of Birth<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Date Of Birth"
                                                    type="date"
                                                    className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                                    id="dob"
                                                    name="dob"
                                                    value={inputs.dob}
                                                    onChange={handleChange}
                                                />
                                                {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
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
                                                    value={inputs.email}
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
                                                    value={inputs.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="joiningDate" className="form-label">Joining Date<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Joining Date"
                                                    type="date"
                                                    className={`form-control ${errors.joiningDate ? 'is-invalid' : ''}`}
                                                    id="joiningDate"
                                                    name="joiningDate"
                                                    value={inputs.joiningDate}
                                                    onChange={handleChange}
                                                />
                                                {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="employeId" className="form-label">Employe Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Employe Id"
                                                    type="number"
                                                    className={`form-control ${errors.employeId ? 'is-invalid' : ''}`}
                                                    id="employeId"
                                                    name="employeId"
                                                    value={inputs.employeId}
                                                    onChange={handleChange}
                                                />
                                                {errors.employeId && <div className="invalid-feedback">{errors.employeId}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="designation" className="form-label">Designation<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="designation"
                                                    type="text"
                                                    className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                                                    id="designation"
                                                    name="designation"
                                                    value={inputs.designation}
                                                    onChange={handleChange}
                                                />
                                                {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="expart" className="form-label">Expart For<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Do Separat Using Comma"
                                                    type="text"
                                                    className={`form-control ${errors.expart ? 'is-invalid' : ''}`}
                                                    id="language"
                                                    name="expart"
                                                    value={inputs.expart}
                                                    onChange={handleChange}
                                                />
                                                {errors.expart && <div className="invalid-feedback">{errors.expart}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="department" className="form-label text-black">Select Department <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="department"
                                                    name="department"
                                                    value={inputs.department}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.department ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select department</option>
                                                    <option value="2">Android App Development</option>
                                                    <option value="3">PC App Debolopment</option>
                                                    <option value="4">Web Application Development</option>
                                                </select>
                                                {errors.department && <div className="invalid-feedback">{errors.department}</div>}
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="signature" className="form-label">Signature<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="signature"
                                                    type="file"
                                                    className={`form-control ${errors.signature ? 'is-invalid' : ''}`}
                                                    id="signature"
                                                    name="signature"
                                                    value={inputs.signature}
                                                    onChange={handleChange}
                                                />
                                                {errors.signature && <div className="invalid-feedback">{errors.signature}</div>}
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="photo" className="form-label">Photo<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Photo"
                                                    type="file"
                                                    className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                                                    id="photo"
                                                    name="photo"
                                                    value={inputs.photo}
                                                    onChange={handleChange}
                                                />
                                                {errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
                                            </div>

                                            <div className="mb-3 col-12">
                                                <label htmlFor="country" className="form-label display-6">Address</label>
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="country" className="form-label text-black">Country <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="country"
                                                    name="country"
                                                    value={inputs.country}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}>
                                                    <option value="Select a country">Select a country</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
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
                                                    value={inputs.districts}
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
                                                    value={inputs.upozila}
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
                                                    value={inputs.post}
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
                                                    value={inputs.zipCode}
                                                    onChange={handleChange}
                                                />
                                                {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="state" className="form-label">State<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="state"
                                                    type="text"
                                                    className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                                                    id="state"
                                                    name="state"
                                                    value={inputs.state}
                                                    onChange={handleChange}
                                                />
                                                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Add Customer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

export default StaffAdd;
