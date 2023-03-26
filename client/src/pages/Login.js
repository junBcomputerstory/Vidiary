import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const Container = styled.div`
  width: 100%;
  text-align: center;
  transform: translateY(50%);
`;

const LongTextField = styled(TextField)`
  width: 60%;
  margin-bottom: 20px;
`;

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitLogin = data => {
    console.log(data);
  };
  return (
    <div>
      <Container>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit(submitLogin)}>
          <LongTextField
            required
            id="outlined-required"
            label="아이디"
            {...register("id", {
              required: "아이디를 입력해주세요.",
            })}
            placeholder="아이디를 입력해주세요."
          />
          <br />
          <br />
          <LongTextField
            required
            id="outlined-required"
            label="비밀번호"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          <br />
          <br />
          <LoginButton>로그인</LoginButton>
        </form>
        <p>
          아직 계정이 없다면?&nbsp;
          <Link to="/regist" style={{ textDecoration: "none" }}>
            회원가입
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default Login;

const LoginButton = styled.button`
  color: white;
  width: 60%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #212529;
  background-color: #212529;
  :hover {
    border: 1px solid #2c3033;
    background-color: #2c3033;
  }
  font-size: 20px;
  cursor: pointer;
`;
