import styled from 'styled-components';
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  background-color: #1890ff;
`;

export const HeaderNavBar = styled.div`
  & .nav {
    position: relative;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;

    & > li > a {
      padding: 14px 30px;
      line-height: 46px;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
    & li:hover .subNav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & > li:hover {
      background-color: #a0d911;
      cursor: pointer;
      &:hover a {
        color: #000;
      }
    }
  }
`;
