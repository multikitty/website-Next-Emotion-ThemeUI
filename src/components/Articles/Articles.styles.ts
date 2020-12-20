import styled from "@emotion/styled";

export const ArticlesContainer = styled.div`
  width: 100%;
  max-width: 700px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  margin: 0 auto;
`;

export const ArticlesTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: calc(64px + (48 - 64) * ((100vw - 300px) / (1600 - 300)));
  line-height: 87px;
  letter-spacing: -0.03em;
  color: #101010;
`;
