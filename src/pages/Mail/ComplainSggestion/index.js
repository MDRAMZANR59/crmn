import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function ComSug() {
    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Complain/Suggestion</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Inbox</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Complain Card */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Complain</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item active">
                                            <a href="#" className="nav-link">
                                                <i className="fas fa-inbox"></i> New
                                                <span className="badge bg-warning float-right">65</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="fas fa-filter"></i> Read
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-trash-alt"></i> Trash
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Suggestion Card */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Suggestion</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item active">
                                            <a href="#" className="nav-link">
                                                <i className="fas fa-inbox"></i> New
                                                <span className="badge bg-warning float-right">65</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="fas fa-filter"></i> Read
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-trash-alt"></i> Trash
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                        
                        <div className="col-md-9">
                            <div className="card card-primary card-outline">
                                <div className="card-header">
                                    <h3 className="card-title">Inbox</h3>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" placeholder="Search Mail"/>
                                            <div className="input-group-append">
                                                <div className="btn btn-primary">
                                                    <i className="fas fa-search"></i>
                                                </div>
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
                                            <button type="button" className="btn btn-default btn-sm">
                                                <i className="fas fa-reply"></i>
                                            </button>
                                            <button type="button" className="btn btn-default btn-sm">
                                                <i className="fas fa-share"></i>
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
                                                    <th className="mailbox-name"><strong>Sender</strong></th>
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
                                                            <input type="checkbox" value="" id="check1"/>
                                                            <label htmlFor="check1"></label>
                                                        </div>
                                                    </td>
                                                    <td className="mailbox-name"><a href="#">Sender</a></td>
                                                    <td className="mailbox-subject"><b>Subject</b></td>
                                                    <td className="mailbox-massage">Message</td>
                                                    <td className="mailbox-attachment"></td>
                                                    <td className="mailbox-date">5 mins ago</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>
                {/* /.content */}
            </div>
        </AdminLayout>
    );
}

export default ComSug;
