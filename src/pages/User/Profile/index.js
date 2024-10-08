import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminLayout from '../../../layouts/AdminLayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        return true;
    };

    const handleSubmit = (e) => {
        return true;
    };
  return (
    <>
      <AdminLayout>
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>User Profile</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">User Profile</li>
                    </ol>
                  </div>
                </div>
              </div>{/* /.container-fluid */}
            </section>

            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    {/* Profile Image */}
                    <div className="card card-primary card-outline">
                      <div className="card-body box-profile">
                        <div className="text-center">
                          <img className="profile-user-img img-fluid img-circle"
                              src="../assets/dist/img/user4-128x128.jpg"
                              alt="User profile picture"/>
                        </div>

                        <h3 className="profile-username text-center">Nina Mcintire</h3>
                        <ul className="list-group list-group-unbordered mb-3">
                          <li className="list-group-item">
                            <b>Dasignation:</b> <a className="float-right">CEO</a>
                          </li>
                          <li className="list-group-item">
                            <b>Id No:</b> <a className="float-right">101</a>
                          </li>
                          <li className="list-group-item">
                            <b>Account Info</b>
                            <h6><i class="fas fa-user-circle"></i> Md Ramzan Ali</h6>
                            <h6><i class="fab fa-cc-visa"></i> 1252 2456 2145</h6>
                            <h6><i class="fas fa-map-marker-alt"></i> Khagrachari Branch</h6>
                          </li>
                        </ul>

                        <a href="#" className="btn btn-primary btn-block"><b>Edit Profile</b></a>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}

                    {/* About Me Box */}
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">About User</h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <strong><i className="fas fa-book mr-1"></i> Contect</strong>
                        <p className="text-muted">
                          <i className="fas fa-phone-alt mr-1"></i><small>+880 1559-075 906</small><br/>
                          <i className="fas fa-envelope mr-1"></i><small>info@codecrafter.com</small>
                        </p>
                        <hr/>
                        <strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>
                        <p className="text-muted">Ramgarh, Khagrachari, Chittagong, Bangladesh</p>
                      </div>
                      {/* /.card-body */}
                    </div>
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">Login History</h3>
                      </div>
                      {/* /.card-header */}
                      <div className="card-body">
                        <div>
                          <strong><i className="fas fa-book mr-1"></i> Now Loged Time</strong>
                          <p className="text-muted"> 05:30:20<br/></p>
                        </div>
                        <div>
                          <strong><i className="fas fa-book mr-1"></i> Now Loged Last Week</strong>
                          <p className="text-muted"> 05:30:20<br/></p>
                        </div>
                        <div>
                          <strong><i className="fas fa-book mr-1"></i> Loged Time This Month</strong>
                          <p className="text-muted"> 05:30:20<br/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 ">
                    <div className="card table-responsive ">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Running Project</a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                      <table className="table table-striped projects">
                                          <thead className='text-nowrap'>
                                              <tr className="text-center">
                                                  <th className="ps-1 pe-1">SL</th>
                                                  <th className="ps-1 pe-1">Team Leader</th>
                                                  <th className="ps-1 pe-1">Project Name</th>
                                                  <th className="ps-1 pe-1">Id</th>
                                                  <th className="ps-1 pe-1">Progress</th>
                                                  <th className="ps-1 pe-1">Start Date</th>
                                                  <th className="ps-1 pe-1">Estimated End Date</th>
                                              </tr>
                                          </thead>
                                          <tbody className="text-center">
                                              <tr>
                                                  <td className="p-1">01</td>
                                                  <td className="p-1">
                                                      <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                      <a href="#" className="d-block text-center" >Jons Endarson</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                                                  <td className="p-1"><a href="#" >A5X78P2</a></td>
                                                  <td className="project_progress stripped">
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                                      </div>
                                                      <small>57% Complete</small>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">02</td>
                                                  <td className="p-1">
                                                      <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                      <a href="#" className="d-block text-center" >Jons Endarson</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                                                  <td className="p-1"><a href="#" >A5X78P2</a></td>
                                                  <td className="project_progress stripped">
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                                      </div>
                                                      <small>57% Complete</small>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">03</td>
                                                  <td className="p-1">
                                                      <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                      <a href="#" className="d-block text-center" >Jons Endarson</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                                                  <td className="p-1"><a href="#" >A5X78P2</a></td>
                                                  <td className="project_progress stripped">
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                                      </div>
                                                      <small>57% Complete</small>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    <div className="card table-responsive">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Bank Transtion</a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                      <table className="table table-striped projects">
                                          <thead className='text-nowrap'>
                                              <tr className="text-center">
                                                  <th className="ps-1 pe-1">SL</th>
                                                  <th className="ps-1 pe-1">Reciver</th>
                                                  <th className="ps-1 pe-1">Account Name</th>
                                                  <th className="ps-1 pe-1">Sender</th>
                                                  <th className="ps-1 pe-1">Account Name</th>
                                                  <th className="ps-1 pe-1">Transtion Id</th>
                                                  <th className="ps-1 pe-1">Date And Time</th>
                                                  <th className="ps-1 pe-1">Document</th>
                                              </tr>
                                          </thead>
                                          <tbody className="text-center">
                                              <tr>
                                                  <td className="p-1">01</td>
                                                  <td className="p-1">123 456 789 123</td>
                                                  <td className="p-1">Md Ramzan Ali</td>
                                                  <td className="p-1">123 456 789 123</td>
                                                  <td className="p-1">Md Mukut</td>
                                                  <td className="p-1">7DFD52X48F</td>
                                                  <td className="p-1">07/10/2024 09/16/41 pm</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Money Recipt</a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">02</td>
                                                  <td className="p-1">123 456 789 123</td>
                                                  <td className="p-1">Md Ramzan Ali</td>
                                                  <td className="p-1">123 456 789 123</td>
                                                  <td className="p-1">Md Mukut</td>
                                                  <td className="p-1">7DFD52X48F</td>
                                                  <td className="p-1">07/10/2024 09/16/41 pm</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Money Recipt</a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">03</td>
                                                  <td className="p-1">123 456 789 123</td>
                                                  <td className="p-1">Md Ramzan Ali</td>
                                                  <td className="p-1">123 456 789 123</td>
                                                  <td className="p-1">Md Mukut</td>
                                                  <td className="p-1">7DFD52X48F</td>
                                                  <td className="p-1">07/10/2024 09/16/41 pm</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Money Recipt</a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    <div className="card table-responsive">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Requested Expence</a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                      <table className="table table-striped projects">
                                          <thead className='text-nowrap'>
                                              <tr className="text-center">
                                                  <th className="ps-1 pe-1">SL</th>
                                                  <th className="ps-1 pe-1">Request Date</th>
                                                  <th className="ps-1 pe-1">Routs Of Expence</th>
                                                  <th className="ps-1 pe-1">Discription</th>
                                                  <th className="ps-1 pe-1">Prove</th>
                                                  <th className="ps-1 pe-1">Cost Ammount</th>
                                                  <th className="ps-1 pe-1">Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="text-center">
                                              <tr>
                                                  <td className="p-1">001</td>
                                                  <td className="p-1">07/10/2024</td>
                                                  <td className="p-1">Entertainment</td>
                                                  <td className="p-1">Some Text</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Cash memo</a>
                                                      <a href="#" className="d-block text-center" >Confession</a>
                                                      <a href="#" className="d-block text-center" >Photo</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >$3000</a></td>
                                                  <td className="p-1">
                                                    <button className='mb-2 btn btn-submit btn-success btn-sm '><i className="fas fa-check"></i></button><br/>
                                                    <button onClick={handleShow} className='btn btn-submit btn-danger btn-sm '><i className="fas fa-times"></i></button>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">001</td>
                                                  <td className="p-1">07/10/2024</td>
                                                  <td className="p-1">Entertainment</td>
                                                  <td className="p-1">Some Text</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Cash memo</a>
                                                      <a href="#" className="d-block text-center" >Confession</a>
                                                      <a href="#" className="d-block text-center" >Photo</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >$3000</a></td>
                                                  <td className="p-1">
                                                    <button className='mb-2 btn btn-submit btn-success btn-sm '><i className="fas fa-check"></i></button><br/>
                                                    <button onClick={handleShow} className='btn btn-submit btn-danger btn-sm '><i className="fas fa-times"></i></button>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    <div className="card table-responsive">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Approved Expence</a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                      <table className="table table-striped projects">
                                          <thead className='text-nowrap'>
                                              <tr className="text-center">
                                                  <th className="ps-1 pe-1">SL</th>
                                                  <th className="ps-1 pe-1">Request Date</th>
                                                  <th className="ps-1 pe-1">Routs Of Expence</th>
                                                  <th className="ps-1 pe-1">Discription</th>
                                                  <th className="ps-1 pe-1">Prove</th>
                                                  <th className="ps-1 pe-1">Cost Ammount</th>
                                                  <th className="ps-1 pe-1">Status</th>
                                              </tr>
                                          </thead>
                                          <tbody className="text-center">
                                              <tr>
                                                  <td className="p-1">001</td>
                                                  <td className="p-1">07/10/2024</td>
                                                  <td className="p-1">Entertainment</td>
                                                  <td className="p-1">Some Text</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Cash memo</a>
                                                      <a href="#" className="d-block text-center" >Confession</a>
                                                      <a href="#" className="d-block text-center" >Photo</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >$3000</a></td>
                                                  <td className="p-1"><a href="#">Approved</a></td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">001</td>
                                                  <td className="p-1">07/10/2024</td>
                                                  <td className="p-1">Entertainment</td>
                                                  <td className="p-1">Some Text</td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >Cash memo</a>
                                                      <a href="#" className="d-block text-center" >Confession</a>
                                                      <a href="#" className="d-block text-center" >Photo</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >$3000</a></td>
                                                  <td className="p-1"> <button onClick={handleShow} className='btn btn-submit btn-sm '>Cancaled</button></td>
                                              </tr>
                                              
                                          </tbody>
                                      </table>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    <div className="card table-responsive ">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">My Project</a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                      <table className="table table-striped projects">
                                          <thead className='text-nowrap'>
                                              <tr className="text-center">
                                                  <th className="ps-1 pe-1">SL</th>
                                                  <th className="ps-1 pe-1">Team Leader</th>
                                                  <th className="ps-1 pe-1">Project Name</th>
                                                  <th className="ps-1 pe-1">Id</th>
                                                  <th className="ps-1 pe-1">Status</th>
                                                  <th className="ps-1 pe-1">Start Date</th>
                                                  <th className="ps-1 pe-1">Estimated End Date</th>
                                              </tr>
                                          </thead>
                                          <tbody className="text-center">
                                              <tr>
                                                  <td className="p-1">01</td>
                                                  <td className="p-1">
                                                      <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                      <a href="#" className="d-block text-center" >Jons Endarson</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                                                  <td className="p-1"><a href="#" >A5X78P2</a></td>
                                                  <td className="project_progress stripped">
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}></div>
                                                      </div>
                                                      <small>57% Complete</small>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="p-1">02</td>
                                                  <td className="p-1">
                                                      <img src="../../../assets/dist/img/avatar.png" className="Thumbnail img-fluid mx-auto" width="50px" /><br/>
                                                      <a href="#" className="d-block text-center" >Jons Endarson</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >Pc App Debolopment</a></td>
                                                  <td className="p-1"><a href="#" >A5X78P2</a></td>
                                                  <td className="p-1"><a href="#" >Dalivery</a></td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                                  <td className="project-state ps-0 pe-0">
                                                      <span className="badge badge text-dark">10/05/2024</span>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    <div className="card table-responsive ">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Warning <div className='badge bg-danger'>2</div></a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                      <table className="table table-striped projects">
                                          <thead className='text-nowrap'>
                                              <tr className="text-center">
                                                  <th className="ps-1 pe-1">SL</th>
                                                  <th className="ps-1 pe-1">Warning Times</th>
                                                  <th className="ps-1 pe-1">Warning Subject</th>
                                                  <th className="ps-1 pe-1">Notice</th>
                                                  <th className="ps-1 pe-1">Date</th>
                                                  <th className="ps-1 pe-1">Action</th>
                                              </tr>
                                          </thead>
                                          <tbody className="text-center">
                                              <tr>
                                                  <td className="p-1">01</td>
                                                  <td className="p-1"><strong className='badge bg-danger'>1</strong></td>
                                                  <td className="p-1"><strong className='badge bg-danger'>Work Not Submit Detarmid Time</strong></td>
                                                  <td className="p-1">
                                                      <a href="#" className="d-block text-center" >You Are Fired</a>
                                                  </td>
                                                  <td className="p-1"><a href="#" >08/10/2024</a></td>
                                                  <td className="p-1"><button className='mb-2 btn btn-submit btn-primary btn-sm '><i class="fas fa-reply"></i></button><br/>
                                                  </td>
                                                  
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    <div className="card table-responsive ">
                      <div className="card-header p-2">
                        <ul className=" ps-0 nav-pills">
                          <li className="nav-item list-unstyled"><a className="nav-link active" href="#activity" data-toggle="tab">Complain/Suggestion</a></li>
                        </ul>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div className="active tab-pane" id="activity">
                            <section className="content">
                                <div className="card">
                                  <div className="card-body p-0">
                                  <form onSubmit={handleSubmit}>
                                    <div className="mb-12 col-md-12">
                                        <label className="me-2" htmlFor="complain"><input type="radio" name="complain" id="complain" />  Complain</label>
                                        <label htmlFor="suggestion"><input type="radio" name="complain" id="suggestion" />Suggestion</label>
                                        <textarea
                                            required
                                            placeholder="Write Your Complain Or Suggestion"
                                            className={`form-control ${errors.complainSuggestion ? 'is-invalid' : ''}`}
                                            id="complainSuggestion"
                                            name="complainSuggestion"
                                            value={formData.complainSuggestion}
                                            onChange={handleChange}
                                        ></textarea>
                                        {errors.complainSuggestion && <div className="invalid-feedback">{errors.complainSuggestion}</div>}
                                        <button type="submit" className="btn btn-primary mt-3">Sent</button>
                                    </div>
                                    </form>
                                  </div>
                                {/* /.card-body */}
                                </div>
                            </section>
                          </div>
                          {/* /.tab-pane */}
                          <div className="tab-pane" id="timeline">
                            {/* The timeline */}
                            <div className="timeline timeline-inverse">
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-danger">
                                  10 Feb. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-envelope bg-primary"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 12:05</span>

                                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                  <div className="timeline-body">
                                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                    quora plaxo ideeli hulu weebly balihoo...
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-primary btn-sm">Read more</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-user bg-info"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                                  <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                                  </h3>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-comments bg-warning"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                  <div className="timeline-body">
                                    Take me to your leader!
                                    Switzerland is small and neutral!
                                    We are more like Germany, ambitious and misunderstood!
                                  </div>
                                  <div className="timeline-footer">
                                    <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              {/* timeline time label */}
                              <div className="time-label">
                                <span className="bg-success">
                                  3 Jan. 2014
                                </span>
                              </div>
                              {/* /.timeline-label */}
                              {/* timeline item */}
                              <div>
                                <i className="fas fa-camera bg-purple"></i>

                                <div className="timeline-item">
                                  <span className="time"><i className="far fa-clock"></i> 2 days ago</span>

                                  <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                  <div className="timeline-body">
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                    <img src="https://placehold.it/150x100" alt="..."/>
                                  </div>
                                </div>
                              </div>
                              {/* END timeline item */}
                              <div>
                                <i className="far fa-clock bg-gray"></i>
                              </div>
                            </div>
                          </div>
                          {/* /.tab-pane */}

                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Submit</button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/* /.tab-pane */}
                        </div>
                        {/* /.tab-content */}
                      </div>{/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>{/* /.container-fluid */}
            </section>
            </div>
          
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cancaling Reason</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={handleSubmit}>
                  <div className="col-md-12">
                      <textarea
                          required
                          cols="10"
                          rows="5"
                          placeholder="Cancaling Reason"
                          className={`form-control ${errors.cancalingReason ? 'is-invalid' : ''}`}
                          name="cancalingReason"
                          value={formData.cancalingReason}
                          onChange={handleChange}
                      >
                      {errors.cancalingReason && <div className="invalid-feedback">{errors.cancalingReason}</div>}
                    </textarea>
                  </div>
              </form>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
      </AdminLayout> 
    </>   
  )
}

export default UserProfile;