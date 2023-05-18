import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;

  background-color: #f0ffff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;

  width: 350px;
  text-align: center;
  border: 2px solid #111111;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #bc8f8f;
`;

export const Avatar = styled.img`
  display: block;
  margin-top: 20px;

  border-radius: 50%;
  border: 2px solid #111111;
  width: 200px;
  background-color: #faebd7;
  box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.75);
`;

export const Name = styled.p`
  margin-top: 20px;

  font-size: 28px;
  line-height: 1.62;
  font-weight: 700;
  color: #000000;
`;
export const TextInfo = styled.p`
  margin-top: 8px;
  font-size: 20px;
  line-height: 1.58;
  font-weight: 600;
  color: #000000;
`;

export const ContainerStats = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0 40px;
  list-style-type: none;
  align-items: center;
  justify-content: center;

  width: 350px;
  border-top: none;
  border: 2px solid #111111;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ListStats = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;

  :not(:last-child) {
    border-right: 2px solid #111111;
  }
`;

export const SpanLabel = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.62;
  font-weight: 600;
  color: #808080;
`;

export const SpanQuantity = styled.span`
  text-align: center;
  font-size: 28px;
  line-height: 1.62;
  font-weight: 700;
  color: #000000;
`;
