import React from 'react';
import { connect } from 'react-redux'
import BlogForm  from './BlogForm';
import ShowBlogs from './ShowBlogs';
import tgl from './Togglable';

const Togglable = tgl.Togglable;

const BlogView = (props) => {
  const blogFormRef = React.createRef();


  return (
    <>
      <Togglable buttonLabel="Create Blog" ref={blogFormRef}>
        <BlogForm user={props.user}/>
      </Togglable>
      <ShowBlogs user={props.user} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(
  mapStateToProps,null)(BlogView)
