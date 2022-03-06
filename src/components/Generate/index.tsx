import React, { useState } from 'react';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';
import { Copy } from '../UI/Copy';

// util
import { getRandomArrayIndex } from '../../utils/getRandomArrayIndex';

// data
import companies from '../../data/companies';
import users from '../../data/users';

const Generate = () => {
  const [message, setMessage] = useState('');

  const generateMessage = (): void => {
    const randomCompany = companies[getRandomArrayIndex(companies)];
    const randomUser = users[getRandomArrayIndex(users)];

    const completeMessage = `Well, it's like ${randomCompany}, but for ${randomUser}!`;

    setMessage(completeMessage);
  };

  return (
    <S.Wrapper>
      <Copy>&quot;Hey! I got this great idea for a start-up!&quot;</Copy>
      <Copy>&quot;Yeah? What&apos;s it about?&quot;</Copy>

      <Button onClick={generateMessage} type='button'>
        Generate
      </Button>

      <Copy>{message || '\u00A0'}</Copy>
    </S.Wrapper>
  );
};

export default Generate;
