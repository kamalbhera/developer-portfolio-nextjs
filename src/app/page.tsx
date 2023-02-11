import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import About from "../components/About";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navbar /> */}
      <About/>
      <Main/>
      <Skills/>
      <Projects />
      <Contact/>
    </main>
  )
}
