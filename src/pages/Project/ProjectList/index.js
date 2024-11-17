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
//ratting 

function ProjectList() {
    //command show
    const[data, setData]=useState([]);
    const [smShow, setSmShow] = useState(false);
    const {projectId} = useParams();//recive project Id
    const [errors, setErrors] = useState([]);
    const [inputs, setInputs] = useState({ id:projectId, cancelReason:'', status:'' });
    //rating
    const [hoverRating, setHoverRating] = useState(0);  
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
        axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/index?status=Active`).then(function(response) {
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

    //rating
    const handleRating = (rating) => {
        setInputs((values) => ({ ...values, rating }));
      };
    
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
                                <td>{[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`fa fa-star ${inputs.rating >= index + 1 || hoverRating >= index + 1 ? 'text-warning' : 'text-muted'}`}
                                        onClick={() => handleRating(index + 1)} // Set rating on click
                                        onMouseEnter={() => setHoverRating(index + 1)} // Hover effect
                                        onMouseLeave={() => setHoverRating(0)} // Reset hover effect
                                        style={{
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease, color 0.2s ease',
                                        }}
                                        name="rating"
                                        defaultValue={inputs.rating}
                                        onChange={handleChange} // Handle change for other inputs
                                    >
                                        {/* Show validation error message if applicable */}
                                        {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
                                    </span>
                                    ))}
                                    <a onClick={() => setSmShow(true)} className="me-2 btn text-primary ">Comment</a>
                                    {/*Comment Show modal*/}
                                    <Modal
                                        size="sm"
                                        show={smShow}
                                        onHide={() => setSmShow(false)}
                                        aria-labelledby="example-modal-sizes-title-sm"
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-modal-sizes-title-sm">Comment</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className='d-block mt-2'>{d.massage}</Modal.Body>
                                    </Modal>
                                {/*End Command show modal*/}
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
                                        onClick={(e)=>handleShown(d.id)}><i class="fas fa-window-close"></i>Cancel
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Cenceling Reason</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row md-12">
                                                    <div className="mb-6 col-md-12">
                                                        <textarea
                                                        name="cancelReason"
                                                        defaultValue={inputs.cancelReason}
                                                        onChange={handleChange}
                                                        className={`form-control ${errors.cancelReason ? 'is-invalid' : ''}`} placeholder='Write Reason' required id="cancelReason" rows="5"></textarea>
                                                        {errors.cancelReason && <div className="invalid-feedback">{errors.cancelReason}</div>}
                                                    </div>
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className={`d-inlineBlock ${errors.status ? 'is-invalid' : ''}`}
                                                    id="status"
                                                    name="status"
                                                    // defaultValue={inputs.status}
                                                    value='cancel'
                                                    onChange={handleChange}
                                                    /><span htmlFor="status" > I Sure For Cancel This Project</span>
                                                    
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

