import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function DeliveryProject() {
    const[data, setData]=useState([]);
    //command show
    const [smShow, setSmShow] = useState(false);
    const {projectId} = useParams();//recive project Id
    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState({ id:projectId, cancelReason:'', status:'' });
      //projectfiles dropdown 
    const [projectfiles, setProjectfiles] = useState(null);
    const navigate = useNavigate();
  
    function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${projectId}`).then(function(response) {
        setProjectfiles(response.data.data);
      });
    }
    useEffect(() => {
        if (projectId) {
          getDatas();
        }
      }, [projectId]);
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs); 
    
        try {
          let apiurl = `/project_review/${inputs.id}`;
          let response = await axios({
            method: 'post',
            responseType: 'json',
            url: `${process.env.REACT_APP_API_URL}${apiurl}`,
            data: inputs,
          });
           //modelId
           handleClose();
           getDatas();
          
          navigate('/project/projectList');
        } catch (e) {
          console.log(e); // Log error if the API request fails
        }
      };
    
    //Data add End to model
  
    // show data of list start
    const [show, setShow] = useState(false);
    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        //filter
        axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/index?status=dalivard`).then(function(response) {
           //filter
            setData(response.data.data);
        });
    }
   
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response){
            getDatas();
        });
    }
    //Show data of list End
    //for modal
    const handleClose = () => setShow(false);
    const handleShown = (id) =>{
        setInputs((values) => ({ ...values, ['id']: id }));
        setShow(true);
    } 

    
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Dalivard Projects</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a> Project</a></li>
                        <li className="breadcrumb-item active">Dalivard Project</li>
                    </ol>
                    </div>
                </div>
                </div>{/* /.container-fluid */}
            </section>

            {/* Main content */}
            <section className="content">

                {/* Default box */}
                <div className="card">
                <div className="card-header">
                    <strong className="card-title">Project List</strong>
                    <div className="col-md-2 float-end">
                        <select
                            className="border-0"
                            id="sortBy"
                            name="sortBy">
                            <option value="Sort By">Sort By</option>
                            <option value="Sort By">All</option>
                            <option value="New">New</option>
                            <option value="Running">Running</option>
                            <option value="Stock">Stock</option>
                            <option value="Delivary">Delivary</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped projects table-responsive">
                        <thead className='text-nowrap'>
                            <tr className="text-center">
                                <th>SL</th>
                                <th>Project Id</th>
                                <th>Project Name</th>
                                <th>Project Type</th>
                                <th>Customer Name & Phone</th>
                                <th>Recive Date</th>
                                <th>Estimated End Date</th>
                                <th>Project Leader</th>
                                <th>Dalivary Date And Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {data && data.map((d, key) =>
                            <tr key={d.id}>
                                <td>0{key+1}</td>
                                <td>00{d.id}</td>
                                <td>{d.projectName}</td>
                                <td>{d.projectType}</td>
                                <td>{d.customer?.name}{d.customer?.phone}</td>
                                <td>{d.reciveDate}</td>
                                <td>{d.eEndDate}</td>
                                <td>{d.prolider?.name}</td>
                                <td>{d.updated_at}</td>
                                <td> <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                {/* /.card-body */}
                </div>
                {/* /.card */}

            </section>
            {/* /.content */}
            </div>
            {/* /.content-wrapper */}
        </AdminLayout>
    );
}

export default DeliveryProject
;

