import { identifyWithSignIn } from "@/src/constants/identifyWithSignIn";
import Buttons from "@/src/components/Buttons";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="mySignUpContainerFull">
      <div className="signUpContainer">
        <div>
          <div className="imageContainer">
            <Link href="/">
              <Image
                className="logoDEVSignUp"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo DEV"
                width={60}
                height={50}
              />
            </Link>
          </div>
          <h1 className="joinDEV">Join the DEV Community</h1>
          <p>DEV Community is a community of 1,382,651 amazing developers </p>
          <div className="btnsSignUpContainer">
            {identifyWithSignIn.map((identifyWithSignIn, index) => {
              return (
                <Buttons
                  key={`identifyWithSignIn-${index}`}
                  icon={identifyWithSignIn.icon}
                  name={identifyWithSignIn.name}
                />
              );
            })}
          </div>
        </div>

        <p>OR</p>

        <div className="signinContainer">
          <div className="emailInputContainer">
            <p>Email</p>
            <input type="text"></input>
          </div>
          <div className="passwordInputContainer">
            <p>Password</p>
            <input type="password"></input>
          </div>
        </div>
        <div className="rememberForgotContainer">
          <div className="rememberOption">
            <input type="radio" name="rememberMe" value="Remember" /> Remember
            me
          </div>
          <div className="forgotPassword">
            <p>Forgot password?</p>
          </div>
        </div>

        <div>
          <button className="btnSubmitLogIn">Log in</button>
        </div>

        <div>
          <p className="termsAndConduct">
            By signing up, you are agreeing to our <span> </span>
            <span className="blueLinks">privacy policy, terms of use</span>
            <br />
            and <span className="blueLinks">code of conduct.</span>
          </p>
          <hr />
          <p className="alreadyAccount">
            New to DEV Community?
            <Link href="/signup">
              <span className="blueLinks"> Create account.</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
