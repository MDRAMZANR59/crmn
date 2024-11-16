import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';
//data add
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
//model
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//
function ProjectList() {
    //data add to modal
    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState({id:'', projectId:'', employeename_Id:'', note:'', task:'', assignDate:'', finishDate:'', actualDate:'',});
    const navigate=useNavigate();
    const {id} = useParams();
    {/* Common Use*/}
    // const getDatas = () => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response) {
    //     setInputs(response.data.data);
    //     });
    // }
    {/*Common Use*/}
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
            
                await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/project/projectList')
        } 
        catch(e){
            console.log(e);
        }
    };
    //Data add End to model
  
    // show data of list start
    const [show, setShow] = useState(false);
    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/index`).then(function(response) {
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
    const handleShown = () => setShow(true);
    const[data, setData]=useState([]);
    
    return (
        <AdminLayout>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Projects</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Project</a></li>
                        <li className="breadcrumb-item active">Projects List</li>
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
                                <th>Domain & Hosting Pro</th>
                                <th>Front End Laibrary</th>
                                <th>Back End Laibrary</th>
                                <th>Front End Language</th>
                                <th>Back End End Language</th>
                                <th>Database</th>
                                <th>Customer Name & Phone</th>
                                {/* <th>Customer Id</th> */}
                                {/* <th>Phone</th> */}
                                {/* <th>Email</th> */}
                                <th>Discription</th>
                                <th>Budget</th>
                                <th>Recive Date</th>
                                <th>Project Duration</th>
                                <th>Estimated End Date</th>
                                <th>Project Progress</th>
                                <th>Project Leader</th>
                                <th>Status</th>
                                <th>Review</th>
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
                                <td>{d.doHoPr}</td>
                                <td>{d.frontLiAndFrame}</td>
                                <td>{d.backLib}</td>
                                <td>{d.frontEndLan}</td>
                                <td>{d.backLang}</td>
                                <td>{d.database}</td>
                                <td>{d.customer?.name}{d.customer?.phone}</td>
                                {/* <td>{d.customerId}</td> */}
                                {/* <td>{d.phone}</td> */}
                                {/* <td>{d.email}</td> */}
                                <td>{d.description}</td>
                                <td>{d.estimatedBudget} $</td>
                                <td>{d.reciveDate}</td>
                                <td>{d.eDuration}Day</td>
                                <td>{d.eEndDate}</td>
                                <td>{ ((100/d.task.length)*d.comtask.length)}%</td>
                                <td>{d.prolider?.name}</td>
                                <td>{((100/d.task.length)*d.comtask.length)===100 ?'Stock' : 'Running'}</td>
                                <td><i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <a href="#">Comment</a>
                                </td>
                                <td className="project-actions text-right">
                                    <Link className="btn btn-success btn-sm" to={`/project/projectTaskList/${d.id}`}>
                                        <i class="fas fa-tasks"></i>Task
                                    </Link>
                                    <Link className="btn btn-info btn-sm" to="/mail/mailbox/compose">
                                        <i className="fas fa-pencil-alt"></i>Send Rush
                                    </Link>
                                    <Link to="/project/invoice" className="btn btn-info btn-sm">
                                        <i className="fas fa-receipt"></i>Invoice
                                    </Link>

                                    {/* sent project id to review page url*/}
                                    <Link to={`/project/review/${d.id}`} className="btn btn-info btn-sm">
                                    {/* Sent Project Id End*/}
                                        <i className="fas fa-comment-dots"></i>Review
                                    </Link>
                                    
                                <>
                                    <Button className="btn btn-danger btn-sm" variant="primary" 
                                        onClick={handleShown}><i class="fas fa-window-close"></i>Cancel
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cenceling Reason
                                                <form onSubmit={handleSubmit} className='float-right ms-5'>
                                                    <div className="row-md-6 ">
                                                        <label htmlFor="projectId" className="form-label">Project Id<sup className=" text-danger">*</sup></label>
                                                        <input
                                                        readOnly
                                                        placeholder="Project Id"
                                                        type="number"
                                                        className={`form-control ${errors.projectId ? 'is-invalid' : ''}`}
                                                        id="projectId"
                                                        name="projectId"
                                                        defaultValue={inputs.projectId}
                                                        onChange={handleChange}
                                                        />
                                                        {errors.projectId && <div className="invalid-feedback">{errors.projectId}</div>}
                                                    </div>
                                                </form>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row md-12">
                                                    <div className="mb-6 col-md-12">
                                                        <label htmlFor="note">Note<sup className=" text-danger">*</sup></label>
                                                        <textarea
                                                        name="note"
                                                        defaultValue={inputs.note}
                                                        onChange={handleChange}
                                                        className={`form-control ${errors.note ? 'is-invalid' : ''}`} placeholder='Write Note' required id="note" rows="1"></textarea>
                                                        {errors.note && <div className="invalid-feedback">{errors.note}</div>}
                                                    </div>
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className={`d-inlineBlock ${errors.projectId ? 'is-invalid' : ''}`}
                                                    id="projectId"
                                                    name="projectId"
                                                    defaultValue={inputs.projectId}
                                                    onChange={handleChange}
                                                    /><span> I Sure For Cancel This Project</span>
                                                    
                                                <button type="submit" className="btn d-block btn-primary mt-3">Save Task</button>
                                            </form>
                                        </Modal.Body>
                                    </Modal>
                                </>
                                </td>
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

export default ProjectList;

