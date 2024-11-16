import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

function ProjectAdd() {
    //for date    
    const [inputs, setInputs] = useState({id:'', projectName:'', projectType:'', doHoPr:'', frontLiAndFrame:'', backLib:'', frontEndLan:'', backLang:'',database:'',customerNameP:'', description:'', estimatedBudget:'', reciveDate:'', eDuration:'', eEndDate:'',projectLeader:'', note:'', });
    const [errors, setErrors] = useState([]);
    const [prolider, setProlider] = useState(null);//reltabale  
    const [customer, setCustomer] = useState(null);//reltabale  
    const navigate=useNavigate();
    const {id} = useParams();
        
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/projectfiles/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    //rel
    const getRelational = async () => {
        axios.get(`${process.env.REACT_APP_API_URL}/user/index?roles=1,2,3`).then(function(response) {
            setProlider(response.data.data);
        });
        
    };
    const getRelationalc = async () => {
        axios.get(`${process.env.REACT_APP_API_URL}/customer/index`).then(function(response) {
            setCustomer(response.data.data);
        });
        
    };
    useEffect(() => {
        if(id){
            getDatas();
        }
    //rel
        getRelational();
        getRelationalc();
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
            navigate('/project/projectList')
        } 
        catch(e){
            console.log(e);
        }
    }
    const calDate = (e) => {
        const daysToAdd = parseInt(e.target.value, 10);
        if (isNaN(daysToAdd)) return;
    
        const currentDate = new Date(); 
        const futureDate = new Date(currentDate.setDate(currentDate.getDate() + daysToAdd));
        const formattedDate = futureDate.toISOString().split('T')[0];
        setInputs({
            ...inputs,
            eEndDate: formattedDate
        });
    
        console.log(formattedDate);
        };
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
                                    <li className="breadcrumb-item"><a href="#">Project</a></li>
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
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="projectName">Project Name<sup className=" text-danger">*</sup></label>
                                            <input
                                            required
                                            defaultValue={inputs.projectName}
                                            onChange={handleChange}
                                            className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                                            name="projectName" type="text" id="projectName" placeholder="Project Name"/>
                                            {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label required htmlFor="projectType">Project Type<sup className=" text-danger">*</sup></label>
                                            <select
                                                defaultValue={inputs.projectType}
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
                                        <label htmlFor="doHoProvider">Domain And Hosting Provider<sup className=" text-danger">*</sup></label><br/>
                                        <div className="form-group">
                                            <label htmlFor="codeCrafters" className="d-inline">Code Crafters</label>
                                            <input
                                                value="Code Crafters"
                                                onChange={handleChange}
                                                className={`${errors.CodeCrafters ? 'is-invalid' : ''}`}
                                                id="codeCrafters" 
                                                type="radio" 
                                                name="doHoPr"
                                                checked={inputs.doHoPr === "Code Crafters"}
                                                />
                                                {errors.CodeCrafters && <div className="invalid-feedback">{errors.CodeCrafters}</div>}
                                       
                                            <label htmlFor="client" >Client</label>
                                            <input 
                                                value="Client"
                                                onChange={handleChange}
                                                className={`${errors.client ? 'is-invalid' : ''}`}
                                                id="client" 
                                                type="radio" 
                                                name="doHoPr"
                                                checked={inputs.doHoPr === "Client"} /> 
                                                {errors.client && <div className="invalid-feedback">{errors.client}</div>}
                                        </div>

                                        <h4 htmlFor="">Require Language/Framework</h4>
                                        <label><strong>Select Front-End Libraries & Framework</strong></label><hr/>
                                        <div className="form-group">
                                            {/* React */}
                                            <label htmlFor="react">React</label>
                                            <input
                                                value="React"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.react ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="react"
                                                checked={inputs.frontLiAndFrame === "React"}
                                            />
                                            {errors.react && <div className="invalid-feedback">{errors.react}</div>}

                                            <label htmlFor="vue">Vue</label>
                                            <input
                                                value="Vue"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.vue ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="vue"
                                                checked={inputs.frontLiAndFrame === "Vue"}
                                            />
                                            {errors.vue && <div className="invalid-feedback">{errors.vue}</div>}

                                            <label htmlFor="angular">Angular</label>
                                            <input
                                                value="Angular"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.angular ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="angular"
                                                checked={inputs.frontLiAndFrame === "Angular"}
                                            />
                                            {errors.angular && <div className="invalid-feedback">{errors.angular}</div>}

                                            <label htmlFor="svelte">Svelte</label>
                                            <input
                                                value="Svelte"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.svelte ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="svelte"
                                                checked={inputs.frontLiAndFrame === "Svelte"}
                                            />
                                            {errors.svelte && <div className="invalid-feedback">{errors.svelte}</div>}

                                            <label htmlFor="solid">SolidJS</label>
                                            <input
                                                value="SolidJS"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.solid ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="solid"
                                                checked={inputs.frontLiAndFrame === "SolidJS"}
                                            />
                                            {errors.solid && <div className="invalid-feedback">{errors.solid}</div>}

                                            <label htmlFor="ember">Ember</label>
                                            <input
                                                value="Ember"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.ember ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="ember"
                                                checked={inputs.frontLiAndFrame === "Ember"}
                                            />
                                            {errors.ember && <div className="invalid-feedback">{errors.ember}</div>}

                                            <label htmlFor="nuxt">Nuxt.js</label>
                                            <input
                                                value="Nuxt.js"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.nuxt ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="nuxt"
                                                checked={inputs.frontLiAndFrame === "Nuxt.js"}
                                            />
                                            {errors.nuxt && <div className="invalid-feedback">{errors.nuxt}</div>}

                                            <label htmlFor="jquery">jQuery</label>
                                            <input
                                                value="jQuery"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.jquery ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="jquery"
                                                checked={inputs.frontLiAndFrame === "jQuery"}
                                            />
                                            {errors.jquery && <div className="invalid-feedback">{errors.jquery}</div>}

                                            <label htmlFor="bootstrap">Bootstrap</label>
                                            <input
                                                value="Bootstrap"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.bootstrap ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="bootstrap"
                                                checked={inputs.frontLiAndFrame === "Bootstrap"}
                                            />
                                            {errors.bootstrap && <div className="invalid-feedback">{errors.bootstrap}</div>}

                                            <label htmlFor="tailwind">Tailwind CSS</label>
                                            <input
                                                value="Tailwind CSS"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.tailwind ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="tailwind"
                                                checked={inputs.frontLiAndFrame === "Tailwind CSS"}
                                            />
                                            {errors.tailwind && <div className="invalid-feedback">{errors.tailwind}</div>}

                                            <label htmlFor="foundation">Foundation</label>
                                            <input
                                                value="Foundation"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.foundation ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="foundation"
                                                checked={inputs.frontLiAndFrame === "Foundation"}
                                            />
                                            {errors.foundation && <div className="invalid-feedback">{errors.foundation}</div>}

                                            <label htmlFor="alpine">Alpine.js</label>
                                            <input
                                                value="Alpine.js"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.alpine ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="alpine"
                                                checked={inputs.frontLiAndFrame === "Alpine.js"}
                                            />
                                            {errors.alpine && <div className="invalid-feedback">{errors.alpine}</div>}

                                            <label htmlFor="riot">Riot.js</label>
                                            <input
                                                value="Riot.js"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.riot ? 'is-invalid' : ''}`}
                                                name="frontLiAndFrame"
                                                type="radio"
                                                id="riot"
                                                checked={inputs.frontLiAndFrame === "Riot.js"}
                                            />
                                            {errors.riot && <div className="invalid-feedback">{errors.riot}</div>}
                                        </div>
                                        <label><strong>Select Back-End Libraries</strong></label><hr/>
                                        <div className="form-group">
                                        <label htmlFor="express">Express</label>
                                            <input
                                                value="Express"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.express ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="express"
                                                checked={inputs.backLib === "Express"}
                                            />
                                            {errors.express && <div className="invalid-feedback">{errors.express}</div>}

                                            <label htmlFor="django">Django</label>
                                            <input
                                                value="Django"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.django ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="django"
                                                checked={inputs.backLib === "Django"}
                                            />
                                            {errors.django && <div className="invalid-feedback">{errors.django}</div>}

                                            <label htmlFor="flask">Flask</label>
                                            <input
                                                value="Flask"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.flask ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="flask"
                                                checked={inputs.backLib === "Flask"}
                                            />
                                            {errors.flask && <div className="invalid-feedback">{errors.flask}</div>}

                                            <label htmlFor="spring">Spring</label>
                                            <input
                                                value="Spring"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.spring ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="spring"
                                                checked={inputs.backLib === "Spring"}
                                            />
                                            {errors.spring && <div className="invalid-feedback">{errors.spring}</div>}

                                            <label htmlFor="rubyOnRails">Ruby on Rails</label>
                                            <input
                                                value="Ruby on Rails"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.rubyOnRails ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="rubyOnRails"
                                                checked={inputs.backLib === "Ruby on Rails"}
                                            />
                                            {errors.rubyOnRails && <div className="invalid-feedback">{errors.rubyOnRails}</div>}

                                            <label htmlFor="laravel">Laravel</label>
                                            <input
                                                value="Laravel"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.laravel ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="laravel"
                                                checked={inputs.backLib === "Laravel"}
                                            />
                                            {errors.laravel && <div className="invalid-feedback">{errors.laravel}</div>}

                                            <label htmlFor="aspnet">ASP.NET</label>
                                            <input
                                                value="ASP.NET"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.aspnet ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="aspnet"
                                                checked={inputs.backLib === "ASP.NET"}
                                            />
                                            {errors.aspnet && <div className="invalid-feedback">{errors.aspnet}</div>}

                                            <label htmlFor="node">Node.js</label>
                                            <input
                                                value="Node.js"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.node ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="node"
                                                checked={inputs.backLib === "Node.js"}
                                            />
                                            {errors.node && <div className="invalid-feedback">{errors.node}</div>}

                                            <label htmlFor="phoenix">Phoenix</label>
                                            <input
                                                value="Phoenix"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.phoenix ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="phoenix"
                                                checked={inputs.backLib === "Phoenix"}
                                            />
                                            {errors.phoenix && <div className="invalid-feedback">{errors.phoenix}</div>}

                                            <label htmlFor="gin">Gin</label>
                                            <input
                                                value="Gin"
                                                onChange={handleChange}
                                                className={`me-1 ${errors.gin ? 'is-invalid' : ''}`}
                                                name="backLib"
                                                type="radio"
                                                id="gin"
                                                checked={inputs.backLib === "Gin"}
                                            />
                                            {errors.gin && <div className="invalid-feedback">{errors.gin}</div>}
                                        </div>

                                        <br/><label><strong>Select Front-End language</strong></label><hr/>
                                        <div className="form-group">
                                            {/* JavaScript */}
                                            <label htmlFor="javascript">JavaScript</label>
                                                <input
                                                    value="JavaScript"
                                                    onChange={handleChange}
                                                    className={`me-1 ${errors.javascript ? 'is-invalid' : ''}`} 
                                                    name="frontEndLan" 
                                                    type="radio" 
                                                    id="javascript" 
                                                    checked={inputs.frontEndLan === "JavaScript"} // Check if this is the selected value
                                                />
                                                {errors.javascript && <div className="invalid-feedback">{errors.javascript}</div>}

                                                <label htmlFor="typescript">TypeScript</label>
                                                <input
                                                    value="TypeScript"
                                                    onChange={handleChange}
                                                    className={`me-1 ${errors.typescript ? 'is-invalid' : ''}`} 
                                                    name="frontEndLan" 
                                                    type="radio" 
                                                    id="typescript" 
                                                    checked={inputs.frontEndLan === "TypeScript"} // Check if this is the selected value
                                                />
                                                    {errors.typescript && <div className="invalid-feedback">{errors.typescript}</div>}
                                                </div>
                                                <label><strong>Select Back-End Language</strong></label><hr/>
                                                <div className="form-group">
                                                    <label htmlFor="php">PHP</label>
                                                    <input
                                                        value="PHP"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.php ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="php"
                                                        checked={inputs.backLang === "PHP"} // Check if this is the selected value
                                                    />
                                                    {errors.php && <div className="invalid-feedback">{errors.php}</div>}

                                                    <label htmlFor="python">Python</label>
                                                    <input
                                                        value="Python"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.python ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="python"
                                                        checked={inputs.backLang === "Python"} // Check if this is the selected value
                                                    />
                                                    {errors.python && <div className="invalid-feedback">{errors.python}</div>}

                                                    <label htmlFor="ruby">Ruby</label>
                                                    <input
                                                        value="Ruby"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.ruby ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="ruby"
                                                        checked={inputs.backLang === "Ruby"} // Check if this is the selected value
                                                    />
                                                    {errors.ruby && <div className="invalid-feedback">{errors.ruby}</div>}

                                                    <label htmlFor="java">Java</label>
                                                    <input
                                                        value="Java"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.java ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="java"
                                                        checked={inputs.backLang === "Java"} // Check if this is the selected value
                                                    />
                                                    {errors.java && <div className="invalid-feedback">{errors.java}</div>}

                                                    <label htmlFor="csharp">C#</label>
                                                    <input
                                                        value="C#"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.csharp ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="csharp"
                                                        checked={inputs.backLang === "C#"} // Check if this is the selected value
                                                    />
                                                    {errors.csharp && <div className="invalid-feedback">{errors.csharp}</div>}

                                                    <label htmlFor="go">Go</label>
                                                    <input
                                                        value="Go"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.go ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="go"
                                                        checked={inputs.backLang === "Go"} // Check if this is the selected value
                                                    />
                                                    {errors.go && <div className="invalid-feedback">{errors.go}</div>}

                                                    <label htmlFor="nodejs">Node.js</label>
                                                    <input
                                                        value="Node.js"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.nodejs ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="nodejs"
                                                        checked={inputs.backLang === "Node.js"} // Check if this is the selected value
                                                    />
                                                    {errors.nodejs && <div className="invalid-feedback">{errors.nodejs}</div>}

                                                    <label htmlFor="scala">Scala</label>
                                                    <input
                                                        value="Scala"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.scala ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="scala"
                                                        checked={inputs.backLang === "Scala"} // Check if this is the selected value
                                                    />
                                                    {errors.scala && <div className="invalid-feedback">{errors.scala}</div>}

                                                    <label htmlFor="elixir">Elixir</label>
                                                    <input
                                                        value="Elixir"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.elixir ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="elixir"
                                                        checked={inputs.backLang === "Elixir"} // Check if this is the selected value
                                                    />
                                                    {errors.elixir && <div className="invalid-feedback">{errors.elixir}</div>}

                                                    <label htmlFor="kotlin">Kotlin</label>
                                                    <input
                                                        value="Kotlin"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.kotlin ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="kotlin"
                                                        checked={inputs.backLang === "Kotlin"} // Check if this is the selected value
                                                    />
                                                    {errors.kotlin && <div className="invalid-feedback">{errors.kotlin}</div>}

                                                    <label htmlFor="dotnet">.NET</label>
                                                    <input
                                                        value=".NET"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.dotnet ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="dotnet"
                                                        checked={inputs.backLang === ".NET"} // Check if this is the selected value
                                                    />
                                                    {errors.dotnet && <div className="invalid-feedback">{errors.dotnet}</div>}

                                                    <label htmlFor="spring">Spring</label>
                                                    <input
                                                        value="Spring"
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.spring ? 'is-invalid' : ''}`}
                                                        name="backLang" 
                                                        type="radio" 
                                                        id="spring"
                                                        checked={inputs.backLang === "Spring"} // Check if this is the selected value
                                                    />
                                                    {errors.spring && <div className="invalid-feedback">{errors.spring}</div>}
                                                </div>
                                         
                                                <label><strong>Database</strong></label><hr/>
                                                <div className="form-group" >
                                                   {/* MySQL */}
                                                    <label htmlFor="mysql">MySQL</label>
                                                    <input
                                                        value="mysql" // Set the value for MySQL
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.mysql ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="mysql" 
                                                        checked={inputs.database === "mysql"} // Check if this is the selected value
                                                    />
                                                    {errors.mysql && <div className="invalid-feedback">{errors.mysql}</div>}

                                                    {/* PostgreSQL */}
                                                    <label htmlFor="postgresql">PostgreSQL</label>
                                                    <input
                                                        value="postgresql" // Set the value for PostgreSQL
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.postgresql ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="postgresql" 
                                                        checked={inputs.database === "postgresql"} // Check if this is the selected value
                                                    />
                                                    {errors.postgresql && <div className="invalid-feedback">{errors.postgresql}</div>}

                                                    {/* MongoDB */}
                                                    <label htmlFor="mongodb">MongoDB</label>
                                                    <input
                                                        value="mongodb" // Set the value for MongoDB
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.mongodb ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="mongodb" 
                                                        checked={inputs.database === "mongodb"} // Check if this is the selected value
                                                    />
                                                    {errors.mongodb && <div className="invalid-feedback">{errors.mongodb}</div>}

                                                    {/* SQLite */}
                                                    <label htmlFor="sqlite">SQLite</label>
                                                    <input
                                                        value="sqlite" // Set the value for SQLite
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.sqlite ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="sqlite" 
                                                        checked={inputs.database === "sqlite"} // Check if this is the selected value
                                                    />
                                                    {errors.sqlite && <div className="invalid-feedback">{errors.sqlite}</div>}

                                                    {/* Oracle */}
                                                    <label htmlFor="oracle">Oracle</label>
                                                    <input
                                                        value="oracle" // Set the value for Oracle
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.oracle ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="oracle" 
                                                        checked={inputs.database === "oracle"} // Check if this is the selected value
                                                    />
                                                    {errors.oracle && <div className="invalid-feedback">{errors.oracle}</div>}

                                                    {/* MariaDB */}
                                                    <label htmlFor="mariadb">MariaDB</label>
                                                    <input
                                                        value="mariadb" // Set the value for MariaDB
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.mariadb ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="mariadb" 
                                                        checked={inputs.database === "mariadb"} // Check if this is the selected value
                                                    />
                                                    {errors.mariadb && <div className="invalid-feedback">{errors.mariadb}</div>}

                                                    {/* Couchbase */}
                                                    <label htmlFor="couchbase">Couchbase</label>
                                                    <input
                                                        value="couchbase" // Set the value for Couchbase
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.couchbase ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="couchbase" 
                                                        checked={inputs.database === "couchbase"} // Check if this is the selected value
                                                    />
                                                    {errors.couchbase && <div className="invalid-feedback">{errors.couchbase}</div>}

                                                    {/* Firebase */}
                                                    <label htmlFor="firebase">Firebase</label>
                                                    <input
                                                        value="firebase" // Set the value for Firebase
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.firebase ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="firebase" 
                                                        checked={inputs.database === "firebase"} // Check if this is the selected value
                                                    />
                                                    {errors.firebase && <div className="invalid-feedback">{errors.firebase}</div>}

                                                    {/* Redis */}
                                                    <label htmlFor="redis">Redis</label>
                                                    <input
                                                        value="redis" // Set the value for Redis
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.redis ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="redis" 
                                                        checked={inputs.database === "redis"} // Check if this is the selected value
                                                    />
                                                    {errors.redis && <div className="invalid-feedback">{errors.redis}</div>}

                                                    {/* Cassandra */}
                                                    <label htmlFor="cassandra">Cassandra</label>
                                                    <input
                                                        value="cassandra" // Set the value for Cassandra
                                                        onChange={handleChange}
                                                        className={`me-1 ${errors.cassandra ? 'is-invalid' : ''}`} 
                                                        name="database" 
                                                        type="radio" 
                                                        id="cassandra" 
                                                        checked={inputs.database === "cassandra"} // Check if this is the selected value
                                                    />
                                                    {errors.cassandra && <div className="invalid-feedback">{errors.cassandra}</div>}

                                                </div><br/>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="customerNameP">Customer Name<sup className=" text-danger">*</sup></label>
                                                    {customer?.length > 0 && 
                                                        <select required className="form-control" id="customerNameP" name='customerNameP' defaultValue={inputs.customerNameP} onChange={handleChange}>
                                                            <option value="">Select Customer</option>
                                                            {customer.map((d, key) =>
                                                                <option value={d.id}>{d.name} {d.phone}</option>
                                                            )}
                                                        </select>
                                                        }
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="description">Project Description</label>
                                                    <textarea
                                                        name="description"
                                                        defaultValue={inputs.description}
                                                        onChange={handleChange}
                                                        className={`form-control ${errors.description ? 'is-invalid' : ''}`} 
                                                        placeholder='Project Description' 
                                                        id="description" 
                                                        rows="4"></textarea>
                                                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                                                </div>
                                                
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Budget</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="estimatedBudget">Estimated budget<sup className=" text-danger">*</sup></label>
                                            <input
                                             name="estimatedBudget" 
                                             defaultValue={inputs.estimatedBudget}
                                             onChange={handleChange}
                                             className={`form-control ${errors.estimatedBudget ? 'is-invalid' : ''}`}required placeholder="Estimated budget" type="number" id="estimatedBudget" />
                                            {errors.estimatedBudget && <div className="invalid-feedback">{errors.estimatedBudget}</div>}
                                        </div>
                                         <div className="form-group">
                                            <label htmlFor="reciveDate">Recive Date</label>
                                            <input
                                             name="reciveDate"
                                             defaultValue={inputs.reciveDate}
                                             onChange={handleChange}
                                             className={`form-control ${errors.reciveDate ? 'is-invalid' : ''}`} placeholder="Recive Date" type="date" id="reciveDate"/>
                                            {errors.reciveDate && <div className="invalid-feedback">{errors.reciveDate}</div>}
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="eDuration">Estimated project duration<sup className=" text-danger">*</sup></label>
                                            <input
                                                required
                                                type="number"
                                                name="eDuration"
                                                defaultValue={inputs.eDuration}
                                                placeholder="Enter days to add"
                                                onChange={calDate}
                                                className={`form-control mt-2 ${errors.eDuration ? 'is-invalid' : ''}`}
                                                id="eDuration" 
                                            />
                                            {errors.eDuration && <div className="invalid-feedback">{errors.eDuration}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="eEndDate">Estimated End Date</label>
                                            <input
                                                name="eEndDate"
                                                value={inputs.eEndDate}
                                                onChange={handleChange}
                                                className={`form-control ${errors.eEndDate ? 'is-invalid' : ''}`}
                                                placeholder="Estimated End Date"
                                                type="date"
                                                id="eEndDate"
                                            />
                                            {errors.eEndDate && <div className="invalid-feedback">{errors.eEndDate}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label required htmlFor="projectLeader">Project Leader<sup className=" text-danger">*</sup></label>
                                            {/* //rel */}
                                            {prolider?.length > 0 && 
                                            <select required className="form-control" id="projectLeader" name='projectLeader' defaultValue={inputs.projectLeader} onChange={handleChange}>
                                                <option value="">Select Leader</option>
                                                    {prolider.map((d, key) =>
                                                <option value={d.id}>{d.id}{d.name}</option>
                                                    )}
                                            </select>
                                            }
                                            {/*//*/}
                                            {errors.projectLeader && <div className="invalid-feedback">{errors.projectLeader}</div>}
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className="row">
                            <div className="col-12">
                                <Link to="/" className="btn btn-secondary">Cancel</Link>
                                <button type="submit" className="btn btn-success float-right">Create New Project</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </AdminLayout>
    );
}

export default ProjectAdd;
