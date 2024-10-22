
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function CuatomerNote() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', customerId:'', employeeId:'', note:'', noteDate:'', nextDay:'', attachment:'', state:'',});
        const navigate=useNavigate();
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/customerNote/${id}`).then(function(response) {
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
                    apiurl=`/customerNote/edit/${inputs.id}`;
                }else{
                    apiurl=`/customerNote/create`;
                }
                
                let response= await axios({
                    method: 'post',
                    responsiveTYpe: 'json',
                    url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                    data: inputs
                });
                navigate('/customerNote/customerNoteList')
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
                                <h1 className="m-0">Add Customer Note</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Customer Note</h3>
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
                                                <label htmlFor="customerId" className="form-label">Customer Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Customer Id"
                                                    type="number"
                                                    className={`form-control ${errors.customerId ? 'is-invalid' : ''}`}
                                                    id="customerId"
                                                    name="customerId"
                                                    value={inputs.customerId}
                                                    onChange={handleChange}
                                                />
                                                {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="customerId" className="form-label">Employe Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Employe Id"
                                                    type="number"
                                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                                    id="customerId"
                                                    name="customerId"
                                                    value={inputs.customerId}
                                                    onChange={handleChange}
                                                />
                                                {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="note">Note<sup className=" text-danger">*</sup></label>
                                                <textarea
                                                name="note"
                                                value={inputs.note}
                                                onChange={handleChange}
                                                className={`form-control ${errors.note ? 'is-invalid' : ''}`} placeholder='Write Note' required id="note" rows="4"></textarea>
                                                {errors.note && <div className="invalid-feedback">{errors.note}</div>}
                                            </div>
                                           
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="noteDate" className="form-label">Note Date<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="noteDate"
                                                    type="date"
                                                    className={`form-control ${errors.noteDate ? 'is-invalid' : ''}`}
                                                    id="noteDate"
                                                    name="noteDate"
                                                    value={inputs.noteDate}
                                                    onChange={handleChange}
                                                />
                                                {errors.noteDate && <div className="invalid-feedback">{errors.noteDate}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="nextDate" className="form-label">Next Date<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="nextDate"
                                                    type="date"
                                                    className={`form-control ${errors.nextDate ? 'is-invalid' : ''}`}
                                                    id="nextDate"
                                                    name="nextDate"
                                                    value={inputs.nextDate}
                                                    onChange={handleChange}
                                                />
                                                {errors.nextDate && <div className="invalid-feedback">{errors.nextDate}</div>}
                                            </div>

                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="attachment" className="form-label">Attachment<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Attachment"
                                                    type="file"
                                                    className={`form-control ${errors.attachment ? 'is-invalid' : ''}`}
                                                    id="attachment"
                                                    name="attachment"
                                                    value={inputs.attachment}
                                                    onChange={handleChange}
                                                />
                                                {errors.attachment && <div className="invalid-feedback">{errors.attachment}</div>}
                                            </div>
                                            
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="state" className="form-label">State</label>
                                                <input
                                                    placeholder="State"
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
                                        <button type="submit" className="btn btn-primary mt-3">Add Note</button>
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

export default CuatomerNote;
