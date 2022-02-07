import React from 'react';

// components
import Footer from '../Footer';
import Generate from '../Generate';
import Header from '../Header';

// styles
import * as S from './styles';

const App = () => (
	<S.Wrapper>
		<Header />
		<Generate />
		<Footer />
	</S.Wrapper>
);

export default App;
