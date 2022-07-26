import React, { Component } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import background from "../background.png";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      isWait: false,
      waitingTime: 0,
      countError: 0,
      errorMessage: "",
    };
    this._reCaptchaRef = React.createRef();
  }

  render() {
    function reactChange(value) {
      console.log("Captcha value:", value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      var { inputUsername, inputPassword } = document.forms[0];
      var username = inputUsername.value;
      var password = inputPassword.value;

      if (username !== "armaningtyas") {
        this.setState({ isError: true, errorMessage: "Username salah" });
        event.target.reset();
      } else if (password !== "armatp2") {
        this.setState({ isError: true, errorMessage: "Password salah" });
        event.target.reset();
      } else {
        window.open("/dashboard", "_self").focus();
      }

      if (this.state.isError) {
        this.setState({ countError: this.state.countError + 1 });
        if (this.state.countError === 2) {
          this.setState({
            waitingTime: 30,
            countError: 0,
            errorMessage: "Percobaan Login salah 3 kali. Silakan menunggu 30 detik.",
          });
          setTimeout(() => {
            this.setState({ waitingTime: 0, isError: false });
          }, 30000);
        }
      } else {
      }
    };

    return (
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <div class="wrap">
                <div
                  class="img"
                  style={{
                    backgroundImage: `url(${background})`,
                  }}
                ></div>
                <div class="login-wrap p-4 p-md-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Login</h3>
                    </div>
                  </div>
                  {this.state.isError ? (
                    <div class="alert alert-danger" role="alert">
                      {this.state.errorMessage}
                    </div>
                  ) : null}
                  <form onSubmit={handleSubmit} class="signin-form">
                    <div class="form-group mt-3">
                      <label for="inputUsername">Username</label>
                      <input
                        name="inputUsername"
                        type="text"
                        class="form-control"
                        required
                      />
                    </div>
                    <div class="form-group mt-3">
                      <label for="inputPassword">Password</label>
                      <input
                        id="password-field"
                        name="inputPassword"
                        type="password"
                        class="form-control"
                        required
                      />
                    </div>
                    
                    <div class="form-group ">
                      <div class="mb-3 d-flex justify-content-center g-recaptcha" data-sitekey="6LdGUhghAAAAADyhHtJB0BXvBqyUBhZmctuZmM2a"></div>

                      <button
                        type="submit"
                        class="form-control btn btn-primary rounded submit px-3"
                        disabled={this.state.waitingTime > 0}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <p class="text-center">armaningtyas || armatp2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
