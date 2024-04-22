//this function will displays an image inside an article container with custom padding that am gonna pass to it, and the imgSrc is the props, basically the images am calling here am calling them as props

function CustomImage({imgSrc, pt}){
    return(
        <article className="custom-image" style={{paddingTop: pt}}>
           <img src={imgSrc} alt="" />
        </article>          
    )
}

export default CustomImage;         //here is the usual, just so i can access this funtion in another script...