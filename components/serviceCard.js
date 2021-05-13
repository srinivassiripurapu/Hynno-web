import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Row,Col } from 'react-bootstrap';

export default function ServiceCard(name,url,imgpath,content) {
  return (
    <div className={styles.serviceCardContainer}>
      <Row>
    <div className="col-6"><div className={styles.serviceCardContainerHeading}>Digital Transformation</div></div>
    <div className="col-4"> <div className={styles.serviceCardContainerImgOuter}>
        <div className={styles.serviceCardContainerImgInner}> 
          Img
        </div>
      </div>
      </div>
     
      </Row>
      <div className={styles.serviceCardContainerContent}>We are well versed with the value of customer experience and our quintessential team of user experience designers ensures that our services are compelling, engaging and provide an enriched experience.</div>
       </div>
  )
}
