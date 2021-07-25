// components
import Footer from './components/Footer';
import Generate from './components/Generate';
import Header from './components/Header';
import AppWrapper from './components/AppWrapper';

// data
import companies from './data/companies';
import socialLinks from './data/socialLinks';
import users from './data/users';

const App = () => (
	<AppWrapper>
		<Header headingText='Startup Generator' />
		<Generate companies={companies} users={users} />
		<Footer socialLinks={socialLinks} />
	</AppWrapper>
);

export default App;
