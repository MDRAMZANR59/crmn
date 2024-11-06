import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function CustomerAdd() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', name:'', nid:'', email:'', phone:'', password:'', photo:'', companyName:'',country:'', districts:'', upozila:'', post:'', zipCode:'', state:'' });
        const navigate=useNavigate();
        const [customer, setCustomer] = useState(null);//reltabale
        // //for photo
       // const [selectedPhoto, setselectedPhoto] = useState(null); // For photo
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function(response) {
                setInputs(response.data.data);
            });
        }
        const getRelational = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/customer/index`).then(function(response) {
                setCustomer(response.data.data);
            });
            
        };
       
        useEffect(() => {
            if(id){
                getDatas();
            }
        }, []);
        //for photo
        // const handlePhotoChange = (e) => {
        //     setselectedPhoto(e.target.files);
        // }
        //  
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}));
        }
    
        const handleSubmit = async(e) => {
            e.preventDefault();
            console.log(inputs)
        //for photo
        // const formData = new FormData();
        // Append photos to formData
        // formData.append('photo', selectedPhoto[0]);
            try{
                let apiurl='';
                if(inputs.id!=''){
                    apiurl=`/customer/edit/${inputs.id}`;
                }else{
                    apiurl=`/customer/create`;
                }
                
                let response= await axios({
                    method: 'post',
                    responsiveTYpe: 'json',
                    url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                    data: inputs
                     //for photo
                     // data: formData,
                    //  headers: {
                    //      'Content-Type': 'multipart/form-data',
                    //  }
                });
                navigate('/customer/customerList')
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
                                <h1 className="m-0">Add New Customer</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Customer form</h3>
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
                                <div className="container mt-1">
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
                                            
                                                 <div className="mb-3 col-md-6">
                                                <label htmlFor="photo" className="form-label">Photo</label>
                                                <input
                                                    type="file"
                                                    className={`form-control ${errors.photo ? 'is-invalid' : ''}`}
                                                    id="photo"
                                                    name="photo"
                                                    defaultValue={inputs.photo}
                                                    onChange={handleChange}
                                                />
                                                {errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
                                            </div>
                                            {/* <div className="mb-3 col-md-6"> */}
                                                {/* <label for="email-id-vertical">photo</label>
                                                <input 
                                                type="file" 
                                                id="photo" 
                                                className="form-control"
                                                defaultValue={inputs.photo} 
                                                name="photo" 
                                                multiple onChange={handlePhotoChange} /> */}
                                            {/* </div> */}
                                            
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="companyName" className="form-label">Company Name</label>
                                                <input
                                                    placeholder="Company Name"
                                                    type="text"
                                                    className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                                                    id="companyName"
                                                    name="companyName"
                                                    defaultValue={inputs.companyName}
                                                    onChange={handleChange}
                                                />
                                                {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
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

export default CustomerAdd;
