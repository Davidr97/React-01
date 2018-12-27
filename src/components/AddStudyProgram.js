import React from 'react';
import {Redirect} from "react-router";

class AddStudyProgram extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: ''};
        if(this.props.location.state){
            this.state = this.props.location.state;
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const studyProgram = this.state;
        this.props.addStudyProgram(studyProgram);
        this.setState({redirect : true})
    };

    handleChange = (event) => {

        const name = event.target.value;
        this.setState({name});
    };

    render(){
        if(this.state.redirect){
            return <Redirect push to="/studyPrograms"/>
        }
        return (
            <div className="col-5 mb-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item">Study programs</li>
                        <li className="breadcrumb-item active" aria-current="page">Add</li>
                    </ol>
                </nav>
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header text-center">Study Program</div>
                    <div className="card-body">
                        <div className="card-text">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput"><span className="fa fa-user-circle"/> Name</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput1" name="name"
                                           placeholder="Please enter study program's name..." onChange={this.handleChange}
                                    value={this.state.name}/>
                                </div>

                                <div className="text-center">
                                   <button className="btn btn-info" type="submit">
                                       Save changes
                                   </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default AddStudyProgram;