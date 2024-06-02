import Banner from '../components/Banner';
import CollapseBar from '../components/CollapseBar';
import '../styles/About.scss';
import aboutList from '../data/aboutList';


function About () {
  
  return (
    <div>
      <Banner isAboutPage />
      <CollapseBar list={aboutList} />
    </div>
  );
}

export default About;