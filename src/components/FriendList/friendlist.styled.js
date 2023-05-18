import styled from '@emotion/styled';

export const ItemFriend = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0;
  padding-top: 30px;
  padding-bottom: 30px;

  width: 350px;
  list-style-type: none;
  background-color: #ffff;
  border-radius: 10px;
`;

export const CartFriend = styled.li`
  display: flex;
  padding: 12px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: flex-start;

  border: 2px solid #111111;
  border-radius: 20px;
  box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.75);
  background-color: #dcdcdc;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ffffff;
    box-shadow: none;
    transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

export const FriendName = styled.p`
  font-size: 20px;
  line-height: 1.62;
  font-weight: 18px;
  margin-left: 20px;
  text-shadow: rgb(0, 0, 0) 1px 1px 1px;
`;

export const StatusFriend = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
export const AvatarName = styled.img`
  padding: 10px;
  width: 60px;
  border: 2px solid #808080;
  border-radius: 20px;
  box-shadow: 10px 10px 16px -5px rgba(0, 0, 0, 0.75);
`;
