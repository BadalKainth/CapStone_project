import react from "react";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <div className="LeftSide">
        <h3 className="LeftHeader">
          Discover new things on <br />
          SuperApp{" "}
        </h3>
      </div>
      <div className="RightSide">
        <div className="FormSection">
          <h2>SuperApp</h2>
          <p>Create Your New Account</p>
          <input
            type="text"
            className="InputFields"
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="InputFields"
            placeholder="UserName"
            required
          />
          <input
            type="email"
            className="InputFields"
            placeholder="Email"
            required
          />
          <input
            type="number"
            className="InputFields"
            placeholder="Mobile Number"
            required
          />
          <div className="termsCheck">
            <input type="checkbox" id="test" required />
            <label htmlFor="test">
              Share my registration data with SuperApp{" "}
            </label>
          </div>

          <button type="submit" className="signup-btn " onClick={""}>
            SIGN UP
          </button>
          <div className="policiesSection">
            <p>
              By clicking on Sign up. you agree to SuperApp{" "}
              <span>Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how SuperApp collects, uses, shares and
              protects your personal data please head SuperApp{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
