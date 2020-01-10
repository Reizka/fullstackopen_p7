import React from 'react';
import Blog from './Blog';
import { LikeBlog } from './LikeBlogButton';
import { RemoveBlog } from './RemoveBlogButton';
import tgl from './Togglable';
import { largeToSmallLikesSort } from '../utility/sorter';
import { message } from '../redux/notificationRedux'
import { connect } from 'react-redux'
const TogglableField = tgl.TogglableField;
const ShowBlogs = (props) => {
  console.log(props)
  const blogs = props.blogs;
  try {
    if (!blogs) {
      return <></>;
    } else {
      const bs = largeToSmallLikesSort(blogs);
      const formatedBlogs = bs.map(b => {
        return (
          <li className="blogpost" key={b.id}>
            <TogglableField buttonLabel={b.title}>
              <Blog blog={b}/>
              <LikeBlog blogs={props.blogs} id={b.id} setBlogs={props.setBlogs} />
              <RemoveBlog
                blogs={props.blogs}
                blog={b}
                user={props.user}
                setBlogs={props.setBlogs}
              />
            </TogglableField>
          </li>
        );
      });
      return formatedBlogs;
    }
  } catch (error) {
    console.log('error', error);
  }
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  }
}

export default connect(
  mapStateToProps,
  { //MapStateToDispatch Wrap
    message,
  }
)(ShowBlogs)
