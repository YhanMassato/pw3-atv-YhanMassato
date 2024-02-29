import './Produto.css'

function Produto({image, imgAlt, productName, productType, author, authorLink, translator, translatorLink, description }){

    return(
        <div class="product-main-box">
        <div class="product-left-side">
            <div class="image-box">
                <image class="product-image" src={image} alt={imgAlt}/>
            </div> {/*<!--image-box-->*/}
            
            <div class="divider"></div>
        </div>{/* product-left-side */} 
        
        <div class="product-right-side">
            <h1 class="title-text">{productName} <span class="light-title-text">{productType}</span></h1>
 
            <div class="product-author"> 
                <span>por: </span>
                <span><a href={authorLink} class="author-link">{author}</a> (Autor)</span>
                <span><a href={translatorLink} class="author-link">{translator}</a> (Tradutor)</span>
                <span class="text-divider">|</span>
                <span>Formato: <a class="author-link">{productType}</a></span>
            </div>{/* product-author */} 
            <div class='divider'></div>
            <div class='product-description'>
                <p class='product-description-text'> {description}
                </p>
            </div> {/* product-description */}
        </div> {/* product-right-side */} 
    </div> /* product-main-box */
    )
}

export default Produto;
