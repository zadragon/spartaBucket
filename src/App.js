import React, { useState, useRef } from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
// import './style.css';
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Detail from "./Detail";
import { createBucket } from "./redux/modules/bucket";
import { useDispatch } from "react-redux";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
function App() {
  const dispatch = useDispatch();
  const list = ["영화관 가기", "매일 책읽기", "수영 배우기"];
  const [state, setState] = useState(list);
  const todoInput = useRef();

  const addList = (e) => {
    const new_item = todoInput.current.value;
    dispatch(createBucket(new_item));

    todoInput.current.value = "";
    todoInput.current.focus();
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path={"*"} element={<NotFound />} />
        </Routes>
        <div>
          <input type="text" ref={todoInput} />
          <button onClick={(e) => addList(e)}>추가하기</button>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
