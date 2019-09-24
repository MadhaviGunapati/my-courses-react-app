import React, { useState, useEffect} from 'react';
//import { getCourses } from "../api/courseApi";
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import {Link} from 'react-router-dom';

const CoursesPage=()=> {
    const [courses, setCourses] = useState([])
   /* used useState to declare the state...
    constructor(props){
        super(props);

        this.state = {
            courses:[]
        };
    };*/
    useEffect(()=>{
        setCourses(courseStore.getCourses())
    }, [])
    /*componentDidMount(){
        getCourses().then(courses=>{
            this.setState({courses:courses})
        })
        
    }*/
   // render() {
        return (
            <div>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">
                Add Course
            </Link>
            <CourseList courses={courses}/>
            </div>
        )
//    }
}

export default CoursesPage;
