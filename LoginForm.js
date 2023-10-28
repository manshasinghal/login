import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import image from './image/image.png'
import { useState } from 'react';
const FormContainer = styled.div`

  max-width: 400px;
  flex:2;

  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: #fff;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;


const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 93%;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 62%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color:#000;
  @media (max-width: 768px) {
  left:142px;
  }

`;
const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
  
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
`;

const Checkbox = styled.input`
  margin-right: 10px;
 
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: #ff6b6b;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
  display: block; /* Ensures the button takes full width */
  text-align: center; /* Aligns text to the center */

  &:hover {
    background: #ff4d4d;
  }
`;
const TermsLink = styled.a`
  color: #FFA500;
  text-decoration: underline;
  cursor: pointer;
  margin-left:6px;
`;
const ChangePasswordLink = styled.a`
  color: #FFA500;
  cursor: pointer;
  text-align: right;
  margin-top: 5px;
  display: block;
`;
const RegisterLink = styled.a`
  color: orange;
`;

const CenteredText = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #fff;
`;
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    order: -1;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const Container = styled.div`
  display: flex;
  max-width: 900px; /* Adjust max-width as needed */
  justify-content:space-between;
  margin: 0 auto;
  padding: 90px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

  return (
    <Container>
    <ImageContainer>
      <Image src={image} alt="Your Image" />
    </ImageContainer>
    <FormContainer>
      <Title>Login</Title>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label htmlFor="username">Login ID</Label>
          <InputField type="text" id="username" placeholder="Enter Login ID" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <InputField
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
          />
          <EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </FormGroup>
        <ChangePasswordLink > Change Password </ChangePasswordLink>
        <CheckboxesContainer>
          <CheckboxLabel>
            <Checkbox type="checkbox" id="rememberMe" />
            Remember Me
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox type="checkbox" id="termsConditions" />
            I agree to <TermsLink href="/terms-and-conditions">Terms and Conditions</TermsLink>
          </CheckboxLabel>
        </CheckboxesContainer>
        <SubmitButton type="submit">Login</SubmitButton>
        <CenteredText>
          Don't have an account? <RegisterLink href="/register">Register Here</RegisterLink>
        </CenteredText>
      </form>
    </FormContainer>
    </Container>
  );
};

export default LoginForm;