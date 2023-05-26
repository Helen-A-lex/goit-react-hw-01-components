import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  width: 300px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #bebebe;
  padding: 7px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  background-color: white;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
export const Status = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border: 2px solid #171616;
  border-radius: 50%;
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
`;
