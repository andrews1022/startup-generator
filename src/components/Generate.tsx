import React, { useState } from 'react';

interface GenerateProps {
	companies: string[];
	users: string[];
}

const Generate = ({ companies, users }: GenerateProps) => {
	const [message, setMessage] = useState<string>('');

	const generateMessage = (): void => {
		const randomCompany = companies[Math.floor(Math.random() * companies.length)];
		const randomUser = users[Math.floor(Math.random() * users.length)];
		const response = `Well, it's like ${randomCompany}, but for ${randomUser}!`;
		setMessage(response);
	};

	return (
		<div className='generate'>
			<p className='generate__text'>"Hey! I got this great idea for a start-up!"</p>
			<p className='generate__text'>"Yeah? What's it about?"</p>
			<button className='generate__btn' onClick={generateMessage}>
				Generate
			</button>
			<p className='generate__text'>{message ? message : '\u00A0'}</p>
		</div>
	);
};

export default Generate;
