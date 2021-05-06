import React, { Component } from 'react';
import "../styles/appPortal.css"

class AppPortal extends Component {
    constructor(props) {
        super(props);

        const schools = ['UCSB', 'UCLA', 'UCSD'];
        this.state = {
            schools: schools,
            name: " ",
            email: " ",
            school: schools[0],
            prompt: " "
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
            prompt : e.target.value
        })
    }
    onSchoolChange = (e) => {
        this.setState({
            school: e.target.value
        })
    }

    onSubmit = () => {
        // add to database (haven't did that yet)
        console.log("HERE");
    }
    render() {
        return (
            <div className="appPortal">
               <h className="miniTitle">Application Portal</h>
               <div className="appForm">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email"
                            required
                            className="form-control"
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
                    <div className="form-group">
                        <label>Prompt:</label>
                        <textarea
                            required
                            className="form-control promptInput"
                            value={this.state.description}
                            onChange={this.onChangePrompt}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>Prompt:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeEmail}
                        />
                    </div> */}

                    <input type="submit" value="Submit!" id="submitBtn" />
                </form>
            </div>
            </div>
            
        )
    }
};

export default AppPortal;