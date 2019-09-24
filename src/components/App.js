import React from 'react';
import Header from "./common/Header";
import HomePage from "./HomePage";
import AboutPage from '../AboutPage';
import CoursesPage from './CoursesPage';
import {Route, Switch, Redirect} from "react-router-dom";
import ManageCoursePage from './ManageCoursePage';
import NotFoundPage from './NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    /*deleting this function..
    function getPage(){
        const route=window.location.pathname;
        if(route === "/courses") return <CoursesPage />;
        if(route === "/about") return <AboutPage />;
        return <HomePage />
    }*/
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar/>
            <Header />
            <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/courses" component={CoursesPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/course/:slug" component={ManageCoursePage} />
            <Route path="/course" component={ManageCoursePage} />
            <Redirect from="/about-page" to="/about" />
            <Route component={NotFoundPage}/>
            </Switch>
           {
               // {getPage()}
           }
        </div>
    );
}

export default App
