import './Produto.css'
import Button from '../Botao/Button'

function Produto({image, imgAlt, productName, productType, author}){
    return(
        <div className="product-main-box">
            <div className="product-left-side">
                <image className="product-image" src={image} alt={imgAlt} />
                <p className="img-zoom-inst">Passe o mouse para ampliar a imagem</p>
                <Button/>
                <div className="divider"/>
            </div>{/* product-left-side */}
            
            <div className="product-right-side">
                <h1 className="title-text">{productName} <span className="light-title-text">{productType}</span></h1>
                <div className="product-author"> 
                    <span>por: </span>
                    <span><a className="author-link">{author}</a> (autor)</span>
                    <span className="text-divider">|</span>
                    <span>Formato:<a className="author-link">{productType}</a></span>                     
                </div>{/* product-author */}
            </div>{/* product-right-side */}
        </div>/* product-main-box */
    )
}

export default Produto;
