import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ServiceCard from './serviceCard'
import { Row,Col } from 'react-bootstrap';

export default function Service() {
  return (
    
  
    <section >
         <h3 className={styles.serviceHeader}>Services</h3>
           <div className={styles.serviceOuterDiv}>
          <p className={styles.serviceOuterDiv3}>From providing mobility services to dealing with quality assurance, we’ve covered it all.
            Let us marvel you with the richness and variety of our services. </p>
            <br/>
            
          <p className={styles.serviceOuterDiv1} style={{margin:"0px"}}>Cannot find what you’re looking for?<a className={styles.serviceOuterDiv2} href='#'> Let us know.</a></p>
          </div>
      <Row>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        </Row>
        <Row>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
       </Row>
       </section>
      //git
      
  )
}
