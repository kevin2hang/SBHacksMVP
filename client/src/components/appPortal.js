import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "../styles/appPortal.css"
import "../styles/contactInfo.css";

class AppPortal extends Component {
    constructor(props) {
        super(props);

        const schools = ['UCSB', 'UCLA', 'UCSD', 'Other'];
        this.state = {
            schools: schools,
            name: " ",
            email: " ",
            school: schools[0],
            prompt: " ",
            resume: null,
            displayOtherOption : false
        }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangePrompt = (e) => {
        this.setState({
            prompt: e.target.value
        })
    }
    onSchoolChange = (e) => {
        if (e.target.value == "Other") {
            this.setState({
                school: "Other",
                displayOtherOption: true
            })
        } else {
            this.setState({
                school: e.target.value,
                displayOtherOption: false
            })
        }
    }
    onResumeChange = (e) => {
        this.setState({ resume: e.target.files[0] });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // add to database (haven't did that yet)
        console.log("HERE");
        // generate application id
        const appId = uuidv4();

        const application = {
            name: this.state.name,
            email: this.state.email,
            userId: this.state.email,
            id: appId,
            schoolName : this.state.school,
            reponses : {prompt1: this.state.prompt}
        };
        axios.post('http://localhost:7000/application/apply', application)
            .then(response => {
                console.log("successfully submitted application")
            })
            .catch(err => {
                console.log("Error when submitting application: "+ err);
            })
    }
    render() {
        return (
            <div className="appPortal">
                <h1 className="miniTitle">Application Portal</h1>
                <div className="appForm">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text"
                                required
                                className="form-control shortResp"
                                value={this.state.description}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email"
                                required
                                className="form-control shortResp"
                                value={this.state.description}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <label>Choose your school: </label>
                        <select value={this.state.school} id="schoolSelector" onChange={this.onSchoolChange} value={this.state.school}>
                            {this.state.schools.map(school => {
                                return <option value={school}>{school}</option>
                            })}
                        </select>
                        {this.state.displayOtherOption && 
                            <div className="form-group">
                                <label>Enter your School:</label>
                                <input type="text"
                                    required
                                    className="form-control shortResp"
                                    value={this.state.description}
                                    onChange={this.onChangeEmail}
                                />
                            </div>}
                        <div className="form-group">
                            <label>Prompt:</label>
                            <textarea
                                required
                                className="form-control promptInput"
                                value={this.state.description}
                                onChange={this.onChangePrompt}
                            />
                        </div>
                        <div className="form-group">
                            <label>Upload Resume:</label>
                            <input type="file"
                                className="form-control resumeUpload"
                                value={this.state.description}
                                accept=".pdf"
                                onChange={this.onResumeChange}
                            />
                        </div>
                        {this.state.resume && 
                            <div>Uploaded Resume: {this.state.resume.name}</div>
                        }
                        {/* <div className="form-group">
                        <label>Prompt:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeEmail}
                        />
                    </div> */}

                        <div id="submitBtnContainer">
                            <input type="submit" value="Submit!" id="submitBtn" />
                        </div>
                    </form>
                </div>
            </div>

        )
    }
};

export default AppPortal;