import styled from 'styled-components';
export const Description = styled.div`
  background-color: white;
  padding: 10px;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid #d6d6d6;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
`;
export const Name = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #9e9b9b;
`;

export const Tag = styled.p`
  color: #7f7a7a;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
`;
export const Location = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #837d7d;
  margin-bottom: 15px;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;
  font-size: 15px;
  color: #595252;
  font-weight: 600;
`;
export const Wrap = styled.li`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  border: 1px solid #918b8b;
  justify-content: center;
  align-items: center;
  background-color: rgb(216 216 216);
  width: 100px;
`;
export const Quantity = styled.span`
  font-size: 18px;
  color: #413e3e;
  font-weight: 700;
`;
