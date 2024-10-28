import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ServiceAdd() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', customerId:'', employeeId:'', note:'', noteDate:'', nextDay:'', attachment:'', meetLocation:'',});
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
                                <h1 className="m-0">Add New Service</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Service</h3>
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
                                        <div className="row md-12">
                                            <div className="col-md-6">
                                                <label htmlFor="serviceName" className="form-label">Service Name<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="serviceName"
                                                    type="text"
                                                    className={`form-control ${errors.serviceName ? 'is-invalid' : ''}`}
                                                    id="serviceName"
                                                    name="serviceName"
                                                    defaultValue={inputs.serviceName}
                                                    onChange={handleChange}
                                                />
                                                {errors.serviceName && <div className="invalid-feedback">{errors.serviceName}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="exparts" className="form-label text-black">Exparts <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="exparts"
                                                    name="exparts"
                                                    defaultValue={inputs.exparts}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.exparts ? 'is-invalid' : ''}`}>
                                                    <option defaultValue="0">Select expart</option>
                                                    <option defaultValue="2">Mukut</option>
                                                    <option defaultValue="3">Mamun</option>
                                                    <option defaultValue="4">Raja</option>
                                                    <option defaultValue="5">Buppy</option>
                                                </select>
                                                {errors.exparts && <div className="invalid-feedback">{errors.exparts}</div>}
                                            </div>
                                            <div className="col-md-12">
                                            <div className="form-group">
    <label htmlFor='languages'><strong>Languages<sup className="text-danger">*</sup></strong></label><br/>
    
    <label htmlFor="javascript">JavaScript </label>
    <input 
        defaultChecked={inputs.javascript} // Updated to reflect the JavaScript checkbox
        name="javascript" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="javascript" />

    <label htmlFor="typescript">TypeScript</label>
    <input
        defaultChecked={inputs.typescript} // Updated to reflect the TypeScript checkbox
        name="typescript" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="typescript"/>

    <label htmlFor="vue">Vue.js</label>
    <input 
        defaultChecked={inputs.vue} // Updated to reflect the Vue.js checkbox
        name="vue" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="vue"/>

    <label htmlFor="angular">Angular </label>
    <input 
        defaultChecked={inputs.angular} // Updated to reflect the Angular checkbox
        name="angular" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="angular" />

    <label htmlFor="react">React </label>
    <input 
        defaultChecked={inputs.react} // Updated to reflect the React checkbox
        name="react" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="react" />

    <label htmlFor="bootstrap">Bootstrap </label>
    <input 
        defaultChecked={inputs.bootstrap} // Updated to reflect the Bootstrap checkbox
        name="bootstrap" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="bootstrap" />

    <label htmlFor="jquery">JQuery </label>
    <input 
        defaultChecked={inputs.jquery} // Updated to reflect the JQuery checkbox
        name="jquery" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="jquery" />

    <label htmlFor="php">PHP </label>
    <input 
        defaultChecked={inputs.php} // Updated to reflect the PHP checkbox
        name="php" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="php" />

    <label htmlFor="c++">C++</label>
    <input 
        defaultChecked={inputs.cplusplus} // Updated to reflect the C++ checkbox
        name="cplusplus" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="c++" />

    <label htmlFor="csharp">C#</label>
    <input 
        defaultChecked={inputs.csharp} // Updated to reflect the C# checkbox
        name="csharp" 
        onChange={handleChange} 
        type="checkbox" 
        className={`me-1 ${errors.customerId ? 'is-invalid' : ''}`}
        id="csharp" />


                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Add Service</button>
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

export default ServiceAdd;
