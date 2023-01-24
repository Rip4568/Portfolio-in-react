/* eslint-disable jsx-a11y/anchor-has-content */
/* src/components/Navbar/Navbar.tsx */
import * as React from 'react';
import styles from './Navbar.module.scss';
import styled from 'styled-components'

export default function Navbar(props): React.ComponentElement<any, any> {
  /* adicionar listeners aos elementos buscados pelos querySelectorAll
  para quando eles forem clicados executar determinada ação */
  const listenLinks = () => {
    const links = document.querySelectorAll('a.link');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        //event.preventDefault();
        links.forEach((link) => {
          link.classList.remove('active');
        });

        link.classList.add('active');
      })
    });
  }

  /* toda vez que o componente for montado executar a função */
  React.useEffect(() => {
    listenLinks();
  }, []);

  return (
    //TODO: colocar mais uma div englobando os links de navegação
    //! aplicar uma div para conter um logo */
    //TODO: aplicar uma div para conter icones de rede social como linkedin e GitHub *
    //TODO: melhorar a estrutura do componente para dispositivos moveis, botões estão sendo comprimidos
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.links}>
          <a href="#home" className='link active'>Home</a>
          <a href="#projetos" className='link'>Projetos</a>
          <a href="#skills" className='link'>Skills</a>
          <a href="#about-me" className='link'>Contato</a>
        </div>
      </nav>
      <div className={styles.linksSociais}>
        <a href="#/github" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="#/linkedin" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="tel:+5573982472606" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
        {/* <a href="#/<a href="whatsapp://send?phone=+5573982472606">+5573982472606</a>" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a> */}
        <a href="mailto:jhone.test14@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
      </div>
    </main>
  )
}
  // eslint-disable-next-line no-lone-blocks
  {/* <main className={styles.main}>
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a href="#home" className='link active'>Home</a>
        <a href="#about-me" className='link'>Contato</a>
        <a href="#skills" className='link'>Skills</a>
        <a href="#projetos" className='link'>Projetos</a>
      </div>
    </nav>
  </main> 
*/}
/* 
:root {
  --color-primary:#155f91;
  --color-secondary: #006c91;
  --color-tertiary: #00899a;
  --color-accent-dark: #00b7a5;
  --color-accent: #5cf8ad;
}
 
*/
