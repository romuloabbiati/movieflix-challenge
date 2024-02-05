import ButtonIcon from 'components/ButtonIcon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        console.log('SUCESSO', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="login-card">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger alert-css">
          Erro ao tentar efetuar o login
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Campo obrigatório'
            })}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
          <div className='invalid-feedback d-block alert-css'>
            { errors.username?.message }
          </div>
        </div>
        <div className="mb-2 password-input">
          <input
            {...register('password', {
              required: 'Campo obrigatório'
            })}
            type="password"
            className="form-control base-input"
            placeholder="Senha"
            name="password"
          />
          <div className='invalid-feedback d-block alert-css'>
            { errors.password?.message }
          </div>
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
