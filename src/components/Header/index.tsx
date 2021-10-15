// styled components
import Copy from '../Copy';
import Heading from '../Heading';

interface HeaderProps {
	headingText: string;
}

const Header = ({ headingText }: HeaderProps) => (
	<header>
		<Heading>{headingText}</Heading>

		<Copy>
			Got developers block? Use this app to generate a random startup, and then get building!
		</Copy>
	</header>
);

export default Header;
