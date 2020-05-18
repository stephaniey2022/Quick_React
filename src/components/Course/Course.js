import 'rbx/index.css';
import { Button, Container, Message, Title } from 'rbx';
import React, { useState,useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../shared/firebase';
import {timeParts, getCourseNumber, getCourseTerm, hasConflict} from './times';

const db = firebase.database().ref();

const Course = ({ course, state, user }) => (
    <Button color={ buttonColor(state.selected.includes(course)) }
      onClick={ () => state.toggle(course) }
      onDoubleClick={ user? () => moveCourse(course) : null }
      disabled={ hasConflict(course, state.selected) }
      >
      { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
    </Button>
);

const moveCourse = course => {
    const meets = prompt('Enter new meeting data, in this format:', course.meets);
    if (!meets) return;
    const {days} = timeParts(meets);
    if (days) saveCourse(course, meets);
    else moveCourse(course);
  };
  
  const saveCourse = (course, meets) => {
    db.child('courses').child(course.id).update({meets}).catch(error => alert(error));
  };
  
const buttonColor = selected => (
  selected ? 'success' : null
);


export default Course;