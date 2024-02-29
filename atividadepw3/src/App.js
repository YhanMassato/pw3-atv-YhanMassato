import './App.css';
import Produto from './components/Produto/Produto';

import image from "./img/img-placeholder.jpg";

var desc = "Todos nós conhecemos a Lua. Todos temos uma relação com ela. Todos somos afetados por suas fases. Os povos antigos faziam rituais em sua homenagem, seguiam sua órbita e organizavam o tempo, os feriados, as celebrações e as colheitas de acordo com ela. Mesmo que tenhamos nos distanciado dessa conexão poderosa, os ecos desse sistema ancestral permanecem.Dependendo do momento em que nos encontramos na vida, do que sentimos ou do que está acontecendo ao redor, a Lua pode iluminar caminhos com diversos rituais e hábitos facilmente incorporados ao nosso cotidiano. O livro da Lua é um guia abrangente para uma vida lunar, que inclui ferramentas e recursos e proporciona a estrutura necessária para utilizar o ciclo lunar e estabelecer um relacionamento com nós mesmos."

let livro = image;

function App() {
  return (
    <div className="App">
      <div className="header">  
      </div>
      <Produto
        image={livro}
        imgAlt="Imagem capa Livro da Lua"
        productName="O Livro da Lua"
        productType="Livro físico"
        author="Sarah Feith G."
        authorLink="/"
        traslator="Lígia Azevedo"
        translatorLink="/"
        description={desc}
      />
    </div>
  );
}

export default App;
