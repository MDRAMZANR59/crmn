import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ProjectAdd() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', projectName:'', projectType:'', doHoPr:'', frontLang:'', backLang:'', firstName:'', lastName:'', customerId:'', companyName:'', projectDes:'', badget:'', advance:'', duration:'', endDate:''});
        const navigate=useNavigate();
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response) {
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
                    apiurl=`/projectfiles/edit/${inputs.id}`;
                }else{
                    apiurl=`/projectfiles/create`;
                }
                
                let response= await axios({
                    method: 'post',
                    responsiveTYpe: 'json',
                    url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                    data: inputs
                });
                navigate('/project/TransfaringProject')
            } 
            catch(e){
                console.log(e);
            }
        }

    const calDate= (e)=>{
        e=parseInt(e.target.value)
            let p = {
            pDate: new Date(),  // Today
            pEDate: e  // Days to add
        };
        
        let date = new Date(new Date(p.pDate).setDate(p.pDate.getDate() + p.pEDate)).toDateString();
        
        // console.log(date); // 7 days from today
    }

    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Project Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Project Add</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">General</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="projectName">Project Name<sup className=" text-danger">*</sup></label>
                                            <input
                                            required
                                            value={inputs.projectName}
                                            onChange={handleChange}
                                            className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                                            name="projectName" type="text" id="projectName" placeholder="Project Name"/>
                                            {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label required htmlFor="projectType">Project Type<sup className=" text-danger">*</sup></label>
                                            <select
                                                value={inputs.projectType}
                                                onChange={handleChange}
                                                className={`form-control ${errors.projectType ? 'is-invalid' : ''}`}
                                                id="projectType" name="projectType">
                                                <option value="Select Type">Select Type</option>
                                                <option value="Web Application Devolopment">Web Application Devolopment</option>
                                                <option value="Pc App Devolopment">Pc App Devolopment</option>
                                                <option value="Android App Devolopment">Android App Devolopment</option>
                                            </select>
                                            {errors.projectType && <div className="invalid-feedback">{errors.projectType}</div>}
                                        </div>
                                        <label required htmlFor="doHoProvider">Domain And Hosting Provider<sup className=" text-danger">*</sup></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="codeCrafters" value="Code Crafters" className="d-inline">Code Crafters</label>
                                            <input
                                                value={inputs.doHoPr}
                                                onChange={handleChange}
                                                className={`${errors.doHoPr ? 'is-invalid' : ''}`}
                                                id="codeCrafters" 
                                                type="radio" 
                                                name="doHoPr" />
                                                {errors.doHoPr && <div className="invalid-feedback">{errors.doHoPr}</div>}
                                       
                                        <label htmlFor="client" value="Client">Client</label>
                                        <input 
                                                value={inputs.doHoPr}
                                                onChange={handleChange}
                                                className={`${errors.doHoPr ? 'is-invalid' : ''}`} 
                                                id="client" 
                                                type="radio" 
                                                name="doHoPr" /> 
                                                 {errors.doHoPr && <div className="invalid-feedback">{errors.doHoPr}</div>}
                                           
                                        </div>
                                        <label htmlFor="expectedLanguage">Require Language/Framework</label><br/>
                                        <label><strong>Front End</strong></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="javascript">JavaScript </label>
                                            <input
                                                value={inputs.frontLang}
                                                onChange={handleChange}
                                                className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`}
                                                name="frontLang" type="checkbox" id="javascript"/>
                                                {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                       
                                            <label htmlFor="php">TypeScript</label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="php" placeholder="Project Name"/>
                                            {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                        
                                            <label htmlFor="vue">Vue.js</label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="vue" placeholder="Project Name"/>
                                            {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                       
                                            <label htmlFor="php">TypeScript</label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="php" placeholder="Project Name"/>
                                            {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                       
                                            <label htmlFor="angular">Angular </label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="angular" placeholder="Project Name" /><br/>
                                            {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                       
                                            <label htmlFor="react">React </label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="react" placeholder="Project Name" />
                                            {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                        
                                            <label htmlFor="bootstrap">Bootstrap </label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="bootstrap" placeholder="Project Name"/>
                                        {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                       
                                            <label htmlFor="jquery">JQuery </label>
                                            <input
                                             value={inputs.frontLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.frontLang ? 'is-invalid' : ''}`} name="frontLang" type="checkbox" id="jquery" placeholder="Project Name" /><hr/>
                                            {errors.frontLang && <div className="invalid-feedback">{errors.frontLang}</div>}
                                        </div>
                                        <label><strong>BackEnd</strong></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="php">PHP </label>
                                            <input
                                             value={inputs.backLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.backLang ? 'is-invalid' : ''}`} name="backLang" type="checkbox" id="javascript" placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}
                                       
                                            <label htmlFor="javascript">JavaScript</label>
                                            <input
                                             value={inputs.backLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.backLang ? 'is-invalid' : ''}`} name="backLang" type="checkbox" id="javascript" placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}
                                       
                                            <label htmlFor="c++">C++</label>
                                            <input
                                             value={inputs.backLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.backLang ? 'is-invalid' : ''}`} name="backLang" type="checkbox" id="c++" placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}
                                       
                                            <label htmlFor="C#">C#</label>
                                            <input
                                             value={inputs.backLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.backLang ? 'is-invalid' : ''}`} name="backLang" type="checkbox" id="php" placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}
                                       
                                            <label htmlFor="asp.net">ASP.NET </label>
                                            <input
                                             value={inputs.backLang}
                                             onChange={handleChange}
                                             className={` me-1 ${errors.backLang ? 'is-invalid' : ''}`} name="backLang" type="checkbox" id="asp.net" placeholder="Project Name" /><br/>
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Client First Name<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.firstName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} name="firstName" placeholder="Client Frist Name" required type="text" id="firstName" />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Client Last Name<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.lastName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name="lastName" placeholder="Client Last Name" required type="text" id="lastName" />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customerId">Customer ID<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.customerId}
                                             onChange={handleChange}
                                             className={`form-control ${errors.customerId ? 'is-invalid' : ''}`} name="customerId" placeholder="Customer ID" required type="number" id="customerId" />
                                            {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="clientCompany">Client Company Name</label>
                                            <input
                                             value={inputs.companyName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.companyName ? 'is-invalid' : ''}`} name="companyName" placeholder="Client Company Name" type="text" id="clientCompany" />
                                            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputDescription">Project Description<sup className=" text-danger">*</sup></label>
                                            <textarea
                                             value={inputs.projectDes}
                                             onChange={handleChange}
                                             className={`form-control ${errors.projectDes ? 'is-invalid' : ''}`} name="projectDes" placeholder='Project Description' required id="inputDescription" rows="4"></textarea>
                                            {errors.projectDes && <div className="invalid-feedback">{errors.projectDes}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Budget</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedBudget">Estimated budget<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.badget}
                                             onChange={handleChange}
                                             className={`form-control ${errors.badget ? 'is-invalid' : ''}`} name="badget" required placeholder="Estimated budget" type="number" id="inputEstimatedBudget" />
                                            {errors.badget && <div className="invalid-feedback">{errors.badget}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="advance">Total Advance <sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.advance}
                                             onChange={handleChange}
                                             className={`form-control ${errors.advance ? 'is-invalid' : ''}`} name="advance" required placeholder="Advance" type="number" id="advance"/>
                                            {errors.advance && <div className="invalid-feedback">{errors.advance}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                                            <input
                                             value={inputs.duration}
                                             onChange={handleChange}
                                             className={`form-control ${errors.duration ? 'is-invalid' : ''}`} name="duration" onClick={calDate} placeholder="Estimated duration" type="number" id="inputEstimatedDuration" />
                                            {errors.duration && <div className="invalid-feedback">{errors.duration}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedEndDate">Estimated End Date</label>
                                            <input
                                             value={inputs.endDate}
                                             onChange={handleChange}
                                             className={`form-control ${errors.endDate ? 'is-invalid' : ''}`} name="endDate" placeholder="Estimated End Date" type="number" id="inputEstimatedEndDate"/>
                                            {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="btn btn-secondary">Cancel</a>
                                <input type="submit" value="Create new Porject" className="btn btn-success float-right"/>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </AdminLayout>
    );
}

export default ProjectAdd;
