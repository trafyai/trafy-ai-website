import React from 'react';
import '@styles/landing-page/LandingPage.css';
import Image from 'next/image';
import efficiency from '@public/assets/images/landing-page/research/efficiency.svg'
import privacy from '@public/assets/images/landing-page/research/privacy.svg'
import adapt from '@public/assets/images/landing-page/research/adapt.svg'
import integrate from '@public/assets/images/landing-page/research/integrate.svg'


export const LandingResearchData = [
  {
    id: 1, // Assuming adding a unique ID for better key usage
    title: 'Efficiency',
    img: efficiency,
    description: 'Increased number of parameters, that can self train perform multiple analysis.'
  },
  {
    id: 2,
    title: 'Privacy',
    img: privacy,
    description: 'Fully encrypted system to secure user generated and self training data.'
  },
  {
    id: 3,
    title: 'Adaptability',
    img: adapt,
    description: 'Preprogrammed widget based call for api for fast deployment.'
  },
  {
    id: 4,
    title: 'Integrations',
    img: integrate,
    description: 'Flexible Integration protocols that can network with other agents.'
  },
];

const LandingResearchSection = () => {
  return (
    <div className="landing-research">
      <div className="landing-research-container">
        <div className="landing-research-left">
          <h2>Research</h2>
          <p>Innovative research driving AI advancements through self-learning, security, rapid deployment, and seamless networking.</p>
        </div>
        <div className="landing-research-right">
          {LandingResearchData.map((data) => (
            <div className="landing-research-right-box" key={data.id}>
            <div className="landing-research-right-box-heading">
              <Image src={data.img} alt={data.title}/>
              <h3>{data.title}</h3>
            </div>  
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingResearchSection;
