import React from 'react';
import styles from './components.module.css'
function Header() {
  return (
    <header className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' id={styles.header}>
      <span id={styles.nasalogo} className="d-flex align-items-center justify-content-center">
        <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="nasalogo" />
        <h1>NASA Ship inventory tool</h1>
      </span>
    </header>
  )
}

export default Header