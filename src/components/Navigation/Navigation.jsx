import React from 'react';

import { Link } from 'react-router-dom';

import { navItems } from '@data/navigation';

const Navigation = () => {
  return (
    <div className="flex gap-10">
      {navItems.map(({ name, slug }) => (
        <Link key={slug} to={slug}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
