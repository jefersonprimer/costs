import { Link } from 'react-router-dom'; 

// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy Cost - 2024</p>
      <p>
        <Link to="#" style={styles.link}> Termos de Uso</Link>
        <Link to="#" style={styles.link}>PolíticLink de Privacidade</Link> | 
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '3em',
    backgroundColor: '#222',
    color: 'white',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Footer;
