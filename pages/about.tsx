import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div>
      This is a static page goto{' '}
      <Link href="/">
        <a>dynamic</a>
      </Link>{' '}
      page.
    </div>
  );
};

export default About;
