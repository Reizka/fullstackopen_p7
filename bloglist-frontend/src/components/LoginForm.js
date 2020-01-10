import React  from 'react';
import { useField } from '../utility/customHooks';
import { message } from '../redux/notificationRedux'
import { connect } from 'react-redux'
import { logIn } from '../redux/userRedux'
const LoginForm = (props) => {
  const username =  useField('text');
  const password =  useField('password');

  const handleLogin = async event => {
    event.preventDefault();
    if(username.value ==='' || password.value===''){
      props.message('username or password missing!',2)
    }else{
      try {
        console.log('LOG IN', event.target.username.value,
          event.target.password.value )
        props.logIn(
          event.target.username.value,
          event.target.password.value
        )
        event.target.username.value =''
        event.target.password.value =''
      } catch (exception) {
        console.log('LOGIN',exception);
        props.message('wrong credentials',2);
      }
    }

  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input  {...username} name="username"/>
        </div>
        <div>
          password
          <input {...password} name ="password"/>
        </div>
        <button type="submit"> login </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(
  mapStateToProps,
  { //MapStateToDispatch Wrap
    logIn,
    message
  }
)(LoginForm)
