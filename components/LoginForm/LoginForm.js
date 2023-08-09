import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  background: linear-gradient(to right, #6a82fb, #fc5c7d);
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const FormTitle = styled.h2`
  margin-bottom: 10px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  width: 100px;
  font-weight: bold;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 5px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const LoginForm = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      onRegister(username, password);
    } else {
      onLogin(username, password);
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <FormContainer>
          <FormTitle>{isRegister ? "Register" : "Login"}</FormTitle>
          <FormField>
            <FormLabel>Username:</FormLabel>
            <FormInput
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </FormField>
          <FormField>
            <FormLabel>Password:</FormLabel>
            <FormInput
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </FormField>
          <FormButton type="submit">
            {isRegister ? "Register" : "Login"}
          </FormButton>
          <FormButton type="button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login instead" : "Register instead"}
          </FormButton>
        </FormContainer>
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;
