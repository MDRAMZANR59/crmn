import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';

function NewMail() {
    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>New Mail</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/">Mail</Link></li>
                                    <li className="breadcrumb-item active">New Mail</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        {/* /.col */}
                        <div className="col-md-9">
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
                                <div className="card-body p-0">
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
                                    <div className="table-responsive mailbox-messages">
                                        <table className="table table-hover table-striped">
                                        <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="mailbox-name"><strong>Reciver</strong></th>
                                                    <th className="mailbox-subject"><b>Subject</b></th>
                                                    <th className="mailbox-massage">Message</th>
                                                    <th className="mailbox-attachment"></th>
                                                    <th className="mailbox-date">5 mins ago</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="icheck-primary">
                                                            <input type="checkbox" id="check1" />
                                                            <label htmlFor="check1"></label>
                                                        </div>
                                                    </td>
                                                    <td className="mailbox-name"><Link to="#">Sender</Link></td>
                                                    <td className="mailbox-subject"><b>Subject</b></td>
                                                    <td className="mailbox-message"><Link to="#">Message</Link></td>
                                                    <td className="mailbox-attachment">File</td>
                                                    <td className="mailbox-date">5 mins ago</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default NewMail;
