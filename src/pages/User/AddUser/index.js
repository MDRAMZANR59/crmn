import React, { useState } from 'react'
import AdminLayout from '../../../layouts/AdminLayout';

function AddUser() {
    const [formData,setFormData]=useState([]);
    const [errors,setErrors]=useState([]);

    const handleChange= (e) =>{
        return true;
    }
    const handleSubmit= (e) =>{
        return true;
    }
  return (
    <AdminLayout>
        {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Add New User</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div class="card card-default">
                <div class="card-header">
                    <h3 class="card-title">User form</h3>

                    <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                    </button>
                    </div>
                </div>
                <div class="card-body">
                    <div className="container mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="row md-6">
                              <div className="mb-6 col-6">
                                  <label htmlFor="name" className="form-label">Frist Name</label>
                                  <input
                                      type="text"
                                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                      id="name"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                  />
                                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                              </div>
                            
                              <div className="mb-6 col-6">
                                  <label htmlFor="name" className="form-label">Last Name</label>
                                  <input
                                      type="text"
                                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                      id="name"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                  />
                                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                              </div>
                            
                            <div className="mb-6 col-6">
                                <label htmlFor="name" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="name" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Photo</label>
                                <input
                                    type="file"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Password</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Frist Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            </div>

                            
                            <button type="submit" className="btn btn-primary">Add User</button>
                        </form>
                    </div>
                </div>
                <div class="card-footer">
                    Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
                    the plugin.
                </div>
            </div>
          </div>
        </section>
    </div>
        
    </AdminLayout>       
  )
}

export default AddUser