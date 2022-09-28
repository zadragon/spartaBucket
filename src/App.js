import React, { useState, useRef } from 'react';
import logo from './logo.svg';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
// import './style.css';
import styled from 'styled-components';


// 클래스형 컴포넌트는 이렇게 생겼습니다!
function App() {

  const list = ['영화관 가기', '매일 책읽기', '수영 배우기'];
  let [state, setState] = useState(list);
  const text = useRef();
  const addList = (e) => {
    const new_item = text.current.value;
    setState([...list, new_item])
    console.log(e.target)
  }

  return (
    <div className="App">
      <Container>
        <Title >내 버킷리스트</Title>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <BucketList list={state} />
        <div>
          <input type="text" ref={text} />
          <button onClick={(e)=>addList(e)}>추가하기</button>
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