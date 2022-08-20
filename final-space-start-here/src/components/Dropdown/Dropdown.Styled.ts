import styled from "styled-components";

export const TitleAndDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ActiveTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100px;

  h1 {
    font-weight: 300;
    margin-left: 25px;
    letter-spacing: 1.5px;
    cursor: default;
  }
`;

export const DownArrow = styled.div`
  font-size: 34px;
  padding-top: 3px;
  margin-left: 6px;
  cursor: pointer;
`;

export const UpArrow = styled.div`
  font-size: 34px;
  padding-top: 3px;
  margin-left: 6px;
  cursor: pointer;
  color: var(--color-blue);
`;

export const DropdownMenu = styled.div`
  background: var(--color-bg-dark);
  color: var(--color-white);
  font-family: "Poppins", sans-serif;
  width: 200px;
  margin-top: 100px;
  display: flex;
  position: absolute;
  z-index: 2;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0 0 15px 15px;
`;

export const DropdownList = styled.ul`
  margin-bottom: 30px;
  margin-left: 25px;

  li {
    list-style: none;
    margin-bottom: 12px;
    cursor: pointer;
  }
`;
