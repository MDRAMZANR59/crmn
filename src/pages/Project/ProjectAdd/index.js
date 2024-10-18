import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ProjectAdd() {
    const [errors, setErrors] = useState([]);

    const [inputs, setInputs] = useState({id:'', projectName:'', projectType:'', doHoPr:'', frontLang:'', backLang:'', firstName:'', lastName:'', customerId:'', companyName:'', projectDes:'', badget:'', advance:'', duration:'', endDate:''});
        const navigate=useNavigate();
        const {id} = useParams();
        
        function getDatas(){
            axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response) {
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
            setInputs(values => ({...values, [name]: value}));
        }
    
        const handleSubmit = async(e) => {
            e.preventDefault();
            console.log(inputs)
            
            try{
                let apiurl='';
                if(inputs.id!=''){
                    apiurl=`/projectfiles/edit/${inputs.id}`;
                }else{
                    apiurl=`/projectfiles/create`;
                }
                
                let response= await axios({
                    method: 'post',
                    responsiveTYpe: 'json',
                    url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                    data: inputs
                });
                navigate('/project/TransfaringProject')
            } 
            catch(e){
                console.log(e);
            }
        }

    const calDate= (e)=>{
        e=parseInt(e.target.value)
            let p = {
            pDate: new Date(),  // Today
            pEDate: e  // Days to add
        };
        
        let date = new Date(new Date(p.pDate).setDate(p.pDate.getDate() + p.pEDate)).toDateString();
        
        // console.log(date); // 7 days from today
    }

    return (
        <AdminLayout>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Project Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Project Add</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>

                {/* Main content */}
                <section className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">General</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="projectName">Project Name<sup className=" text-danger">*</sup></label>
                                            <input
                                            required
                                            value={inputs.projectName}
                                            onChange={handleChange}
                                            className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                                            name="projectName" type="text" id="projectName" placeholder="Project Name"/>
                                            {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label required htmlFor="projectType">Project Type<sup className=" text-danger">*</sup></label>
                                            <select
                                                value={inputs.projectType}
                                                onChange={handleChange}
                                                className={`form-control ${errors.projectType ? 'is-invalid' : ''}`}
                                                id="projectType" name="projectType">
                                                <option value="Select Type">Select Type</option>
                                                <option value="Web Application Devolopment">Web Application Devolopment</option>
                                                <option value="Pc App Devolopment">Pc App Devolopment</option>
                                                <option value="Android App Devolopment">Android App Devolopment</option>
                                            </select>
                                            {errors.projectType && <div className="invalid-feedback">{errors.projectType}</div>}
                                        </div>
                                        <label required htmlFor="doHoProvider">Domain And Hosting Provider<sup className=" text-danger">*</sup></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="codeCrafters" value="Code Crafters" className="d-inline">Code Crafters</label>
                                            <input
                                                value={inputs.doHoPr}
                                                onChange={handleChange}
                                                className={`${errors.doHoPr ? 'is-invalid' : ''}`}
                                                id="codeCrafters" 
                                                type="radio" 
                                                name="doHoPr" />
                                                {errors.doHoPr && <div className="invalid-feedback">{errors.doHoPr}</div>}
                                       
                                            <label htmlFor="client" value="Client">Client</label>
                                            <input 
                                                value={inputs.doHoPr}
                                                onChange={handleChange}
                                                className={`${errors.doHoPr ? 'is-invalid' : ''}`} 
                                                id="client" 
                                                type="radio" 
                                                name="doHoPr" /> 
                                                 {errors.doHoPr && <div className="invalid-feedback">{errors.doHoPr}</div>}
                                        </div>
                                        <h4 htmlFor="expectedLanguage">Require Language/Framework</h4>
                                        <label><strong>Select Frameworks and Libraries</strong></label><hr/>
                                        <div className="form-group">
                                            {/* JavaScript */}
                                            <label htmlFor="javascript">JavaScript</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="javascript" type="checkbox" id="javascript"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* React */}
                                            <label htmlFor="react">React</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="react" type="checkbox" id="react"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Vue */}
                                            <label htmlFor="vue">Vue</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="vue" type="checkbox" id="vue"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Angular */}
                                            <label htmlFor="angular">Angular</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="angular" type="checkbox" id="angular"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Svelte */}
                                            <label htmlFor="svelte">Svelte</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="svelte" type="checkbox" id="svelte"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* SolidJS */}
                                            <label htmlFor="solid">SolidJS</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="solid" type="checkbox" id="solid"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Ember */}
                                            <label htmlFor="ember">Ember</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="ember" type="checkbox" id="ember"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Express (Node.js) */}
                                            <label htmlFor="express">Express</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="express" type="checkbox" id="express"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Django */}
                                            <label htmlFor="django">Django</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="django" type="checkbox" id="django"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Flask */}
                                            <label htmlFor="flask">Flask</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="flask" type="checkbox" id="flask"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Ruby on Rails */}
                                            <label htmlFor="rails">Ruby on Rails</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="rails" type="checkbox" id="rails"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Spring Boot */}
                                            <label htmlFor="spring">Spring Boot</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="spring" type="checkbox" id="spring"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* React Native */}
                                            <label htmlFor="reactNative">React Native</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="reactNative" type="checkbox" id="reactNative"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Flutter */}
                                            <label htmlFor="flutter">Flutter</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="flutter" type="checkbox" id="flutter"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}

                                            {/* Ionic */}
                                            <label htmlFor="ionic">Ionic</label>
                                            <input
                                                value={inputs.frameAndLibr}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frameAndLibr ? 'is-invalid' : ''}`}
                                                name="ionic" type="checkbox" id="ionic"/>
                                            {errors.frameAndLibr && <div className="invalid-feedback">{errors.frameAndLibr}</div>}
                                        </div>
                                        <br/><label><strong>Select Front-End language</strong></label><hr/>
                                        <div className="form-group">
                                            <label htmlFor="html">HTML</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="html" 
                                                type="checkbox" 
                                                id="html" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* CSS */}
                                            <label htmlFor="css">CSS</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="css" 
                                                type="checkbox" 
                                                id="css" 
                                                placeholder="Project Name" />
                                            {errors.css && <div frontEndLan="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* JavaScript */}
                                            <label htmlFor="javascript">JavaScript</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="javascript" 
                                                type="checkbox" 
                                                id="javascript" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* TypeScript */}
                                            <label htmlFor="typescript">TypeScript</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="typescript" 
                                                type="checkbox" 
                                                id="typescript" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* React */}
                                            <label htmlFor="react">React</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="react" 
                                                type="checkbox" 
                                                id="react" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* Vue */}
                                            <label htmlFor="vue">Vue</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="vue" 
                                                type="checkbox" 
                                                id="vue" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* Angular */}
                                            <label htmlFor="angular">Angular</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="angular" 
                                                type="checkbox" 
                                                id="angular" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* Svelte */}
                                            <label htmlFor="svelte">Svelte</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="svelte" 
                                                type="checkbox" 
                                                id="svelte" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* Ember */}
                                            <label htmlFor="ember">Ember</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="ember" 
                                                type="checkbox" 
                                                id="ember" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* jQuery */}
                                            <label htmlFor="jquery">jQuery</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="jquery" 
                                                type="checkbox" 
                                                id="jquery" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* Bootstrap */}
                                            <label htmlFor="bootstrap">Bootstrap</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="bootstrap" 
                                                type="checkbox" 
                                                id="bootstrap" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}

                                            {/* Foundation */}
                                            <label htmlFor="foundation">Foundation</label>
                                            <input
                                                value={inputs.frontEndLan}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.frontEndLan ? 'is-invalid' : ''}`} 
                                                name="frontEnd" 
                                                type="checkbox" 
                                                id="foundation" 
                                                placeholder="Project Name" />
                                            {errors.frontEndLan && <div className="invalid-feedback">{errors.frontEndLan}</div>}
                                        </div>
                                        <label><strong>Select Back-End Language</strong></label><hr/>
                                        <div className="form-group" >
                                            {/* Node.js */}
                                            <label htmlFor="php">PHP</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="php" 
                                                type="checkbox" 
                                                id="php" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Python */}
                                            <label htmlFor="python">Python</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="python" 
                                                type="checkbox" 
                                                id="python" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Ruby */}
                                            <label htmlFor="ruby">Ruby</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="ruby" 
                                                type="checkbox" 
                                                id="ruby" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Java */}
                                            <label htmlFor="java">Java</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="java" 
                                                type="checkbox" 
                                                id="java" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* C# */}
                                            <label htmlFor="csharp">C#</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="csharp" 
                                                type="checkbox" 
                                                id="csharp" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Go */}
                                            <label htmlFor="go">Go</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="go" 
                                                type="checkbox" 
                                                id="go" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Node.js */}
                                            <label htmlFor="nodejs">Node.js</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="nodejs" 
                                                type="checkbox" 
                                                id="nodejs" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Scala */}
                                            <label htmlFor="scala">Scala</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="scala" 
                                                type="checkbox" 
                                                id="scala" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Elixir */}
                                            <label htmlFor="elixir">Elixir</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="elixir" 
                                                type="checkbox" 
                                                id="elixir" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}

                                            {/* Kotlin */}
                                            <label htmlFor="kotlin">Kotlin</label>
                                            <input
                                                value={inputs.backLang}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.backLang ? 'is-invalid' : ''}`} 
                                                name="kotlin" 
                                                type="checkbox" 
                                                id="kotlin" 
                                                placeholder="Project Name" />
                                            {errors.backLang && <div className="invalid-feedback">{errors.backLang}</div>}
                                        </div>
                                        <label><strong>Database</strong></label><hr/>
                                        <div className="form-group" >
                                            <label htmlFor="mysql">MySQL</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="mysql" 
                                                type="checkbox" 
                                                id="mysql" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* PostgreSQL */}
                                            <label htmlFor="postgresql">PostgreSQL</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="postgresql" 
                                                type="checkbox" 
                                                id="postgresql" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* MongoDB */}
                                            <label htmlFor="mongodb">MongoDB</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="mongodb" 
                                                type="checkbox" 
                                                id="mongodb" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* SQLite */}
                                            <label htmlFor="sqlite">SQLite</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="sqlite" 
                                                type="checkbox" 
                                                id="sqlite" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Oracle */}
                                            <label htmlFor="oracle">Oracle</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="oracle" 
                                                type="checkbox" 
                                                id="oracle" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* MariaDB */}
                                            <label htmlFor="mariadb">MariaDB</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="mariadb" 
                                                type="checkbox" 
                                                id="mariadb" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Couchbase */}
                                            <label htmlFor="couchbase">Couchbase</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="couchbase" 
                                                type="checkbox" 
                                                id="couchbase" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Firebase */}
                                            <label htmlFor="firebase">Firebase</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="firebase" 
                                                type="checkbox" 
                                                id="firebase" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Redis */}
                                            <label htmlFor="redis">Redis</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="redis" 
                                                type="checkbox" 
                                                id="redis" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}

                                            {/* Cassandra */}
                                            <label htmlFor="cassandra">Cassandra</label>
                                            <input
                                                value={inputs.database}
                                                onChange={handleChange}
                                                className={`me-1 ${errors.database ? 'is-invalid' : ''}`} 
                                                name="cassandra" 
                                                type="checkbox" 
                                                id="cassandra" 
                                                placeholder="Project Name" />
                                            {errors.database && <div className="invalid-feedback">{errors.database}</div>}
                                        </div><br/>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Client First Name<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.firstName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} name="firstName" placeholder="Client Frist Name" required type="text" id="firstName" />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Client Last Name<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.lastName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name="lastName" placeholder="Client Last Name" required type="text" id="lastName" />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="customerId">Customer ID<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.customerId}
                                             onChange={handleChange}
                                             className={`form-control ${errors.customerId ? 'is-invalid' : ''}`} name="customerId" placeholder="Customer ID" required type="number" id="customerId" />
                                            {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="clientCompany">Client Company Name</label>
                                            <input
                                             value={inputs.companyName}
                                             onChange={handleChange}
                                             className={`form-control ${errors.companyName ? 'is-invalid' : ''}`} name="companyName" placeholder="Client Company Name" type="text" id="clientCompany" />
                                            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputDescription">Project Description<sup className=" text-danger">*</sup></label>
                                            <textarea
                                             value={inputs.projectDes}
                                             onChange={handleChange}
                                             className={`form-control ${errors.projectDes ? 'is-invalid' : ''}`} name="projectDes" placeholder='Project Description' required id="inputDescription" rows="4"></textarea>
                                            {errors.projectDes && <div className="invalid-feedback">{errors.projectDes}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Budget</h3>
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedBudget">Estimated budget<sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.badget}
                                             onChange={handleChange}
                                             className={`form-control ${errors.badget ? 'is-invalid' : ''}`} name="badget" required placeholder="Estimated budget" type="number" id="inputEstimatedBudget" />
                                            {errors.badget && <div className="invalid-feedback">{errors.badget}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="advance">Total Advance <sup className=" text-danger">*</sup></label>
                                            <input
                                             value={inputs.advance}
                                             onChange={handleChange}
                                             className={`form-control ${errors.advance ? 'is-invalid' : ''}`} name="advance" required placeholder="Advance" type="number" id="advance"/>
                                            {errors.advance && <div className="invalid-feedback">{errors.advance}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                                            <input
                                             value={inputs.duration}
                                             onChange={handleChange}
                                             className={`form-control ${errors.duration ? 'is-invalid' : ''}`} name="duration" onClick={calDate} placeholder="Estimated duration" type="number" id="inputEstimatedDuration" />
                                            {errors.duration && <div className="invalid-feedback">{errors.duration}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEstimatedEndDate">Estimated End Date</label>
                                            <input
                                             value={inputs.endDate}
                                             onChange={handleChange}
                                             className={`form-control ${errors.endDate ? 'is-invalid' : ''}`} name="endDate" placeholder="Estimated End Date" type="number" id="inputEstimatedEndDate"/>
                                            {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <a href="#" className="btn btn-secondary">Cancel</a>
                                <input type="submit" value="Create new Porject" className="btn btn-success float-right"/>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </AdminLayout>
    );
}

export default ProjectAdd;
