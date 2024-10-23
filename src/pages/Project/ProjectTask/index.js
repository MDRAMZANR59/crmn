
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ProjectTask() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', projectId:'', employeeId:'', note:'', progress:'', task:'', assignDate:'', finishDate:'', actualDate:''});
        const navigate=useNavigate();
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/projectTask/${id}`).then(function(response) {
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
                    apiurl=`/projectTask/edit/${inputs.id}`;
                }else{
                    apiurl=`/projectTask/create`;
                }
                
                let response= await axios({
                    method: 'post',
                    responsiveTYpe: 'json',
                    url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                    data: inputs
                });
                navigate('/projectTask/projectTaskList')
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
                                <h1 className="m-0"> Add Project Task</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Project Task</h3>
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
                                                <label htmlFor="projectId" className="form-label">Project Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    readOnly
                                                    placeholder="Project Id"
                                                    type="number"
                                                    className={`form-control ${errors.projectId ? 'is-invalid' : ''}`}
                                                    id="projectId"
                                                    name="projectId"
                                                    value={inputs.projectId}
                                                    onChange={handleChange}
                                                />
                                                {errors.projectId && <div className="invalid-feedback">{errors.projectId}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="customerId" className="form-label">Employe Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Employe Id"
                                                    type="number"
                                                    className={`form-control ${errors.employeeId ? 'is-invalid' : ''}`}
                                                    id="employeeId"
                                                    name="employeeId"
                                                    value={inputs.employeeId}
                                                    onChange={handleChange}
                                                />
                                                {errors.employeeId && <div className="invalid-feedback">{errors.employeeId}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="note">Note<sup className=" text-danger">*</sup></label>
                                                <textarea
                                                name="note"
                                                value={inputs.note}
                                                onChange={handleChange}
                                                className={`form-control ${errors.note ? 'is-invalid' : ''}`} placeholder='Write Note' required id="note" rows="1"></textarea>
                                                {errors.note && <div className="invalid-feedback">{errors.note}</div>}
                                            </div>
                                           
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="progress" className="form-label">Progress<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="noteDate"
                                                    type="number"
                                                    className={`form-control ${errors.progress ? 'is-invalid' : ''}`}
                                                    id="progress"
                                                    name="progress"
                                                    value={inputs.progress}
                                                    onChange={handleChange}
                                                />
                                                {errors.progress && <div className="invalid-feedback">{errors.progress}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="task">Task<sup className=" text-danger">*</sup></label>
                                                <textarea
                                                name="task"
                                                value={inputs.task}
                                                onChange={handleChange}
                                                className={`form-control ${errors.task ? 'is-invalid' : ''}`} placeholder='Write Note' required id="task" rows="1"></textarea>
                                                {errors.task && <div className="invalid-feedback">{errors.task}</div>}
                                            </div>

                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="attachment" className="form-label">Assign Date<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Assign Date"
                                                    type="date"
                                                    className={`form-control ${errors.assignDate ? 'is-invalid' : ''}`}
                                                    id="assignDate"
                                                    name="assignDate"
                                                    value={inputs.assignDate}
                                                    onChange={handleChange}
                                                />
                                                {errors.assignDate && <div className="invalid-feedback">{errors.assignDate}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="attachment" className="form-label">Finish Date<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Finish Date"
                                                    type="date"
                                                    className={`form-control ${errors.finishDate ? 'is-invalid' : ''}`}
                                                    id="finishDate"
                                                    name="finishDate"
                                                    value={inputs.finishDate}
                                                    onChange={handleChange}
                                                />
                                                {errors.finishDate && <div className="invalid-feedback">{errors.finishDate}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="attachment" className="form-label">Actual Date<sup className=" text-danger">*</sup></label>
                                                <input
                                                    placeholder="Actual Date"
                                                    type="date"
                                                    className={`form-control ${errors.actualDate ? 'is-invalid' : ''}`}
                                                    id="actualDate"
                                                    name="actualDate"
                                                    value={inputs.actualDate}
                                                    onChange={handleChange}
                                                />
                                                {errors.actualDate && <div className="invalid-feedback">{errors.actualDate}</div>}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="progress" className="form-label">Progress</label>
                                                <input
                                                    placeholder="Progress %"
                                                    type="number"
                                                    className={`form-control ${errors.progress ? 'is-invalid' : ''}`}
                                                    id="progress"
                                                    name="progress"
                                                    value={inputs.progress}
                                                    onChange={handleChange}
                                                />
                                                {errors.progress && <div className="invalid-feedback">{errors.progress}</div>}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Save Task</button>
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

export default ProjectTask;
