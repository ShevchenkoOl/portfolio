import { FiMail } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

import { List, Item, Link } from './Contacts.style';

function Contacts() {
  return (
    <List>
      <Item>
        <Link
          href="mailto:uzlabini@gmail.com"
          aria-label="E-mail"
          title="uzlabini@gmail.com"
        >
          <FiMail size="40" />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://github.com/shevchenkool/"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="My GitHub profile"
        >
          <AiFillGithub size="40" />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.linkedin.com/in/oleksii-shevchenko-535ab61b8"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="My LinkedIn profile"
        >
          <FaLinkedin size="40" />
        </Link>
      </Item>
    </List>
  );
}

export default Contacts;
