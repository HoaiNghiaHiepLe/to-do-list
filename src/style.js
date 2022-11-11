import styled, { css } from 'styled-components';

export const Globalcontainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;
export const MainContent = styled.div`
  width: 100%;
  margin-right: 0;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.isShowSidebar &&
    css`
      margin-right: 200px;
      width: calc(100% - 200px);
    `}
`;
