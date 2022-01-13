import { useState } from 'react';

// styled components
import Copy from '../Copy';
import { GenerateButton, GenerateWrapper } from './styles';

// util
import getRandomArrayIndex from '../../util/getRandomArrayIndex';

// props
type GenerateProps = {
	companies: string[];
	users: string[];
};

const Generate = ({ companies, users }: GenerateProps) => {
	const [message, setMessage] = useState('');

	const generateMessage = (): void => {
		const randomCompany = companies[getRandomArrayIndex(companies)];
		const randomUser = users[getRandomArrayIndex(users)];

		const completeMessage = `Well, it's like ${randomCompany}, but for ${randomUser}!`;

		setMessage(completeMessage);
	};

	return (
		<GenerateWrapper>
			<Copy>&quot;Hey! I got this great idea for a start-up!&quot;</Copy>
			<Copy>&quot;Yeah? What&apos;s it about?&quot;</Copy>

			<GenerateButton onClick={generateMessage} type='button'>
				Generate
			</GenerateButton>

			<Copy>{message || '\u00A0'}</Copy>
		</GenerateWrapper>
	);
};

export default Generate;
