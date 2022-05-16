import React from 'react';

import BackgroundImage from 'gatsby-background-image'

function superSection({img, title, subtitle, superClass}) {
    return (
        <BackgroundImage
        className={superClass}
        fluid={img}
      >
        <h2 className='text-white text-center text-uppercase'>{title}</h2>
        <h4 className='text-center text-uppercase text-warning'>{subtitle}</h4>
      </BackgroundImage>
    );
}

export default superSection;