import styled from 'styled-components';

interface DropdownInterface {
  isShowing: boolean;
}

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 10px;
  background: var(--white);
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  h2 {
    color: var(--primaryDark);
  }
`;

export const DropDown = styled.div<DropdownInterface>`
  position: absolute;
  right: 15px;
  top: calc(100% + 15px);
  width: 256px;
  padding: 0px;
  background: rgb(32, 32, 36);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 20px;
  transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  visibility: ${({ isShowing }) => (isShowing ? 'visible' : 'hidden')};

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 19px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent rgb(32, 32, 36);
  }
`;
