import React from 'react'
import styles from './elements.module.css'

  function NaveCard ({URIimage,title,route}: any){
  return (
    <a href={route}>  
      <div id={styles.cardcontainer} className="   col-sm-12">
          <img className='col-sm-12'  id={styles.backgroundimage} alt="typenave" src={URIimage} />
          <footer id={styles.Typetitlecontainer}>
              <span id={styles.title}>{title}</span>
          </footer>
      </div>
    </a>  
    
  )
}
export default NaveCard