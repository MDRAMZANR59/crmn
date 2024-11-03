import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout'
import { Link } from 'react-router-dom';
//model
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//

function ProjectTaskList() {
     //model
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     //
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/task/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/task/${id}`).then(function(response){
            getDatas();
        });
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
                    <h1>Projects Task</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Project Task</a></li>
                        <li className="breadcrumb-item active">Projects Task List</li>
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
                    <h3 className="card-title">Project Task List</h3>

                    <div className="card-tools">
                        <Link to="/project/projectTask" className='btn btn-success'>Add Task</Link>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                        <i className="fas fa-times"></i>
                    </button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped projects table-responsive">
                        <thead className='text-nowrap'>
                            <tr className="text-center">
                                <th>SL</th>
                                <th>Project Name</th>
                                <th>Task Id</th>
                                <th>Employe Id</th>
                                <th>Note</th>
                                <th>Progress</th>
                                <th>Task</th>
                                <th>Assign Date</th>
                                <th>Finish Date</th>
                                <th>Actual Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                        {data && data.map((d, key) =>
                            <tr key={d.id} >
                                <td>{d.id}</td>
                                <td>Code Crafter</td>
                                {/* <td>{d.projectfile?.id}</td> */}
                                <td>{d.id}</td>
                                <td>{d.employeeId}</td>
                                <td>{d.note}</td>
                                <td>00%</td>
                                <td>{d.task}</td>
                                <td>{d.assignDate}</td>
                                <td>{d.finishDate}</td>
                                <td>{d.actualDate}</td>
                                <td>
                                    <Link to={`/project/edit/${d.id}`} className='btn btn-info'>Edit</Link>
                                    <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                    <>
      <Button variant="primary" onClick={handleShow}>
        Update Progress
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Progress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                placeholder="How Much Compleate"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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

export default ProjectTaskList;
