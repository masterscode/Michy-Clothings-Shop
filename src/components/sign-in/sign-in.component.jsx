import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.util.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accout</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            label="password"
            value={this.state.password}
          />
          <div clasName="button">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
