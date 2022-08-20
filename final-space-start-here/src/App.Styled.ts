import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--color-white);
  font-family: "Poppins", sans-serif;

  .down-arrow {
    font-size: 34px;
    padding-top: 3px;
    margin-left: 6px;
    cursor: pointer;
  }

  .up-arrow {
    font-size: 34px;
    padding-top: 3px;
    margin-left: 6px;
    cursor: pointer;
    color: var(--color-blue);
  }
`;
