import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Login = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() =>{
    auth.onAuthStateChanged(async (user) => {
      if(user){
        setUser(user);
        navigate("/home")
      }
    });
  },[userName]);

  const handleAuth = () => {
    if(!userName){

    auth.signInWithPopup(provider).then((result) => {
      // console.log(result);
      setUser(result.user);
    }).catch((error) => {
      alert(error.message)
    })

  } else if (userName){
    auth.signOut().then(() => {
      dispatch(setSignOutState());
      navigate('/')
    }).catch(err => alert(err.message))
  }
};

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

   return(
      <Container>
         <Content>
            <Logos>                  
               <LogoOne src = "/images/logo-one.svg"/>
               <Description>2.99 JOD per month or 28.99 JOD per year</Description>
               <SignUp onClick={handleAuth}>Sign In Now  &gt;</SignUp>
               <LogoTwo src ="/images/logo-two.png"/>
            </Logos>
            <BgImage/>
            </Content>
      </Container>
   )
   }

   const Container = styled.section`
   overflow: hidden;
   display: flex;
   flex-direction :column;
   text-align: center;
   height: 100vh;
   `;

   const Content = styled.div`
   margin-bottom:10vw;
   width:100%;
   position:relative;
   min-height: 100vh;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction :column;
   padding: 80px 40px;
   height: 100%;
   `;

   const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Logos = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0742C3;
  margin-bottom: 12px;
  margin-top: 20px;
  transform: translatex(50%);  
  width: 50%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 4vh;
  font-weight: bold;
  margin: 5 0 24px;
  margin-bottom: 0px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const LogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  margin-top: 30px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;