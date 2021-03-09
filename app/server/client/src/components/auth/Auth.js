// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// Image(s) or SVG
import img from "../../images/auth-img.jpg";
// Components
import Signin from "./Signin";
import Signup from "./Signup";
import Footer from "../global/Footer";

const Auth = ({ type }) => {
  var AuthType;
  if (type === "signin") {
    AuthType = <Signin />;
  } else {
    AuthType = <Signup />;
  }

  return (
    <div className='wrapper-col-2 fill-page'>
      <img src={img} className='col left-auth' alt='woman at the library' />
      <div className='wrapper-row-3 col right-auth' id={type}>
        {AuthType}
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
