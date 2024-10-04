import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout'

function CapitalOut() {
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
                                <h1 className="m-0">Add New Cash Transfer</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Cash Transfer form</h3>
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
                                                <label htmlFor="fieldOfExpense" className="form-label text-black">Transfer From <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="fieldOfExpense"
                                                    name="fieldOfExpense"
                                                    value={formData.fieldOfExpense}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.fieldOfExpense ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select Method</option>
                                                    <option value="2">Online Banking</option>
                                                    <option value="5">Cash</option>
                                                </select>
                                                {errors.fieldOfExpense && <div className="invalid-feedback">{errors.fieldOfExpense}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="fieldOfExpense" className="form-label text-black">Reciver<span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="fieldOfExpense"
                                                    name="fieldOfExpense"
                                                    value={formData.fieldOfExpense}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.fieldOfExpense ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select Method</option>
                                                    <option value="2">Online Banking</option>
                                                    <option value="5">Cash</option>
                                                </select>
                                                {errors.fieldOfExpense && <div className="invalid-feedback">{errors.fieldOfExpense}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="transtionId" className="form-label">Transion ID<sup className=" text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Transtion Id"
                                                    type="text"
                                                    className={`form-control ${errors.transtionId ? 'is-invalid' : ''}`}
                                                    id="transtionId"
                                                    name="transtionId"
                                                    value={formData.transtionId}
                                                    onChange={handleChange}
                                                />
                                                {errors.transtionId && <div className="invalid-feedback">{errors.transtionId}</div>}
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
                                                    <option value="5">Office Order<span className=" text-danger">*</span></option>
                                                </select>
                                                {errors.proveType && <div className="invalid-feedback">{errors.proveType}</div>}
                                            </div>
                                            
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="officeOrder" className="form-label">Office Order<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    type="file"
                                                    className={`form-control ${errors.officeOrder ? 'is-invalid' : ''}`}
                                                    id="officeOrder"
                                                    name="officeOrder"
                                                    value={formData.officeOrder}
                                                    onChange={handleChange}
                                                />
                                                {errors.officeOrder && <div className="invalid-feedback">{errors.officeOrder}</div>}
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

export default CapitalOut