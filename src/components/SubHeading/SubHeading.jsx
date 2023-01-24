import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon_image'/>
    <p className='p__opensans' style={{ margin: '2rem 0' }}>{title}</p>
    <button type="button" className='custom__button'>Explore menu</button>
  </div>
);

export default SubHeading;
