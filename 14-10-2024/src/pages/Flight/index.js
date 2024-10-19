import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Flight() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/flight`).then(function (response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/flight/${id}`).then(function (response) {
            getDatas();
        });
    }
    return (
        <AdminLayout>
            <div className="main-content container-fluid">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Flight</h3>
                        </div>
                        <div className="col-12 col-md-6 order-md-2 order-first">
                            <nav aria-label="breadcrumb" className='breadcrumb-header'>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Flight</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">List</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">All Flight</h4>
                                <Link to={'/flight/add'} className='btn btn-primary float-right' >Add New</Link>
                            </div>
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th>Airline_Id</th>
                                                <th>Class</th>
                                                <th>Trip_Type</th>
                                                <th>Person</th>
                                                <th>Departure_place</th>
                                                <th>Arrival_Place</th>
                                                <th>Departure_Time</th>
                                                <th>Arrival_Time</th>
                                                <th>Transit_Time</th>
                                                <th>Is_Complementary_Food</th>
                                                <th>Baggage_Allowance</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td>{d.airline_id}</td>
                                                    <td>{d.class}</td>
                                                    <td>{d.trip_type}</td>
                                                    <td>{d.person}</td>
                                                    <td>{d.departure_place}</td>
                                                    <td>{d.arrival_place}</td>
                                                    <td>{d.departure_time}</td>
                                                    <td>{d.arrival_time}</td>
                                                    <td>{d.transit_time}</td>
                                                    <td>{d.is_complementary_food}</td>
                                                    <td>{d.baggage_allowance}</td>

                                                    <td>
                                                        <Link to={`/flight/edit/${d.id}`} className='btn btn-info' >Edit</Link>
                                                        <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>
    )
}

export default Flight