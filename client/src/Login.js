import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "./styles";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className="login-form">
    <Wrapper>
      <Logo>Calmer</Logo>
      <h2 className="tagline">Our handpicked collection of yoga poses and videos will help you elevate your soul and reach your calmer state of being</h2>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p className="accountquestion">
            Don't have an account?</p> &nbsp;
            <Button onClick={() => setShowLogin(false)}>
              Sign Up
            </Button> 
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p className="accountquestion">
            Already have an account?</p> &nbsp;
            <Button onClick={() => setShowLogin(true)}>
              Log In
            </Button>
        </>
      )}
    </Wrapper>
    </div>
  );
}

const Logo = styled.h1`
  font-family: "Cookie", cursive;
  color: white;
  text-shadow: 1px 1px 10px #03045e;
  font-size: 100px;
  margin: 8px 0 16px;
  text-align: center;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;