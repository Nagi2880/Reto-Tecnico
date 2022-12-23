import React from 'react';
import NaveCard from '../elements/NaveCard';
import styles from './components.module.css';

export default function Body() {
  return (
    <div className='d-flex justify-content-around' id={styles.cardcontainer}>
        <NaveCard
       title="Vehículos Lanzadera"
       URIimage="./lanzadera.jpg"
       route="/naves/lanzaderas" />
       <NaveCard
       title="Naves Espaciales no tripuladas"
       URIimage="./Naves-no-tripuladas.jpg"
       route="/naves/no-tripuladas"
       />
       <NaveCard
       title="Naves Espaciales tripuladas"
       URIimage="./Naves-espaciales-tripuladas.jpg"
       route="/naves/si-tripuladas"
       />
       <NaveCard
       title="Todas las Naves"
       URIimage="https://moaramoredotcom.files.wordpress.com/2016/05/soyuz_tma-7_spacecraft2edit1.jpg?w=300&h=199"
       route="/naves"
       />
    </div>
  )
}
