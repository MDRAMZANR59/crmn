import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Review() {
  const {projectId} = useParams();//recive project Id
  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState({ id:projectId, massage: '', rating:'' });
  //employee dropdown 
    //projectfiles dropdown 
  const [projectfiles, setProjectfiles] = useState(null);
  const navigate = useNavigate();

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${projectId}`).then(function(response) {
      setProjectfiles(response.data.data);
    });
  }
  

  useEffect(() => {
    if (projectId) {
      getDatas();
    }
  }, [projectId]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs); 

    try {
      let apiurl = `/project_review/${inputs.id}`;
      let response = await axios({
        method: 'post',
        responseType: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs,
      });
      
      navigate('/project/projectList');
    } catch (e) {
      console.log(e); // Log error if the API request fails
    }
  };
  
  // Function to handle rating selection
  const handleRating = (rating) => {
    setInputs((values) => ({ ...values, rating }));
  };

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [hoverRating, setHoverRating] = useState(0);

  console.log(inputs.rating);

  return (
    <AdminLayout>
      <div className="content-wrapper">
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Share Your Experience</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Review</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="content">
          <div className="card">
            <div className="card-body row">
              {/* Star Rating Section */}
              <div className="col-md-6 text-center d-flex align-items-center justify-content-center mb-3 mb-md-0">
                <div>
                  <h2>
                    <strong>Overall Rating</strong>
                  </h2>
                  <div className="star-rating">
                    {/* Render stars dynamically */}
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`fa fa-star ${inputs.rating >= index + 1 || hoverRating >= index + 1 ? 'text-warning' : 'text-muted'}`}
                        onClick={() => handleRating(index + 1)} // Set rating on click
                        onMouseEnter={() => setHoverRating(index + 1)} // Hover effect
                        onMouseLeave={() => setHoverRating(0)} // Reset hover effect
                        style={{
                          fontSize: '36px',
                          cursor: 'pointer',
                          transition: 'transform 0.2s ease, color 0.2s ease',
                        }}
                        name="rating"
                        defaultValue={inputs.rating}
                        onChange={handleChange} // Handle change for other inputs
                      >
                        {/* Show validation error message if applicable */}
                        {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Form Section */}
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="massage">
                      Message <sup className="text-danger">*</sup>
                    </label>
                    <textarea
                      name="massage"
                      value={inputs.massage}
                      onChange={handleChange}
                      className={`form-control ${errors.massage ? 'is-invalid' : ''}`}
                      placeholder="What do you think about our service?"
                      required
                      id="massage"
                      rows="3"
                    ></textarea>
                    {/* Show validation error for massage field */}
                    {errors.massage && <div className="invalid-feedback">{errors.massage}</div>}
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary w-25 float-right" style={{ padding: '10px 20px' }}>
                      Send Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}

export default Review;
