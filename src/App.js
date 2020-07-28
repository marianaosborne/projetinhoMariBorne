import React from 'react';
import Menu from './Componentes/Menu';
import DadosIniciais from './data/dados_iniciais.json';
import BannerMain from './Componentes/BannerMain';
import Carousel from './Componentes/Carousel';
import Footer from './Componentes/Footer';




function App() {
  return (
    <div style={{background:"#1d1d1d"}}>
      <Menu />
      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={"O Que Faço da Minha Vida"}
        url={DadosIniciais.categorias[0].videos[0].url}
      />
      <Carousel
      ignoreFirstVideo
      category={DadosIniciais.categorias[0]}
      />

      <Carousel
      
      category={DadosIniciais.categorias[1]}
      />

      <Carousel
      
      category={DadosIniciais.categorias[2]}
      />

      <Footer/>

    </div>
  );
}

export default App;
