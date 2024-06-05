import Banner from '../components/Banner';
import CollapseBar from '../components/CollapseBar';
import '../styles/About.scss';
import aboutList from '../data/aboutList';


function About () {
  
  return (
    <div>
      <Banner isAboutPage />
      <div className="about">
      <CollapseBar list={aboutList} />
      </div>
    </div>
  );
}

export default About;