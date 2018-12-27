import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/App/sb-admin.css';
import * as serviceWorker from './serviceWorker';
import {studyProgramServiceModule} from "./services/studyProgramService";
import {studentServiceModule} from "./services/studentService";
import MainApp from './components/App/MainApp';


const studyProgramService = studyProgramServiceModule();

const studentService = studentServiceModule();

ReactDOM.render(<MainApp studyProgramService={studyProgramService} studentService={studentService}/>, document.getElementById('root'));


//const data = listStudents();


//ReactDOM.render(<App students={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
