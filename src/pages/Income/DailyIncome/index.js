import React, { useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';

function DailyIncome() {
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
                                <h1 className="m-0">Add New Income</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="card card-default">
                            <div className="card-header">
                                <h3 className="card-title">Income Input form</h3>
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
                                                <label htmlFor="incomeRout" className="form-label text-black">Rout Of Income <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="incomeRout"
                                                    name="incomeRout"
                                                    value={formData.incomeRout}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.incomeRout ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select income Rout</option>
                                                    <option value="2">Web Application Devolopment</option>
                                                    <option value="3">Android App Devolopment</option>
                                                    <option value="4">Pc App Devolopment</option>
                                                    <option value="5">Other</option>
                                                </select>
                                                {errors.incomeRout && <div className="invalid-feedback">{errors.incomeRout}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="customerName" className="form-label">Customer Name<sup className="text-danger">*</sup></label>
                                                <input
                                                    readOnly
                                                    placeholder="Customer Name"
                                                    className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                                                    id="customerName"
                                                    name="customerName"
                                                    value={formData.customerName}
                                                    onChange={handleChange}
                                                />
                                                {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
                                            </div>

                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="projectId" className="form-label">Project Id<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Customer Name"
                                                    type="text"
                                                    className={`form-control ${errors.projectId ? 'is-invalid' : ''}`}
                                                    id="projectId"
                                                    name="projectId"
                                                    value={formData.projectId}
                                                    onChange={handleChange}
                                                />
                                                {errors.projectId && <div className="invalid-feedback">{errors.projectId}</div>}
                                            </div>
                                            
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="projectName" className="form-label">Project Name<sup className="text-danger">*</sup></label>
                                                <input
                                                    readOnly
                                                    placeholder="Project Name"
                                                    className={`form-control ${errors.projectId ? 'is-invalid' : ''}`}
                                                    id="customerName"
                                                    name="customerName"
                                                    value={formData.customerName}
                                                    onChange={handleChange}
                                                />
                                                {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
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
                                                <label htmlFor="due" className="form-label">Due<sup className="text-danger">*</sup></label>
                                                <input
                                                    readOnly
                                                    placeholder="Due"
                                                    className={`form-control ${errors.due ? 'is-invalid' : ''}`}
                                                    id="due"
                                                    name="due"
                                                    value={formData.due}
                                                    onChange={handleChange}
                                                />
                                                {errors.due && <div className="invalid-feedback">{errors.due}</div>}
                                            </div>
                                            
                                             <div className="mb-6 col-md-6">
                                                <label htmlFor="phone" className="form-label">Phone<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Phone"
                                                    type="number"
                                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="payRout" className="form-label text-black">Rout Of Payment <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="payRout"
                                                    name="payRout"
                                                    value={formData.payRout}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.payRout ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select Payment Rout</option>
                                                    <option value="2">First Payment</option>
                                                    <option value="4">Last Payment</option>
                                                </select>
                                                {errors.payRout && <div className="invalid-feedback">{errors.payRout}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="payment" className="form-label">Payment<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Payment"
                                                    type="number"
                                                    className={`form-control ${errors.payment ? 'is-invalid' : ''}`}
                                                    id="payment"
                                                    name="payment"
                                                    value={formData.payment}
                                                    onChange={handleChange}
                                                />
                                                {errors.payment && <div className="invalid-feedback">{errors.payment}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="payMethod" className="form-label text-black">Payment Method <span className=" text-danger">*</span></label>
                                                <select
                                                    required
                                                    id="payMethod"
                                                    name="payMethod"
                                                    value={formData.payMethod}
                                                    onChange={handleChange}
                                                    className={`form-control ${errors.payMethod ? 'is-invalid' : ''}`}>
                                                    <option value="0">Select Method</option>
                                                    <option value="2">Cash</option>
                                                    <option value="4">Bank</option>
                                                </select>
                                                {errors.payMethod && <div className="invalid-feedback">{errors.payMethod}</div>}
                                            </div>
                                            <div className="mb-6 col-md-6">
                                                <label htmlFor="transtionId" className="form-label">Transtion Id<sup className="text-danger">*</sup></label>
                                                <input
                                                    required
                                                    placeholder="Transtion Id"
                                                    className={`form-control ${errors.transtionId ? 'is-invalid' : ''}`}
                                                    id="transtionId"
                                                    name="transtionId"
                                                    value={formData.transtionId}
                                                    onChange={handleChange}
                                                />
                                                {errors.transtionId && <div className="invalid-feedback">{errors.transtionId}</div>}
                                            </div>

                                        </div>
                                        <button type="submit" className="btn btn-primary mt-3">Save Payment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

export default DailyIncome;
