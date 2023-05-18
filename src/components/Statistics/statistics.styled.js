import styled from '@emotion/styled';

export const StatisticsName = styled.section`
  width: 350px;
  border: 2px solid #696969;
  margin: 0 auto;
  padding: 0;
`;

export const Title = styled.h2`
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;

  text-transform: uppercase;
  text-align: center;
  color: #808080;
  background-color: white;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 0;
  padding: 10px;

  text-align: center;
  color: #ffffff;
  width: 70px;
`;

export const StatLabel = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const StatPercentage = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
