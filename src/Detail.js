import { Button, ButtonGroup } from "@mui/material";
import React from "react";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteBucket, doneBucket } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const dataIdx = location.search.substring(1);

  const bucket_list = useSelector((state) => state.bucket.list);

  console.log(location);

  const delList = () => {
    console.log(dataIdx);
    dispatch(deleteBucket(dataIdx));
    navigate(-1);
  };

  const todoDone = () => {
    dispatch(doneBucket(dataIdx));
    navigate(-1);
  };

  return (
    <>
      <h1>{dataIdx} 번째 상세 페이지입니다! </h1>
      <TodoText>{bucket_list[dataIdx].text}</TodoText>
      <ButtonGroup>
        <Button onClick={todoDone}>완료하기</Button>
        <Button onClick={delList}>삭제하기</Button>
      </ButtonGroup>
    </>
  );
};

const TodoText = styled.div`
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;

export default Detail;
