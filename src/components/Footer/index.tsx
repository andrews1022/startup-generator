// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// styled components
import Copy from '../Copy';
import { IconLink, IconRow } from './styles';

// util
import getCurrentYear from '../../util/getCurrentYear';

// types
import { SocialLink } from '../../types/types';

// props
type FooterProps = {
	socialLinks: SocialLink[];
};

const Footer = ({ socialLinks }: FooterProps) => (
	<footer>
		<Copy>© {getCurrentYear()} all rights reserved. designed and built and andrew shearer</Copy>

		<IconRow>
			{socialLinks.map((link) => (
				<IconLink key={link.site} href={link.url} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon={link.site === 'GitHub' ? faGithub : faTwitter} size='lg' />
				</IconLink>
			))}
		</IconRow>
	</footer>
);
export default Footer;
