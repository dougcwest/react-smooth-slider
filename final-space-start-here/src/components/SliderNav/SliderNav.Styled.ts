import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--color-text-offset);

  .menu-title {
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    background: none;
    font-size: 16px;
    outline: none;
    border: none;
    padding: 0;
    margin-bottom: 20px;
    color: var(--color-white);
  }

  .menu-title-active {
    min-width: 150px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 8px;
    background: none;
    font-size: 16px;
    outline: none;
    border: none;
    color: var(--color-pink);
  }

  @media only screen and (max-width: 360px) {
    .menu-title {
      min-width: 100px;
    }
    .menu-title-active {
      min-width: 100px;
    }
  }

  .menu-title-active:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 55%;
    color: var(--color-pink);
    padding-top: 8px;
    border-radius: 0 0 5px 5px;
    border-bottom: 5px solid var(--color-pink);
  }
`;

export const MenuTitle = styled.div`
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  background: none;
  font-size: 16px;
  outline: none;
  border: none;
  padding: 0;
  margin-bottom: 20px;
  color: var(--color-white);

  @media (max-width: 360px) {
    min-width: 100px;
  }
`;

export const MenuTitleActive = styled.div`
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 8px;
  background: none;
  font-size: 16px;
  outline: none;
  border: none;
  color: var(--color-pink);

  @media (max-width: 360px) {
    min-width: 100px;
  }

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 55%;
    color: var(--color-pink);
    padding-top: 8px;
    border-radius: 0 0 5px 5px;
    border-bottom: 5px solid var(--color-pink);
  }
`;
