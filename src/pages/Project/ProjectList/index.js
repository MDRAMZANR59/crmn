import React, { useEffect, useState } from 'react';
import axios from '../../../components/axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProjectList() {
    const [data, setData] = useState([]); 
    const [projectfiles, setProjectfiles] = useState(null); 
    const [showCommentModal, setShowCommentModal] = useState(false); 
    const [showCancelModal, setShowCancelModal] = useState(false); 
    const [selectedMessage, setSelectedMessage] = useState(''); 
    const [hoverRating, setHoverRating] = useState(0);
    
    const [inputs, setInputs] = useState({ id: '', cancelReason: '', status: '',});
    const [errors, setErrors] = useState({}); // State for errors
    const navigate = useNavigate();

    const getDatas = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/index?status=Active`).then(response => {
            setData(response.data.data);
        });
    };
  //relational
  useEffect(() => {
    getDatas()
}, []);
    
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setInputs(prevValues => ({
            ...prevValues,
            [name]: type === 'checkbox' ? 'cancel' : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formErrors = {};
        
        if (!inputs.cancelReason) {
            formErrors.cancelReason = "Cancel reason is required";
        }
        if (!inputs.status) {
            formErrors.status = "You must confirm cancellation";
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const apiurl = `/project_review/${inputs.id}`;
            await axios({
                method: 'post',
                responseType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs,
            });
            handleCloseCancelModal();
            getDatas();
            navigate('/project/projectList');
        } catch (e) {
            console.log(e);
        }
    };

    const handleShowCommentModal = (message) => {
        setSelectedMessage(message);
        setShowCommentModal(true);
    };

    const handleShowCancelModal = (d) => {
        setShowCancelModal(true);
        setInputs(prevValues => ({
            ...prevValues,
            ['id']: d.id,
        }));
    };

    const handleRating = (rating) => {
        setInputs(values => ({ ...values, rating }));
    };

    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(() => {
            getDatas();
        });
    };
    const updatestatus = (id) => {
        axios.post(`${process.env.REACT_APP_API_URL}/projectfiles/updatestatus/${id}`).then(() => {
            getDatas();
        });
    };

    const handleCloseCommentModal = () => setShowCommentModal(false);

    const handleCloseCancelModal = () => setShowCancelModal(false);

    return (
        <AdminLayout>
            <div className="content-wrapper">
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
                    </div>
                </section>

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <strong className="card-title">Project List</strong>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects table-responsive">
                                <thead className="text-nowrap">
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
                                        <th>Description</th>
                                        <th>Budget</th>
                                        <th>Receive Date</th>
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
                                    {data && data.map((d, key) => (
                                        <tr key={d.id}>
                                            <td>0{key + 1}</td>
                                            <td>00{d.id}</td>
                                            <td>{d.projectName}</td>
                                            <td>{d.projectType}</td>
                                            <td>{d.doHoPr}</td>
                                            <td>{d.frontLiAndFrame}</td>
                                            <td>{d.backLib}</td>
                                            <td>{d.frontEndLan}</td>
                                            <td>{d.backLang}</td>
                                            <td>{d.database}</td>
                                            <td>{d.customer?.name} {d.customer?.phone}</td>
                                            <td>{d.description}</td>
                                            <td>{d.estimatedBudget} $</td>
                                            <td>{d.reciveDate}</td>
                                            <td>{d.eDuration} Day</td>
                                            <td>{d.eEndDate}</td>
                                            <td>{ d.comtask.length > 0 && d.task.length > 0 ? ((100 / d.task.length) * d.comtask.length) : 0 }%</td>
                                            <td>{d.prolider?.name}</td>
                                            <td>{((100 / d.task.length) * d.comtask.length) === 100 ? 'Stock' : 'Running'}</td>
                                            <td>
                                                {[...Array(5)].map((_, index) => (
                                                    <span
                                                        key={index}
                                                        className={`fa fa-star ${d.rating >= index + 1 || hoverRating >= index + 1 ? 'text-warning' : 'text-muted'}`}
                                                        style={{
                                                            fontSize: '16px',
                                                            cursor: 'pointer',
                                                            transition: 'transform 0.2s ease, color 0.2s ease',
                                                        }}
                                                    />
                                                ))}
                                                <a onClick={() => handleShowCommentModal(d.massage)} className="me-2 btn text-primary">Comment</a>
                                            </td>
                                            <td className="project-actions text-right">
                                                <Link className="btn btn-success btn-sm" to={`/project/projectTaskList/${d.id}`}>
                                                    <i className="fas fa-tasks"></i> Task
                                                </Link>
                                                <Link className="btn btn-info btn-sm" to="/mail/mailbox/compose">
                                                    <i className="fas fa-pencil-alt"></i> Send Rush
                                                </Link>
                                                
                                                {/* <Link to={`/project/invoice/${d.id}`} className="btn btn-info btn-sm">
                                                    <i className="fas fa-receipt"></i> Invoice
                                                </Link> */}
                                               
                                                {!d.massage && (
                                                    <Link to={`/project/review/${d.id}`} className="btn btn-info btn-sm">
                                                        <i className="fas fa-comment-dots"></i> Review
                                                    </Link>
                                                )}
                                                 {((100 / d.task.length) * d.comtask.length)===100 && (
                                                <button type='button' onClick={() => updatestatus(d.id)} className='btn btn-success btn-sm'> <i class="fas fa-check"></i> Dalivard</button>
                                                 )}

                                                <Button className="btn btn-danger btn-sm" variant="primary" 
                                                    onClick={(e)=>{handleShowCancelModal(d)}}><i className="fas fa-window-close"></i> Cancel
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal for Comment */}
            <Modal size="sm" show={showCommentModal} onHide={handleCloseCommentModal} aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>{selectedMessage}</h1>
                </Modal.Body>
            </Modal>

            {/* Modal for Cancel Project */}
            <Modal show={showCancelModal} onHide={handleCloseCancelModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Reason</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="row md-12">
                            <div className="mb-6 col-md-12">
                                <textarea
                                    name="cancelReason"
                                    value={inputs.cancelReason}
                                    onChange={handleChange}
                                    className={`form-control ${errors.cancelReason ? 'is-invalid' : ''}`} 
                                    placeholder="Write Reason" 
                                    required 
                                    id="cancelReason" 
                                    rows="5"
                                />
                                {errors.cancelReason && <div className="invalid-feedback">{errors.cancelReason}</div>}
                            </div>
                        </div>
                        <input
                            type="checkbox"
                            className={`d-inline-block ${errors.status ? 'is-invalid' : ''}`}
                            id="status"
                            name="status"
                            checked={inputs.status} 
                            onChange={handleChange}
                        />
                        <span> I am sure to cancel this project</span>
                        {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                        <button type="submit" className="btn d-block btn-primary mt-3">Save Task</button>
                    </form>
                </Modal.Body>
            </Modal>
        </AdminLayout>
    );
}

export default ProjectList;

