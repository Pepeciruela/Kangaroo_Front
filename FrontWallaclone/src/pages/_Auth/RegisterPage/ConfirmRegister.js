import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { confirmSignup } from '../../../store/actions/SignupActions';
import './RegisterPage.scss';

//TODO Improve ConfirmRegister and add a succesful alert
export function ConfirmRegister() {
  const dispatch = useDispatch();
  const { userToken } = useParams();
  useEffect(() => {
    dispatch(confirmSignup(userToken));
  }, [dispatch, userToken]);

  return <>{<Redirect to={'/login'} />}</>;
}

export default ConfirmRegister;
