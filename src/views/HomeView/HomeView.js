import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import image from '../../assets/images/imege-IT.jpg';
import PropTypes from 'prop-types';
import { Wrapper, Flex, Title, Info, SubTitle, List } from './HomeView.style';

function HomeView() {
  return (
    <>
      <Wrapper>
        <Flex>
          <Title>Hi there!</Title>
          <Info>My name's Oleksii and I’m a Full Stack Developer!</Info>
        </Flex>
        <Flex>
          <img
            src={image}
            alt="Oleksii Shevchenko"
            width="360"
            height="265"
          />
        </Flex>
      </Wrapper>
      <SubTitle>Tech Skills</SubTitle>
      <List>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </List>
      <SubTitle>Contacts</SubTitle>
      <Contacts />
    </>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
