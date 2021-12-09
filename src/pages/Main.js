import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import MainCardConcern from "../components/MainCardConcern";
import MainCardSelect from "../components/MainCardSelect";

function Main() {
  return (
    <MainBox>
      <ContentBox>
        <Header />
        <SearchInput />
        <MainCardSelect />
        <MainCardConcern />
        <MainCardConcern />
      </ContentBox>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 375px;
  margin: 0 auto;
`;
const ContentBox = styled.div`
  position: absolute;
  top: 130px;
  width: 375px;
  height: 100vh;

  background-color: white;
`;

export default Main;
