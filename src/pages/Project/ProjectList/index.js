import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';
//model
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//
function ProjectList() {
    //model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShown = () => setShow(true);
    //
    //model comment
    const values = [true, 'lg-down'];
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
  //
    const[data, setData]=useState([]);
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
    const countProgress=async (t,d)=>{
        //return (100/t)*d;
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
                                <td>{d.estimatedBudget}</td>
                                <td>{d.reciveDate}</td>
                                <td>{d.eDuration}</td>
                                <td>{d.eEndDate}</td>
                                <td>{ ((100/d.task.length)*d.comtask.length) }%</td>
                                <td>{d.prolider?.name}</td>
                                <td>Running</td>
                                <td><i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i><br/>
                                    <a href="#">Comment
                                        {/* <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </> */}
    </a>
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
                                    <Link to="/project/review" className="btn btn-info btn-sm">
                                        <i className="fas fa-comment-dots"></i>Review
                                    </Link>
                                    
                                <>
                                    <Button className="btn btn-danger btn-sm" variant="primary" 
                                    onClick={handleShown}>
                                    <i class="fas fa-window-close"></i>Cancel
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Cenceling Reason</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <Form>
                                            <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                            >
                                            <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                        </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                        Submit
                                        </Button>
                                        </Modal.Footer>
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
