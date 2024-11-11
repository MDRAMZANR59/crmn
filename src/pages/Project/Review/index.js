import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Review() {
  const [errors, setErrors] = useState([]);
  const [inputs, setInputs] = useState({ id: '', projectName:'', massage: '', rating:'' });
  // console.log(inputs.rating);
  const [hoverRating, setHoverRating] = useState(0); // New state for hover effect
  const navigate = useNavigate();
  const { id } = useParams();

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/review/${id}`).then(function (response) {
      setInputs(response.data.data);
    });
  }

  useEffect(() => {
    if (id) {
      getDatas();
    }
  }, [id]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
//rev
  const handleRating = (rating) => {
    setInputs((values) => ({ ...values, rating }));
  };
//
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      let apiurl = '';
      if (inputs.id !== '') {
        apiurl = `/review/edit/${inputs.id}`;
      } else {
        apiurl = `/review/create`;
      }

      let response = await axios({
        method: 'post',
        responseType: 'json',
        url: `${process.env.REACT_APP_API_URL}${apiurl}`,
        data: inputs,
      });
      //modelId
      handleClose();
      getDatas();
      //for auto refresh modal after add one task
      setInputs(values => ({id:'',  projectName:projectName, massage: '', rating:'' }));
      //modelIdEnd
      navigate('/project/projectList');
    } catch (e) {
      console.log(e);
    }
  };
  //projectName//
  {/*Form List */}
     //model
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const {projectName} = useParams();//rel
    
    /* for edit */
    function getTask(data){
        setInputs(data);
        handleShow();
    }
    
    //
    const[data, setData]=useState([]);
    useEffect(() => {
        if(projectName){
            setInputs(values => ({...values, ['projectName']: projectName}));
        }
        getDatas();
    }, []);
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/review/index?projectName=${projectName}`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/review/${id}`).then(function(response){
            getDatas();
        });
    }
    {/*End List*/}
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

        {/* Main content */}
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
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`fa fa-star ${inputs.rating >= index + 1 || hoverRating >= index + 1 ? 'text-warning' : 'text-muted'}`}
                        onClick={() => handleRating(index + 1)}
                        onMouseEnter={() => setHoverRating(index + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                        style={{fontSize: '36px',cursor: 'pointer',transition: 'transform 0.2s ease, color 0.2s ease',}}
                        name='rating'
                        defaultValue={inputs.rating}
                        onChange={handleChange}
                      >
                        {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-md-6' >
              <label htmlFor="projectName" className="form-label">Project Name</label>
                            <input
                            readOnly
                            placeholder="Project Name"
                            type="text"
                            className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                            id="projectName"
                            name="projectName"
                            defaultValue={inputs.projectName}
                            onChange={handleChange}
                            />
                        {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
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
