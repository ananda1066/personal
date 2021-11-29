import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alisha Nanda <Link to="/">ananda1066.github.io/personal</Link>.</p>
    </section>
  </section>
);

export default SideBar;
