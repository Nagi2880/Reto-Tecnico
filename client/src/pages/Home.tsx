import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import styles from './pages.module.css'
export default function Home() {
  return (
    <div id={styles.page} >
        <Header />
        <Body />
    </div>
  )
}
