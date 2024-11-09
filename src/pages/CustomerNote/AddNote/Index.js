import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function CuatomerNote() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', customerName:'', phone:'', employeeName:'', note:'', noteDate:'', nextDay:'', attachment:'', meetLocation:'',});
    const [customer, setCustomer] = useState(null);//reltabale
    const [employee, setEmployee] = useState(null);//reltabale
        const navigate=useNavigate();
        const [selectedFiles, setSelectedFiles] = useState([]); // For photo
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/customerNote/${id}`).then(function(response) {
                setInputs(response.data.data);
            });
        }
//rel
        const getRelational = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/customer/index`).then(function(response) {
                setCustomer(response.data.data);
            });
            
        };
        const getRelational1 = async () => {
            axios.get(`${process.env.REACT_APP_API_URL}/user/index?role_id=${4}`).then(function(response) {
                setEmployee(response.data.data);
            });
            
        };
//
        useEffect(() => {
            if(id){
                getDatas();
            }
            //rel
            getRelational();
            getRelational1();
            //
        }, []);
        //for photo
        const handleFileChange = (e) => {
            setSelectedFiles(e.target.files);
        }
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
             const formData = new FormData();
             // Append photos to formData
             for (let i = 0; i < selectedFiles.length; i++) {
                //  formData.append('files[]', selectedFiles[i]);
             }
             // Append other form inputs to formData
             for (const user in inputs) {
                 formData.append(user, inputs[user]);
             }
             //
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
                    // data: inputs
                //  for photo
                data:formData,
                headers:{
                    'Content-Type':'multipart/form-data'
                }
                });
                navigate('/customerNote/noteList')
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
                                                <label htmlFor="customerName" className="form-label">Customer Name<sup className=" text-danger">*</sup></label>
                                               {/* //rel */}
                                                {customer?.length > 0 && 
                                                    <select required className="form-control" id="customerName" name='customerName' defaultValue={inputs.customerName} onChange={handleChange}>
                                                        <option value="">Select Customer</option>
                                                        {customer.map((d, key) =>
                                                            <option value={d.id}>{d.name} {d.id}</option>
                                                        )}
                                                    </select>
                                                }
                                               
                                                {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="employeeName" className="form-label">Employee Name<sup className=" text-danger">*</sup></label>
                                               {/* //rel */}
                                                {employee?.length > 0 && 
                                                    <select required className="form-control" id="employeeName" name='employeeName' defaultValue={inputs.employeeName} onChange={handleChange}>
                                                        <option value="">Select Customer</option>
                                                        {employee.map((d, key) =>
                                                            <option value={d.id}>{d.name}{d.role_id}</option>
                                                        )}
                                                    </select>
                                                }
                                                {errors.employeeName && <div className="invalid-feedback">{errors.employeeName}</div>}
                                            </div>
                                            {/* //rel */}
                                            {/* <div className="mb-6 col-md-6">
                                                <label htmlFor="employeeId" className="form-label">Employee Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Employee Id"
                                                    type="number"
                                                    className={`form-control ${errors.employeeId ? 'is-invalid' : ''}`}
                                                    id="employeeId"
                                                    name="employeeId"
                                                    defaultValue={inputs.employeeId}
                                                    onChange={handleChange}
                                                />
                                                {errors.employeeId && <div className="invalid-feedback">{errors.employeeId}</div>}
                                            </div> */}

                                            
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="note">Note<sup className=" text-danger">*</sup></label>
                                                <textarea
                                                name="note"
                                                defaultValue={inputs.note}
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
                                                    defaultValue={inputs.firstMeet}
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
                                                    defaultValue={inputs.nextMeet}
                                                    onChange={handleChange}
                                                />
                                                {errors.nextMeet && <div className="invalid-feedback">{errors.nextMeet}</div>}
                                            </div>

                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="attachment" className="form-label">Attachment</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="attachment"
                                                    name="attachment"
                                                    defaultValue={inputs.attachment}
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                            
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="meetLocation" className="form-label">Meetup Location</label>
                                                <input
                                                    placeholder="Meet Location"
                                                    type="text"
                                                    className={`form-control ${errors.meetLocation ? 'is-invalid' : ''}`}
                                                    id="meetLocation"
                                                    name="meetLocation"
                                                    defaultValue={inputs.meetLocation}
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
