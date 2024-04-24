import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return (
    <LogoContainer>
      <LogoImage src='./logo_to.png' alt='Company Logo' />
      <h2>Траектория Образования</h2>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const LogoImage = styled.img`
  margin-right: 20px;
`;