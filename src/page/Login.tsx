/** @format */
import { FormLogin } from "../component";
const Login = () => {
  return (
    <section className=" bg-background h-screen relative overflow-hidden">
      <div className=" mx-auto w-1/3 py-32 flex flex-col items-center">
        <FormLogin></FormLogin>
      </div>
      <div className=" absolute  bg-opacity-80 bg-orange-100 w-96 h-96 scale-150 rounded-full -top-60 -left-60"></div>
      <div className=" absolute  bg-opacity-80 bg-orange-100 w-96 h-96 scale-150 rounded-full -bottom-60 -right-60"></div>
    </section>
  );
};
export default Login;
