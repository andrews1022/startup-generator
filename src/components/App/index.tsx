// components
import Footer from '../Footer';
import Generate from '../Generate';
import Header from '../Header';

// styles
import AppWrapper from './styles';

// data
import companies from '../../data/companies';
import socialLinks from '../../data/socialLinks';
import users from '../../data/users';

const App = () => (
	<AppWrapper>
		<Header headingText='Startup Generator' />
		<Generate companies={companies} users={users} />
		<Footer socialLinks={socialLinks} />
	</AppWrapper>
);

export default App;
