import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MailList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/compose/index`).then(function(response) {
            setData(response.data.data);
        });
    }

    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/compose/${id}`).then(function(response) {
            getDatas();
        });
    }

    return (
            <div className="card card-primary card-outline">
                <div className="card-header">
                    <h3 className="card-title">New Mail</h3>
                    <div className="card-tools">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Search Mail" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card Body */}
                <div className="card-body p-0">
                    {/* Mailbox Controls */}
                    <div className="mailbox-controls">
                        <button type="button" className="btn btn-default btn-sm checkbox-toggle">
                            <i className="far fa-square"></i>
                        </button>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                        <button type="button" className="btn btn-default btn-sm">
                            <i className="fas fa-sync-alt"></i>
                        </button>
                        <div className="float-right">
                            1-50/200
                            <div className="btn-group">
                                <button type="button" className="btn btn-default btn-sm">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button type="button" className="btn btn-default btn-sm">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mailbox Messages */}
                    <div className="table-responsive mailbox-messages">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="mailbox-name"><strong>Receiver</strong></th>
                                    <th className="mailbox-subject"><b>Subject</b></th>
                                    <th className="mailbox-message">Message</th>
                                    <th className="mailbox-attachment">Attachment</th>
                                    <th className="mailbox-date">5 mins ago</th>
                                    <th className="mailbox-date">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((d) => (
                                    <tr key={d.id}>
                                        <td>
                                            <div className="icheck-primary">
                                                <input type="checkbox" id={`check${d.id}`} />
                                                <label htmlFor={`check${d.id}`}></label>
                                            </div>
                                        </td>
                                        <td className="mailbox-name"><Link to="#">{d.sender}</Link></td>
                                        <td className="mailbox-subject"><b>{d.subject}</b></td>
                                        <td className="mailbox-message"><Link to="#">{d.bodyMassage}</Link></td>
                                        <td className="mailbox-attachment">attachment</td>
                                        <td className="mailbox-date">
                                            <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
}

export default MailList;
