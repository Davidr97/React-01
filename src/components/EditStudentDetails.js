import React from 'react';



class EditStudentDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            studentShouldBeShown : false,
            student : null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateState(student){
        const studentShouldBeShown = true;
        this.setState({studentShouldBeShown, student});
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        const student = {...this.state.student,[name]:value};
        this.setState(prevState => {
            return {
                ...prevState,
                student
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const {editStudent} = this.props;
        editStudent(this.state.student);
        const studentShouldBeShown = false;
        this.setState(prevState => {
            return {
                ...prevState,
                studentShouldBeShown
            }
        });

    }

    render(){
        if(!this.state.studentShouldBeShown) return null;
        const {firstName, lastName, code, module} = this.state.student;
        return (
            <div className="card text-white bg-dark mb-3">
                <div className="card-header text-center">Student Details</div>
                <div className="card-body">
                    <div className="card-text">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput"><span className="fa fa-user-circle"/> FirstName</label>
                                <input type="text" className="form-control" id="formGroupExampleInput1" name="firstName"
                                       placeholder="Please enter your code number..." value={firstName} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2"><span className="fa fa-user-circle"/> LastName</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" name="lastName"
                                       placeholder="Please enter your code number..." value={lastName} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput3"><span className="fa fa-user-circle"/> Code</label>
                                <input type="text" className="form-control" id="formGroupExampleInput3" name="code"
                                       placeholder="Please enter your code..." value={code} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput4"><span className="fa fa-user-circle"/> Module</label>
                                <input type="text" className="form-control" id="formGroupExampleInput4" name="module"
                                       placeholder="Please enter your module..." value={module} onChange={this.handleChange}/>
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
        );
    }




}

export default EditStudentDetails