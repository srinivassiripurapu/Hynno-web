import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Services from '../components/services'
import Footer from '../components/footer'
import CustomerStories from '../components/customerStories'
import Navbar from '../components/navbar'
import Products from '../components/products'

export default function Home() {
  return (
    <div className={styles.landingPage}>
        <Head>
        <title>Home | Hyno Technologies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta name="description" content="Home"/>
        
      </Head>
    <Navbar/>
    <div className={styles.leftMargin}>
     <Services/>
    {/* <Products/> */}
    </div>
    {/* <CustomerStories/>
    <Footer/> */}
    </div>
  )
}
