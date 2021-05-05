import React, { Component } from 'react';

class AppPortal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: " ",
            email: " ",
            school: " ",
            prompt: " ",
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

    onSubmit = () => {
        console.log("HERE");
    }
    render() {
        return (
            <div >
               <h>APP AppPortal</h>
               <div className="">
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
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Prompt:</label>
                        <input type="text"
                            required
                            className="form-control"
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