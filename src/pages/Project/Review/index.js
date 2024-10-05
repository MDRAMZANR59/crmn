import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function Review() {
    return (
      <AdminLayout>
        <>
         
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Share Your Experiance</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Review</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>

    {/* Main content */}
    <section className="content">

      {/* Default box */}
      <div className="card">
        <div className="card-body row">
          <div className="col-5 text-center d-flex align-items-center justify-content-center">
            <div>
              <h2><strong>Overall Rating</strong></h2>
                <a href="#"><i className="fas fa-star"></i></a>
                <a href="#"><i className="fas fa-star"></i></a>
                <a href="#"><i className="fas fa-star"></i></a>
                <a href="#"><i className="fas fa-star"></i></a>
                <a href="#"><i className="fas fa-star"></i></a>
            </div>
          </div>
          <div className="col-7">
            <div className="form-group">
              <label htmlFor="inputMessage">Message</label>
              <textarea id="inputMessage" className="form-control" rows="4" placeholder="What Do You Think About Our Service?"  ></textarea>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="Send Feedback"/>
            </div>
          </div>
        </div>
      </div>

    </section>
    {/* /.content */}
  </div>
 
        </>
      </AdminLayout>
    );
}

export default Review;
