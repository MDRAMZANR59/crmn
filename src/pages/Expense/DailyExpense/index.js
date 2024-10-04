import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function DailyExpense() {
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
                                <h1 className="m-0">Add New Expense</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Expense Entry form</h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row md-6">
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="fieldOfExpense" className="form-label text-black">Field Of Expense <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="fieldOfExpense"
                                                    name="fieldOfExpense"
                                                    value={formData.fieldOfExpense}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.fieldOfExpense ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select A Field</option>
                                                    <option value="2">Entertainment</option>
                                                    <option value="3">Gift To Customer</option>
                                                    <option value="5">Other</option>
                                                </select>
                                                {errors.fieldOfExpense && <div className="invalid-feedback">{errors.fieldOfExpense}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="discription" className="form-label">Discription<sup className="text-danger">*</sup></label>
                                                <textarea 
                                                    required
                                                    rows="1"
                                                    rols="10"
                                                    placeholder="Write Discription"
                                                    className={`form-control ${errors.discription ? 'is-invalid' : ''}`}
                                                    id="discription"
                                                    name="discription"
                                                    value={formData.discription}
                                                    onChange={handleChange}>
                                                  {errors.discription && <div className="invalid-feedback">{errors.discription}</div>}
                                                </textarea>
                                              </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="prove" className="form-label">Prove<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    type="file"
                                                    className={`form-control ${errors.prove ? 'is-invalid' : ''}`}
                                                    id="prove"
                                                    name="prove"
                                                    value={formData.prove}
                                                    onChange={handleChange}
                                                />
                                                {errors.prove && <div className="invalid-feedback">{errors.prove}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="proveType" className="form-label text-black">Prove Type <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="proveType"
                                                    name="proveType"
                                                    value={formData.proveType}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.proveType ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select Type</option>
                                                    <option value="2">Cash Memo<span className=" text-danger">*</span></option>
                                                    <option value="3">Confession</option>
                                                    <option value="5">Photo<span className=" text-danger">*</span></option>
                                                </select>
                                                {errors.proveType && <div className="invalid-feedback">{errors.proveType}</div>}
                                            </div>
                                            
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="customerId" className="form-label">Customer Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Customer Id"
                                                    type="text"
                                                    className={`form-control ${errors.customerId ? 'is-invalid' : ''}`}
                                                    id="customerId"
                                                    name="customerId"
                                                    value={formData.customerId}
                                                    onChange={handleChange}
                                                />
                                                {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="projectId" className="form-label">Project Id<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Project Id"
                                                    type="text"
                                                    className={`form-control ${errors.projectId ? 'is-invalid' : ''}`}
                                                    id="projectId"
                                                    name="projectId"
                                                    value={formData.projectId}
                                                    onChange={handleChange}
                                                />
                                                {errors.projectId && <div className="invalid-feedback">{errors.projectId}</div>}
                                            </div>
                                            
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Save Expense</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    </AdminLayout>       
  )
}

export default DailyExpense