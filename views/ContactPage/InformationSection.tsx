import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Контактная информация</h3>
      <p>
        <span>Email:</span> info@traektoria-obr.ru
      </p>
      <p>
        <span>Телефон:</span> +79220088008
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
    margin-bottom: 10px;
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
