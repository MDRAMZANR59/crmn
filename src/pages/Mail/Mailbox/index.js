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
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Mail Box</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-4 bg-secondary text- h5'>
                                <ul >
                                    <li className='list-unstyle text-secondary' ><a href="#" className='bg-primary text'>Compose</a></li><hr/>
                                    <li className='list-unstyle text-secondary' ><a href="#" >Inbox</a></li><hr/>
                                    <li className='list-unstyle text-secondary' ><a href="#" >Sent</a></li><hr/>
                                    <li className='list-unstyle text-secondary' ><a href="#" >Draft</a></li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Inbox/Sen/Draft/...</h3>
                                
                            </div>
                            <div className="card-body">
                                <div className="container mt-5">
                                    <form onSubmit={handleSubmit}>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </AdminLayout>
    );
}

export default MailBox;
