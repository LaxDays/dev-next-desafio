import { identifyWithSignIn } from "@/src/constants/identifyWithSignIn";
import { useState } from "react";
import Buttons from "@/src/components/Buttons";
import Image from "next/image";
import Link from "next/link";
import e from "express";

export default function SignIn() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    e.preventDefault();
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      doby: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error("Login error: ", error);
      });
  }

  return (
    <section className="signInPageContainer">
      <div className="mySignInContainerFull">
        <div className="signInContainer">
          <div className="signInImage">
            <Link href="/">
              <Image
                className="logoDEVSignIn"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="Logo DEV"
                width={60}
                height={50}
              />
            </Link>
          </div>
          <h1 className="joinDEVSignIn">Join the DEV Community</h1>
          <p className="joinDEVSignInP">
            DEV Community is a community of 1,382,651 amazing developers{" "}
          </p>
          <div className="btnsSignInContainer">
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
          <p className="signInOr">OR</p>
        </div>
        <form className="signInSection" onSubmit={handleSubmit}>
          <div className="signInContainerInputs">
            <div className="emailInputContainer">
              <p>Email</p>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>
            </div>
            <div className="passwordInputContainer">
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
          </div>
          <div className="signInbottomContainer">
            <div className="rememberForgotContainer">
              <div className="rememberOption">
                <input type="checkbox" name="rememberMe" value="Remember" />{" "}
                Remember me
              </div>
              <div className="forgotPassword">
                <p>Forgot password?</p>
              </div>
            </div>

            <div>
              <button className="btnSubmitLogIn">Log in</button>
            </div>
          </div>
          <div>
            <p className="termsAndConductSignIn">
              By signing up, you are agreeing to our <span> </span>
              <span className="blueLinksSignIn">
                privacy policy, terms of use
              </span>
              <br />
              and <span className="blueLinksSignIn">code of conduct.</span>
            </p>
            <hr />
            <p className="alreadyAccountSignIn">
              New to DEV Community?
              <Link href="/signup">
                <span className="blueLinksSignIn"> Create account.</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
