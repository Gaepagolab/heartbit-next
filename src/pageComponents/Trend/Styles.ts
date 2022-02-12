import styled from "styled-components";

export const Root = styled.div`
  padding: 40px 24px;
  height: 100vh;
  overflow-y: auto;
`;

export const FirstSection = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 5fr;
  gap: 16px;
  margin-bottom: 16px;
`;

export const AdWrapper = styled.div`
  height: 140px;
`;

export const SecondSection = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1.85fr 1fr;
  grid-auto-rows: auto;
  gap: 16px;
`;

export const Iframe = styled.iframe`
  width: 100%;
  min-height: 576px;
`;

export const Volatilties = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
`;
