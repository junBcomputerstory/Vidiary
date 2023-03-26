import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Youtube from "../assets/ytvector.png";

function Index(props) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ViDiary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/video">내 비디오</Nav.Link>
          </Nav>
          {isLogin ? (
            <Nav>
              <Navbar.Text style={{ color: "white" }}>이승현님, 환영합니다</Navbar.Text>
              <Nav.Link href="#home">로그아웃</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login">로그인</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
      <div style={{ display: "flex" }}>
        <LeftDiv>
          {/* <img src={Youtube} alt="youtube" width={300} style={{ position: "absolute", top: "35%", left: "20%" }} /> */}
        </LeftDiv>
        <TextDiv>
          <strong>
            <p style={{ fontSize: 60, fontWeight: 700 }}>내가 본 동영상을</p>
          </strong>
          <strong>
            <p style={{ fontSize: 60, fontWeight: 700 }}>
              바로 내 <span style={{ color: "#595959" }}>다이어리</span>에,
            </p>
          </strong>
          <p style={{ fontSize: 18 }}>간편하게 내가 본 동영상들을 확인할 수 있어요</p>
        </TextDiv>
      </div>
    </>
  );
}

export default Index;

const LeftDiv = styled.div`
  width: 60vw;
  height: 92.3vh;
  background-color: black;
`;

const TextDiv = styled.div`
  width: 40vw;
  height: 92.3vh;
  text-align: center;
  padding-top: 25vh;
`;
