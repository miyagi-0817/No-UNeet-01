import styled from "styled-components";
import React from "react";

import { useLocation, useParams } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import Chatbot from "../CompanyCha/chat";
export const CompanyDetailPage = () => {
  const location = useLocation();

  const { id } = useParams();

  const log = () => console.log("MapBoxへ");
  const chat = () => console.log("chatpageへ");
  return (
    <div>
      <Header />
      <STitleWrapper>
        <SPageTitle>企業詳細ページ</SPageTitle>
      </STitleWrapper>

      <SCompanyDetailWrapper>
        <SMainContents>
          <SArticle>
            <header>
              <h2 style={{ textAlign: "center" }}>
                {location.state.state[id].name}
              </h2>
            </header>

            <p> {location.state.state[id].description} </p>
            <p>企業のHP: {location.state.state[id].url}</p>

            <h1 style={{ fontSize: "3rem" }}>関連企業</h1>
            <h3>Coming Soon...</h3>
            <SButtonWrapper>
              <SButtonMargin>
                <PrimaryButton onClick={log}>企業の場所を見る</PrimaryButton>
              </SButtonMargin>
              <SButtonMargin>
                <PrimaryButton onClick={chat}>企業と話す</PrimaryButton>
              </SButtonMargin>
            </SButtonWrapper>
          </SArticle>

          <SAside>
            <SSideContentsWrapper>
              <SImageWrapper>
                <SImage src={location.state.state[id].image} alt="aaaa" />
              </SImageWrapper>
            </SSideContentsWrapper>
          </SAside>
        </SMainContents>
        <RowReverce>
          <React.StrictMode>
            <Chatbot />
          </React.StrictMode>
        </RowReverce>
      </SCompanyDetailWrapper>
    </div>
  );
};

const SCompanyDetailWrapper = styled.div``;

const STitleWrapper = styled.div`
  text-align: center;
`;

const SPageTitle = styled.h3`
  font-size: 1.5rem;
`;

const SMainContents = styled.div`
  margin-bottom: 70px;
  padding: 2% 6%;
  display: flex;
`;

const SArticle = styled.article`
  width: 70%;
`;

const SSideContentsWrapper = styled.div``;

const SAside = styled.aside`
  width: 40%;
`;

const SImageWrapper = styled.div`
  width: 100%;
`;

const SImage = styled.img`
  width: 100%;
  border-radius: 30px;
`;

const SButtonWrapper = styled.div`
  display: flex;
`;

const SButtonMargin = styled.div`
  margin-top: 5%;
`;

const RowReverce = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 30px 20px;
`;
