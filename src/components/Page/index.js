import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="page">
      {children}
    </main>
  );
};
Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
