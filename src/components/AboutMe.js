import React from 'react';
import './AboutMe.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutMe = () => (
  <div className="row" id="AboutMe">
    <h2 className="col-12 d-block d-md-none underline">About Me</h2>
    <div className="col-12 col-md-4">
      <img src={require('./../IMG_1654.jpg')} alt="about me" className="AboutMe__image"/>
    </div>
    <div className="col-12 col-md-8 no-gutters">
      <h2 className="col-12 d-none d-md-block underline">About Me</h2>
      <p className="col-12">
        Ut ex in ham hock cillum, corned beef burgdoggen salami ribeye. Deserunt sunt tongue, short ribs sed tail sint enim commodo irure dolor occaecat incididunt. Sirloin et excepteur, turkey capicola shankle eiusmod. T-bone shankle nostrud in ex nisi hamburger rump tenderloin sint esse ground round nulla sunt.
        Officia ut pig kevin. Leberkas mollit eu in chuck. Elit tenderloin turkey, pork loin laboris non cow incididunt tri-tip tempor. T-bone short loin ham hock sirloin eiusmod, sunt aliquip voluptate.
        Kielbasa ex short ribs duis sed elit venison, tri-tip et burgdoggen andouille pariatur esse short loin dolore. Qui prosciutto sed tail. Rump tempor kielbasa do. Consequat drumstick strip steak, chuck boudin culpa laborum burgdoggen jerky.
      </p>
    </div>
  </div>
);

export default AboutMe;