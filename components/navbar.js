import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/main.module.css'

export default function Navbar() {
  return (
    <div className={styles.Header}>
     <div style="full-screen-menu">
                <a href="#" id="menu-icon"><i className="fa fa-bars"></i></a>
                <a href="/index.html">
                  <img src="images/white-logo.png" alt="Logo"/>
                </a>
              </div>
           
            <div id="mobile-menubar">
              <a href="#" id="close-icon"><i className="fa fa-close"></i></a>
              <ul className="overlay-nav-menu">
                <li className="active"><a href="#">Build Your Team</a></li>
                <li><a href="#">Our Innovations</a>
                  <ul className="menu-sub-menu">
                    <li><a href="./nearbuzz.html">Nearbuzz</a></li>
                    <li><a href="./telkom.html">Telkom</a></li>
                    <li><a href="./washapp.html">WashApp</a></li>
                  </ul>
                </li>
                <li><a href="./blogs/list.html">Blog</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="https://www.notion.so/Hyno-Job-Centre-175ceada67a3468c941370f40836ebae">Join our teams</a></li>
              </ul>
            </div>
            <div class="nav right-link">
              <a href="mailto:hello@hyno.co">Email: hello@hyno.co</a>
            </div>
       </div>
  )
}
