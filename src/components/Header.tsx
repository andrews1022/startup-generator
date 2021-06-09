import React from 'react';

interface HeaderProps {
	headingText: string;
}

const Header = ({ headingText }: HeaderProps) => (
	<header className='header' data-test='component-header'>
		<h1 className='header__title'>{headingText}</h1>
		<p className='header__tagline'>
			Got developers block? Use this app to generate a random startup, and then get building!
		</p>
	</header>
);

export default Header;
