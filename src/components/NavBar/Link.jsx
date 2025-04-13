import React from 'react';

const Link = ({ route }) => {
  return (
    <div>
      <li className='lg:mr-10 px-4 hover:bg-amber-400 text-center'>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;