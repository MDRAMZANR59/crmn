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
                                <h1 className="m-0">Customer Note Pad</h1>
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
                                                <label htmlFor="employeeId" className="form-label">Employee Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Employee Id"
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
                                                <label htmlFor="firstMeet" className="form-label">First Meet<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    type="date"
                                                    className={`form-control ${errors.firstMeet ? 'is-invalid' : ''}`}
                                                    id="firstMeet"
                                                    name="firstMeet"
                                                    value={inputs.firstMeet}
                                                    onChange={handleChange}
                                                />
                                                {errors.firstMeet && <div className="invalid-feedback">{errors.firstMeet}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="nextMeet" className="form-label">Next Meet<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="nextMeet"
                                                    type="date"
                                                    className={`form-control ${errors.nextMeet ? 'is-invalid' : ''}`}
                                                    id="nextMeet"
                                                    name="nextMeet"
                                                    value={inputs.nextMeet}
                                                    onChange={handleChange}
                                                />
                                                {errors.nextMeet && <div className="invalid-feedback">{errors.nextMeet}</div>}
                                            </div>

                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="attachment" className="form-label">Attachment</label>
                                                <input
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
                                                <label htmlFor="meetLocation" className="form-label">Meetup Location</label>
                                                <input
                                                    placeholder="Meet Location"
                                                    type="text"
                                                    className={`form-control ${errors.meetLocation ? 'is-invalid' : ''}`}
                                                    id="meetLocation"
                                                    name="meetLocation"
                                                    value={inputs.meetLocation}
                                                    onChange={handleChange}
                                                />
                                                {errors.meetLocation && <div className="invalid-feedback">{errors.meetLocation}</div>}
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
