// 리액트 패키지를 불러옵니다.
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { history } from "./redux/configStore";

const BucketList = (props) => {
  const my_lists = props.list;
  const Bucket_list = useSelector((state) => state.bucket.list);
  const navigate = useNavigate();

  console.log(Bucket_list);

  return (
    <ListStyle>
      {Bucket_list.map((list, index) => {
        return (
          <ItemStyle
            key={index}
            className="list_item"
            color={list.completed ? "orange" : "aliceblue"}
            onClick={() => {
              navigate(`detail?${index}`);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${(props) => props.color};
`;

export default BucketList;
