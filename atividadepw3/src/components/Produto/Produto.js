import './Produto.css'
import Button from '../Botao/Button'
import Img1 from '../../img/img-placeholder.jpg'

function Produto({image, imgAlt, productName, productType, author, authorLink, description }){
    const img1 =  Img1;

    return(
        <div className="product-main-box">
            <div className="product-left-side">
                <div className="image-box">
                    <image className="product-image" src={image} alt={imgAlt}/>
                </div>{/* image-box */}
                <p className="img-zoom-inst">Passe o mouse para ampliar a imagem</p>
                <Button/>
                <div className="divider"/>
            </div>{/* product-left-side */}
            
            <div className="product-right-side">
                <h1 className="title-text">{productName}LiVRO <span className="light-title-text">{productType}LIVROCINZA</span></h1>
                <div className="product-author"> 
                    <span>por: </span>
                    <span><a href={authorLink} className="author-link">{author}</a> (autor)</span>
                    <span className="text-divider">|</span>
                    <span>Formato:<a className="author-link">{productType}</a></span>
                </div>{/* product-author */}
                <div className='divider'/>
                <div className='product-description'>
                    <p className='product-description-text'>{description}</p>
                </div>{/* product-description */}
            </div>{/* product-right-side */}
        </div>/* product-main-box */
    )
}

export default Produto;
