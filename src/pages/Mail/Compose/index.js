import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Compose() {
  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState({
    id: '',
    mailType: '',
    reciver: '',
    subject: '',
    bodyMassage: '',
    attachment: ''
  });
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDatas();
    }
  }, [id]);

  const getDatas = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/compose/${id}`).then(function(response) {
      setInputs(response.data.data);
    });
  }
  useEffect(() => {
    if(id){
        getDatas();
    }
}, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let apiurl = '';
      if (inputs.id !== '') {
        apiurl = `/compose/edit/${inputs.id}`;
      } else {
        apiurl = `/compose/create`;
      }

      await axios({
        method: 'post',
        responseType: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs
      });
      
      navigate('/compose/sent');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Compose</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Compose</li>
                </ol>
              </div>
            </div>
          </div> {/*<!-- /.container-fluid --> */}
        </section>

        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <form onSubmit={handleSubmit}>
                <div className="col-md-12">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h3 className="d-inline card-title me-5">Compose New Message</h3>
                      <label required className="me-2">Mail Type</label>
                      <div className="form-group d-inline">
                        <label htmlFor="rushMail" className="d-inline">Rush Mail</label>
                        <input
                          defaultValue={inputs.mailType}
                          onChange={handleChange}
                          className={`me-3 ${errors.rushMail ? 'is-invalid' : ''}`}
                          id="rushMail"
                          type="radio"
                          name="mailType"
                          />
                        {errors.rushMail && <div className="invalid-feedback">{errors.rushMail}</div>}
                        
                        <label htmlFor="notice" className="d-inline">Notice</label>
                        <input
                          defaultValue={inputs.mailType}
                          onChange={handleChange}
                          className={`${errors.mailType ? 'is-invalid' : ''}`}
                          id="notice"
                          type="radio"
                          name="mailType"
                           />
                        {errors.notice && <div className="invalid-feedback">{errors.notice}</div>}
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="form-group">
                        <input
                          className={`form-control ${errors.reciver ? 'is-invalid' : ''}`}
                          type="email"
                          name="reciver"
                          placeholder="To:"
                          value={inputs.reciver}
                          onChange={handleChange} />
                          {errors.reciver && <div className="invalid-feedback">{errors.reciver}</div>}
                      </div>
                      <div className="form-group">
                        <input
                          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                          type="text"
                          name="subject"
                          placeholder="Subject:"
                          value={inputs.subject}
                          onChange={handleChange} />
                          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                      </div>
                      <div className="form-group">
                        <textarea
                          id="compose-textarea"
                          name="bodyMassage"
                          className={`form-control ${errors.bodyMassage ? 'is-invalid' : ''}`}
                          style={{ height: "300px" }}
                          value={inputs.bodyMassage}
                          onChange={handleChange}>
                        </textarea>
                        {errors.bodyMassage && <div className="invalid-feedback">{errors.bodyMassage}</div>}
                      </div>
                      <div className="form-group">
                        <div className="btn btn-default btn-file">
                          <i className="fas fa-paperclip"></i> Attachment
                          <input
                          type="file" 
                          name="attachment" 
                          className={`form-control ${errors.attachment ? 'is-invalid' : ''}`}
                          value={inputs.attachment}
                          onChange={handleChange} />
                          {errors.attachment && <div className="invalid-feedback">{errors.attachment}</div>}
                        </div>
                        <p className="help-block">Max. 32MB</p>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <div className="float-right">
                        <button type="submit" className="btn btn-primary">
                          <i className="far fa-envelope"></i> Send
                        </button>
                      </div>
                      <Link to="/mail/mailBox">
                        <button type="reset" className="btn btn-default">
                          <i className="fas fa-times"></i> Discard
                        </button>
                      </Link>
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                </div>
              </form>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div> {/*<!-- /.container-fluid --> */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </AdminLayout>
  );
}

export default Compose;
