import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function MailBox() {
    const [formData, setFormData] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        return true;
    };

    const handleSubmit = (e) => {
        return true;
    };

    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2">
                                <h1 className="m-0">Mail Box</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className=' ms-1 border rounded col-sm-2 bg-secondary text- h5'>
                                <ul className='ps-0 text-center'>
                                    <li className='list-unstyled text-secondary rounded bg-primary ' ><a href="#" className='text-white text-decoration-none'>Compose</a></li><hr/>
                                    <li className='list-unstyled text-secondary rounded' ><a href="#" className='text-white text-decoration-none' >Inbox</a></li><hr/>
                                    <li className='list-unstyled text-secondary rounded' ><a href="#" className='text-white text-decoration-none' >Sent</a></li><hr/>
                                    <li className='list-unstyled text-secondary rounded' ><a href="#" className='text-white text-decoration-none' >Draft</a></li>
                                </ul>
                            </div>
                            <div className="card col-sm-9 ms-1 card-default">
                            <div className="card-header">
                                <h3 className="card-title">Inbox/Sen/Draft/...</h3>
                            </div>
                            <div>
                                Hello
                            </div>
                            <div className="card-body">
                                <div className="container mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <ul>
                                            <li className='list-unstyled' >
                                                <div className=' d-inline col-md-1'><input type="checkbox"/></div>
                                                <div className=' d-inline col-md-1'>Star</div>
                                                <div className=' d-inline col-md-3'>Subject</div>
                                                <div className=' d-inlinecol-md-6'>Hello World Hello World Hello World</div>
                                                <div className=' d-inline col-md-1'></div>
                                            </li>
                                        </ul>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </section>
               
            </div>
        </AdminLayout>
    );
}

export default MailBox;
