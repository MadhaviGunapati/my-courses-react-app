import {EventEmitter} from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = "change";
let _courses =[];


class CourseStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getCourses(){
        return _courses;
    }
    getCourseBySlug(slug){
        return _courses.find(course=>course.slug === slug);
    }
}

const store = new CourseStore();

Dispatcher.register(action =>{
    switch(action.actionTypes){
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;
        default:
            //nothing to do here
    }
})

export default store;
/*
Each flux store has three function:
1.addEventListener(wraps on)
2.removeChanfeListener(wraps removeListener)
3.emitChange(wraps emit)
*/