import React, { Component } from 'react';
import StudyProgramsList from "../StudyProgramsList";
import AddStudyProgram from "../AddStudyProgram";
import StudentsList from "../StudentsList";
import AddStudent from "../AddStudent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StudentDetails from "../StudentDetails";

class MainApp extends Component{
    constructor(props) {
        super(props);
        const studyProgramService = this.props.studyProgramService;
        const studentService = this.props.studentService;
        this.state = {studyProgramService, studentService, valid: true};
    }

    componentDidMount(){
        this.updateStudyPrograms();
        this.updateStudents();
    }

    updateStudyPrograms = () => {
        this.state.studyProgramService.getAllStudyPrograms().then(studyPrograms => this.setState({studyPrograms, valid:true}));
    };

    updateStudents = () => {
        this.state.studentService.getAllStudents().then(studentItems => {
            const students = studentItems.reduce((accumulator, student) => {
                 let studentObj = {};
                 studentObj['id'] = student[0];
                 studentObj['firstName'] = student[1];
                 studentObj['lastName'] = student[2];
                 studentObj['studyProgram'] = student[3];
                 return [...accumulator, studentObj]
            }, []);
            this.setState({students})
        });
    };

    addStudyProgram = async (studyProgram) => {
        await this.state.studyProgramService.addStudyProgram(studyProgram);
        this.updateStudyPrograms();
    };

    deleteStudyProgram = async (studyProgram) => {
        const students = await this.state.studentService.getAllStudentsInStudyProgram(studyProgram.id);
        if(students.length){
            this.setState({valid:false});
        }else{
            await this.state.studyProgramService.deleteStudyProgram(studyProgram.id);
            this.updateStudyPrograms();
        }
    };

    addStudent = async (student) => {
        let result = {};
        await this.state.studentService.addStudent(student).then(response => {
            if(!response.ok){
                return response.text();
            }return response.json();
        }).then(response => {
            if(response.id){
                result = {valid:true}
            }else{
                result = {valid : false, errorMessage: response}
            }
        });
        this.updateStudents();
        return result;
    };




    render(){
        const addStudyProgram = this.addStudyProgram;
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                        <span className="navbar-brand mr-1">React basics</span>
                    </nav>
                    <div id="wrapper">
                        <ul className="sidebar navbar-nav pt-3">
                            <li className="nav-item" id="sidebar-student">
                                <Link to="/students">
                                    <i className="fa fa-user"/>
                                    <span> Students</span>
                                </Link>
                            </li>
                            <li className="nav-item" id="sidebar-subject">
                                <Link to="/studyPrograms">
                                    <i className="fa fa-book"/>
                                    <span> Study programs</span>
                                </Link>
                            </li>
                        </ul>
                        <div id="content-wrapper">

                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                   <Switch>
                                       <Route
                                           path="/studyPrograms/addNew"
                                           render = {(props) => {
                                               return <AddStudyProgram {...props} addStudyProgram={addStudyProgram}/>
                                           }}
                                       />
                                       <Route
                                           path="/studyPrograms"
                                           render = {(props) => {
                                               return <StudyProgramsList {...props} addStudyProgram={this.addStudyProgram}
                                                                         studyPrograms={this.state.studyPrograms}
                                                                         deleteStudyProgram={this.deleteStudyProgram}
                                                                         valid={this.state.valid}/>
                                           }}
                                       />
                                   </Switch>

                                    <Switch>
                                        <Route
                                            path="/students/addNew"
                                            render = {(props) => {
                                                return <AddStudent {...props} addStudent={this.addStudent}
                                                                   studyPrograms={this.state.studyPrograms}/>
                                            }}
                                        />
                                        <Route
                                            path="/students"
                                            render = {(props) => {
                                                return <StudentsList {...props} addStudent={this.addStudent}
                                                                     students={this.state.students}/>
                                            }}
                                        />
                                    </Switch>
                                   <Switch>

                                       <Route
                                           path="/student/edit/:id"
                                           render = {(props) => {
                                               return <AddStudent {...props} addStudent={this.addStudent}
                                                                  studyPrograms={this.state.studyPrograms}/>
                                           }}/>

                                       <Route
                                           path="/student/:studentId"
                                           render = {(props) => {
                                               return <StudentDetails {...props}/>
                                           }}
                                       />

                                   </Switch>

                                   <Route
                                       path="/studyProgram/edit/:id"
                                       render = {(props) => {
                                           return <AddStudyProgram {...props} addStudyProgram={addStudyProgram}/>
                                       }}
                                   />
                                </div>
                            </div>
                            <footer className="sticky-footer">
                                <div className="container my-auto">
                                    <div className="copyright text-center my-auto">
                                        <span>Copyright © React basics</span>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}



export default MainApp;