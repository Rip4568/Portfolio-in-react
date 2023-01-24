/* src/compoents/Hero/Hero.tsx */
import * as React from 'react';
import styles from './Hero.module.scss'
//importe o fotoAboutRemoveBg
import foto from '../../assets/imgs/foto-about-removebg-preview.png'



export default function Hero(props): React.ComponentElement<any, any> {
  /* a hero é praticamente o Home da pagina */
  return (
    <React.Fragment>
      <div className={styles.hero} id='home'>
        {/* fazer outra div somente para apresentação
         e outra para imagem */}
        <div className="content">
          <div className={styles.apresentation}>
            <h3 className='hello'>Ola, me chamo</h3>
            <h1 className={styles.name}>Jonathas David</h1>
            <h4 className='resume'>E estou trilhando o meu caminho para
              ser um desenvolvedor full-stack</h4>
              <button className="btn btn-success">HIRE</button>
          </div>
          <div className="picture">
            <img alt="" src={foto} className={styles.myPicture} />
          </div>
          {/* <div className={styles.myImage}>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  )
}