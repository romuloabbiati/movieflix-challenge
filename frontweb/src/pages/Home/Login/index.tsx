import ButtonIcon from 'components/ButtonIcon';
import { useForm } from "react-hook-form";
import { requestBackendLogin } from 'util/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData : FormData) => {
    requestBackendLogin(formData)
      .then(response => {
        console.log('SUCESSO', response);
      })
      .catch(error => {
        console.log('ERRO', error);
      });
  };

  return (
    <div className="login-card">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username")}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2 password-input">
          <input
            {...register("password")}
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
