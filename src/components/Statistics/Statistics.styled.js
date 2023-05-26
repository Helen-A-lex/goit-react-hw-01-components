import styled from 'styled-components';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Section = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const Title = styled.h2`
  font-family: sans-serif;
  text-transform: uppercase;

  color: rgb(137, 129, 129);
  line-height: 1.07;

  background-color: white;
  width: 300px;
  height: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 35px;
`;
export const StatList = styled.ul`
  display: flex;

  justify-content: center;

  width: 300px;
  margin-right: auto;
  margin-left: auto;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 600;
  color: #fbfbfb;
  border: 1px solid #b39d9d;
  padding: 5px;
  width: 100%;
`;
