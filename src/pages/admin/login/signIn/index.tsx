import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SingInForm from './SingInForm';

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/admin');
    }
  }, []);
  return (
    <section className="flex w-[1280px]">
      <div className="w-[620px] pt-[60px] ">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Адміністрування сайту
        </h2>
        <h3 className=" mb-4 text-center text-[1.375rem]">
          Підтвердіть свій акаунт
        </h3>
        <SingInForm />
      </div>
      <img src="/admin/img-login.png" width="660px" alt="cow" />
    </section>
  );
};
export default SignIn;
