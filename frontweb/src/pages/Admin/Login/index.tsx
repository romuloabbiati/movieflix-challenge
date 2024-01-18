import ButtonIcon from 'components/ButtonIcon';
// import { Link } from 'react-router-dom';


import './styles.css';


const Login = () => {
  return (
    <div className="login-card">
      <h1>LOGIN</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2 password-input">
          <input
            type="password"
            className="form-control base-input"
            placeholder="Senha"
            name="password"
          />
        </div>
        <div className="login-submit">
            <ButtonIcon text="Fazer login" />
        </div>
        {/* The comment below might be the right 
        way of configuring the ButtonIcon with 
        react-router-dom - lecture 7-28*/}
        {/* <Link to="/movies">
          <ButtonIcon />
        </Link> */}
      </form>
    </div>
  );
};


export default Login;
