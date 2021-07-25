import { useState } from 'react';
import { GenerateWrapper, GenerateButton } from './styles';
import Copy from '../Copy';

interface GenerateProps {
	companies: string[];
	users: string[];
}

const Generate = ({ companies, users }: GenerateProps) => {
	const [message, setMessage] = useState('');

	const generateMessage = (): void => {
		const randomCompany = companies[Math.floor(Math.random() * companies.length)];
		const randomUser = users[Math.floor(Math.random() * users.length)];
		const response = `Well, it's like ${randomCompany}, but for ${randomUser}!`;
		setMessage(response);
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
