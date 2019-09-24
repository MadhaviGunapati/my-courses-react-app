import React, {useState, useEffect} from 'react';
import CourseForm from './CourseForm';
//import * as courseApi from '../api/courseApi';
import courseStore from '../stores/courseStore';
import * as courseActions from "../actions/courseActions";
import {toast} from 'react-toastify';

//import {Prompt} from 'react-router-dom';
//prompt when leaving the page....
const  ManageCoursePage=(props)=> {
    const [errors, setErrors]= useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

    useEffect(() => {
       const slug = props.match.params.slug;//from the path `/courses/:slug`
       if(slug){
           setCourse(courseStore.getCourseBySlug(slug));
       }
    }, [ props.match.params.slug])
    /*function handleChange(event){
        const updatedCourse = {...course, [event.target.name]: event.target.value};
        setCourse(updatedCourse);
    }*/
    //after destructuring the event property..
    function handleChange({target}){
        setCourse({...course, [target.name]: target.value});
    }

    function formIsValid(){
        const _errors = {};

        if(!course.title) _errors.title = "Title is required!"
        if(!course.authorId) _errors.authorId = "Author ID is required!"
        if(!course.category) _errors.category = "Category is required!";

        setErrors(_errors);
        //form is valid if the errors object has no propertice..
        return Object.keys(_errors).length ===0;
    }

    function handleSubmit(e){
        e.preventDefault();//on save it will prevent the form to post back from the server
        if(!formIsValid()) return;
        courseActions.saveCourse(course).then(()=>{
            props.history.push("/courses");
            // since this component is loaded via rect route component, we have acces to react history object on props.. so we can programatically redirect the user here after te same is completed..
            toast.success('Toast saved!!');
        });
    }
    return (
        <div>
            <h2>Manage Course</h2>
            {/*<Prompt when={true} message="Are you sure you want to leave"/>*/}
           {    // on click on the course page details will be displayed here through slug
                /*{props.match.params.slug}*/
           }
            <CourseForm 
            errors ={errors}
            course={course} 
            onChange={handleChange} 
            onSubmit={handleSubmit}/>
        </div>
    )
}

export default ManageCoursePage
