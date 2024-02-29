import './Produto.css'
import Button from '../Botao/Button'
import Img1 from '../../img/img-placeholder.jpg'

function Produto({image, imgAlt, productName, productType, author, authorLink, description }){
    const img1 =  Img1;

    return(
        <div class="product-main-box">
        <div class="product-left-side">
            <div class="image-box">
                <image class="product-image" src="./img-placeholder.jpg" alt="produto-imagem"/>
            </div> {/*<!--image-box-->*/}
            <p class="img-zoom-inst">Passe o mouse para ampliar a imagem</p>
            
            <div class="divider"></div>
        </div>{/* product-left-side */} 
        
        <div class="product-right-side">
            <h1 class="title-text">LiVRO <span class="light-title-text">LIVROCINZA</span></h1>
 
            <div class="product-author"> 
                <span>por: </span>
                <span><a href="" class="author-link">Roberto Rubens</a> (Autor)</span>
                <span><a href="" class="author-link">Roberta Rubems</a> (Tradutor)</span>
                <span class="text-divider">|</span>
                <span>Formato: <a class="author-link">LivroTIPO</a></span>
            </div>{/* product-author */} 
            <div class='divider'></div>
            <div class='product-description'>
                <p class='product-description-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates soluta asperiores natus at dolores recusandae, quae veritatis rerum cumque. Cumque culpa dolore voluptas quo sint autem quasi? Sequi, excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates soluta asperiores natus at dolores recusandae, quae veritatis rerum cumque. Cumque culpa dolore voluptas quo sint autem quasi? Sequi, excepturiLorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates soluta asperiores natus at dolores recusandae, quae veritatis rerum cumque. Cumque culpa dolore voluptas quo sint autem quasi? Sequi, excepturiLorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates soluta asperiores natus at dolores recusandae, quae veritatis rerum cumque. Cumque culpa dolore voluptas quo sint autem quasi? Sequi, excepturiLorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptates soluta asperiores natus at dolores recusandae, quae veritatis rerum cumque. Cumque culpa dolore voluptas quo sint autem quasi? Sequi, excepturi
                </p>
            </div> {/* product-description */}
        </div> {/* product-right-side */} 
    </div> /* product-main-box */
    )
}

export default Produto;
