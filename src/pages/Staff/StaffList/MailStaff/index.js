import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminLayout from '../../../../layouts/AdminLayout'

function MailStaff() {
    
        return (
            <AdminLayout>
            {/* Content Wrapper. Contains page content */}
              <div className="content-wrapper">
              {/* Content Header (Page header) */}
                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1>Compose Mail</h1>
                      </div>
                      <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Mail Staff</a></li>
                          <li className="breadcrumb-item active">Mail</li>
                        </ol>
                      </div>
                    </div>
                  </div> {/*<!-- /.container-fluid */}
                </section>
    
              {/* Main content */}
                <section className="content">
                  <div className="container-fluid">
                    <div className="row">
                      
                    {/* /.col */}
                      <div className="col-md-12">
                        <div className="card card-primary card-outline">
                          <div className="card-header">
                            <h3 className="card-title">Compose Mail</h3>
                          </div>
                        {/* /.card-header */}
                          <div className="card-body">
                            <div className="form-group">
                              <input className="form-control" placeholder="To:"/>
                            </div>
                            <div className="form-group">
                              <input className="form-control" placeholder="Subject:"/>
                            </div>
                            <div className="form-group">
                              
                                <textarea id="compose-textarea" className="form-control " style={{height: "300px"}} placeholder="Write Warning Notice"></textarea>
                            </div>
                            <div className="form-group">
                              <div className="btn btn-default btn-file">
                                <i className="fas fa-paperclip"></i> Attachment
                                <input type="file" name="attachment"/>
                              </div>
                              <p className="help-block">Max. 32MB</p>
                            </div>
                          </div>
                        {/* /.card-body */}
                          <div className="card-footer">
                            <div className="float-right">
                              <button type="button" className="btn btn-default"><i className="fas fa-pencil-alt"></i> Draft</button>
                              <button type="submit" className="btn btn-primary"><i className="far fa-envelope"></i> Send</button>
                            </div>
                            <button type="reset" className="btn btn-default"><i className="fas fa-times"></i> Discard</button>
                          </div>
                        {/* /.card-footer */}
                        </div>
                      {/* /.card */}
                      </div>
                    {/* /.col */}
                    </div>
                  {/* /.row */}
                  </div> {/*<!-- /.container-fluid */}
                </section>
              {/* /.content */}
              </div>
            {/* /.content-wrapper */}
            </AdminLayout>
        );
}

export default MailStaff