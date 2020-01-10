import React from 'react';
import{ createBlog } from '../redux/blogRedux'
import { message } from '../redux/notificationRedux'
import { connect } from 'react-redux'
const BlogForm = (props) => {


  //const title = useField('text');
  //const url = useField('text');
  const handleBlogPost = async event => {
    event.preventDefault();
    try {
      if (event.target.title.value === '') {
        props.message('No title given!',20);

      } else {

        props.createBlog({
          title: event.target.title.value,
          url: event.target.url.value
        })


        console.log(event.target.title.value, 'sent');
        props.message(`new blog ${event.target.title.value} added`,20);

        event.target.title.value ='';
        event.target.url.value = '';
      }
    } catch (exception) {
      console.log(exception);
      //message.set('could not post blog');

    }
  };

  return (
    <div>
      <form onSubmit={handleBlogPost}>
        <div className="create blog">Author:{props.user.name}</div>
        <div className="create blog">
            title:
          <input name="title"/>
        </div>
        <div className="create blog">
            url:
          <input name="url"/>
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  { //MapStateToDispatch Wrap
    createBlog,
    message
  }
)(BlogForm)