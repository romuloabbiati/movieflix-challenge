import { AuthContext } from 'AuthContext';
import ButtonIcon from 'components/ButtonIcon';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokenData } from 'util/auth';
import { requestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storage';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/movies' } };

  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData()
      });
        history.replace(from);
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
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
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
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
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
