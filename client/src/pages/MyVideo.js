import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import temp from "../assets/ytvector.png";

function MyVideo(props) {
  const [isLogin, setIsLogin] = useState(false);
  function getSubjectName(subject_id) {
    switch (subject_id) {
      case 1:
        return "SF";
      case 2:
        return "로맨스";
      case 3:
        return "호러";
      case 4:
        return "액션";
      case 5:
        return "애니";
      default:
        return "장르";
    }
  }
  const videos = [
    {
      picture: "url",
      name: "스즈메의 문단속",
      rate: 4,
      subject_id: 5,
      content: "너의 이름은을 넘어선...",
    },
    {
      picture: "url2",
      name: "악인전",
      rate: 3,
      subject_id: 4,
      content: "역시 마동석은 다르다",
    },
    {
      picture: "url3",
      name: "컨저링3",
      rate: 1,
      subject_id: 3,
      content: "호러는 안보는게 좋을듯했다",
    },

  ];
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
      <VideoDiv>
        {videos.map(video => {
          return (
            <Card style={{ width: "18rem", margin: "5px 5px" }}>
              <Card.Img variant="top" src={temp} />
              <Card.Body>
                <Card.Title>{video.name}</Card.Title>
                <Card.Text>
                  <p>장르: {getSubjectName(video.subject_id)}</p>
                  <p>평점: {video.rate}/5</p>
                  {video.content}
                </Card.Text>
                <Button style={{ width: "100%" }} variant="primary">
                  확인하기
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </VideoDiv>
    </>
  );
}

export default MyVideo;

const VideoDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px auto;
  width: 90%;
  text-align: center;
  align-items: center;
`;
