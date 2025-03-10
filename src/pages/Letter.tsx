import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TitleText = styled.h1`
  font-family: "Gaegu", cursive;
  font-size: 30px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: black;
  margin-bottom: 15px;
  margin-top: 0px;
`;

const LetterPaper = styled.div`
  width: 600px;
  height: 400px;
  background-color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const LetterText = styled.p`
  font-family: "Gaegu", cursive;
  line-height: 24px;
  position: relative;
`;

const WaveLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 20px,
    black 21px,
    black 22px,
    transparent 23px
  );
  opacity: 0.05;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const LetterPage: React.FC = () => {
  const videoOptions = {
    width: "600",
    height: "338",
  };

  return (
    <LetterContainer>
      <TitleText>사랑하는 가영이에게</TitleText>
      <LetterPaper>
        <WaveLines />
        <LetterText>
        가영아, 생일 축하해!
오늘은 네가 주인공인 날이니까, 진심으로 축하하고 싶어. 요즘 어떻게 지내? 바쁘게 달리고 있는 거 알지만, 가끔은 나랑 같이 천천히 커피 한 잔 할 시간도 가지자. 나는 네가 항상 긍정적이고 열정적으로 살고 있어서 정말 존경해. 달리기를 좋아하는 너의 모습 보면, 늘 에너지가 넘쳐서 나도 자극받고 있어.

항상 힘들 때마다 웃으면서 힘내는 너를 보면 내가 더 많은 걸 배워. 우리가 같이 있을 때는 늘 시간 가는 줄 모르고, 소소한 일상도 너무 즐겁고 행복해. 네가 있어서 내 일상이 훨씬 더 다채롭고 즐거워져.

이번 생일엔 네가 원하는 모든 것들이 이루어지길 바래. 또 앞으로도 같이 달리면서 멋진 추억 많이 쌓자! 사랑해, 가영아. 올해도 건강하고 행복하게 지내자!
          <br />
          사랑해!
        </LetterText>
      </LetterPaper>
      <VideoWrapper>
        <TitleText>Listen to the Song 🎤</TitleText>
        <YouTube videoId="Mcp1UhXsyU4" opts={videoOptions} />
      </VideoWrapper>
    </LetterContainer>
  );
};

export default LetterPage;
