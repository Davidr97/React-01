import React, { Component } from 'react';
import {Redirect} from "react-router";


class AddStudent extends Component{

    constructor(props){
        super(props);
        if(this.props.studyPrograms.length) {
            const studyProgram = this.props.studyPrograms[0];
            let student = {
                id: '',
                name: '',
                lastName: '',
                studyProgram: ''
            };
            if(this.props.location.state) {
                let {id, firstName, lastName} = this.props.location.state;
                student = {
                    id,
                    lastName,
                    studyProgram : `${studyProgram.id}-${studyProgram.name}`,
                    name : firstName
                };
            }
            this.state = {studyProgram, student};
        }


    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        if(name === 'studyProgram'){
            const [id, name] = event.target.value.split('-');
            const studyProgram = {
                id,
                name
            };
            this.setState({studyProgram});
        }else{
            this.setState(prev => {
                let student = prev.student;
                student = {...student, [name] : value};
                return { student }
            })
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        let student = this.state.student;
        student.studyProgram = this.state.studyProgram;
        console.log(student);
        this.props.addStudent(student).then(result => {
            if(result.valid){
                this.setState({resolved: true, valid : true})
            } else{
                this.setState({resolved: true, valid: false, errorMessage : result.errorMessage})
            }
        });
    };

    render(){
        const studyPrograms = this.props.studyPrograms;
        let message = '';
        if(this.state.resolved){
            if(this.state.valid){
                return <Redirect push to="/students"/>;
            }else {
                message = <div className="bg-danger py-3 text-center text-white">
                    {this.state.errorMessage}
                </div>;
            }
        }
        return (
            <div className="col-5">
                {message}
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header text-center">Student Details</div>
                    <div className="card-body">
                        <div className="card-text">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput"><span className="fa fa-user-circle"/> FirstName</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput1" name="name"
                                           placeholder="Please enter your first name..." onChange={this.handleChange} value={this.state.student.name}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2"><span className="fa fa-user-circle"/> LastName</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" name="lastName"
                                           placeholder="Please enter your last name..." onChange={this.handleChange} value={this.state.student.lastName}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput3"><span className="fa fa-user-circle"/> Code</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput3" name="id"
                                           placeholder="Please enter your code..." onChange={this.handleChange} value={this.state.student.id}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput4"><span className="fa fa-user-circle"/> Module</label>
                                    <select className="form-control" id="formGroupExampleInput4" name="studyProgram" onChange={this.handleChange} value={this.state.student.studyProgram}>
                                        {
                                            studyPrograms.map(studyProgram => <option key={studyProgram.id} value={studyProgram.id + '-' + studyProgram.name}>{studyProgram.name}</option>)
                                        }
                                    </select>
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



export default AddStudent;