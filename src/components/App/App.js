import React, { Component } from 'react';
import StudentsList from '../StudentsList';
import EditStudentDetails from '../EditStudentDetails';

class App extends Component {

  constructor(props){
      super(props);
      this.state = props;
      this.editStudentRef = React.createRef();

      this.editStudent = this.editStudent.bind(this);
      this.showStudent = this.showStudent.bind(this);
  }

  showStudent(id){
      this.editStudentRef.current.updateState(this.state.students.filter(student => student.id === id)[0])
  }


  editStudent(student){
      this.setState(prevState => {
         return {
             students: Array.from(prevState.students).map(s => s.id === student.id ? student : s)
         }
      });
  }

  render() {
    return (
        <div className="container-fluid mt-5">
            <div className="row justify-content-around">
                <div className="col-5">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col"/>
                        </tr>
                        </thead>
                        <tbody>
                            <StudentsList students={this.state.students} showStudent={this.showStudent}/>
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <EditStudentDetails editStudent={this.editStudent} ref={this.editStudentRef}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
