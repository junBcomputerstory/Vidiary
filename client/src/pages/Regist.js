import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

function Regist() {
  const [notSame, setNotSame] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitRegister = data => {
    if (data.password !== data.passwordConfirm) {
      setNotSame(true);
    }
    console.log(data);
  };

  return (
    <Container>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(submitRegister)}>
        <LongTextField
          required
          label="아이디"
          id="id"
          {...register("id", {
            required: "아이디를 입력해주세요.",
          })}
          placeholder="아이디를 입력해주세요."
        />
        <br />
        <br />
        <LongTextField
          required
          id="password"
          label="비밀번호"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        <br />
        <br />
        <LongTextField
          required
          type="password"
          id="passwordConfirm"
          label="비밀번호 확인"
          {...register("passwordConfirm", {
            required: "비밀번호 확인",
          })}
          placeholder="비밀번호 확인"
        />
        {notSame && <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>}
        <br />
        <br />
        <LongTextField
          required
          id="nickname"
          label="닉네임"
          {...register("nickname", {
            required: "닉네임을 입력해주세요",
          })}
          placeholder="닉네임을 입력해주세요."
        />
        <br />
        <br />
        <LoginButton type="submit">회원가입</LoginButton>
      </form>
    </Container>
  );
}

export default Regist;

const Container = styled.div`
  width: 100%;
  text-align: center;
  transform: translateY(30%);
`;

const LongTextField = styled(TextField)`
  width: 60%;
  margin-bottom: 20px;
  font-family: "Jua", sans-serif;
`;

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
