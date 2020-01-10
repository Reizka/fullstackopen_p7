import React, { useState, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm';
import BlogView from './components/BlogView';
import tgl from './components/Togglable';
import blogService from './services/blogService';
import Notification from './components/Notification'
import { initBlogs } from './redux/blogRedux'
import { logOut } from './redux/userRedux'
const Togglable = tgl.Togglable;
function App(props) {

  useEffect(() => {
    props.initBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
    }
  }, []);


  if (props.user.token === '') {
    return (
      <div>
        <Notification/>
        <Togglable buttonLabel="Show Login form">
          <LoginForm/>
        </Togglable>
      </div>
    );
  } else {
    return (
      <div>
        <p>{props.user.name} logged in</p>
        <button name="logout" type="submit" onClick={() => props.logOut()}>
          logout
        </button>
        <BlogView/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, { initBlogs,logOut })(App)
