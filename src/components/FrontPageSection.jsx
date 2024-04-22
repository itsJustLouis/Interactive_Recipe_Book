import CustomImage from "./CustomImage"; //here i am importing the CustomImage.jsx
import { Link } from 'react-router-dom';

import recipe1 from "../gallery/img_2.jpg"; //Here am giving the images names, i think am passing them as props, just as shown in class, this will make it easier for me to work with them
import recipe2 from "../gallery/img_3.jpg";
import recipe3 from "../gallery/img_4.jpg";
import recipe4 from "../gallery/img_5.jpg";
import recipe5 from "../gallery/img_6.jpg";
import recipe6 from "../gallery/img_7.jpg";
import recipe7 from "../gallery/img_8.jpg";
import recipe8 from "../gallery/img_9.jpg";
import recipe9 from "../gallery/img_1.jpg"

function FrontPageSection(){    //as i call the images mentioned above
    const images= [
        recipe1,
        recipe2,
        recipe3,
        recipe4,
        recipe5,
        recipe6,
        recipe7,
        recipe8,
        recipe9
    ]
    //below i will create a button that will take me to the recipes page where everything is
    return(
        <section className="section front">
            <article className="col typography">
                    <h1 className="title">What are we About</h1>
                    <p className="info">This is your complete guide to eating healthy. Packed with Simple, delicious, protein-packed low-calorie meals. In these recipes, you will find all your favourite food.</p>
                   
                          <Link to="/recipes" className="btn"> 
                            Explore Recipes
                          </Link>
                          
                   
            </article>
            <article className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"85%"} />  //this code will make sure that for each image that i render, it comes with an index key, a unique key just for it, so that i can be able to track each image, got this idea from class, and the other code just passes along a padding for the images
                ))}
            </article>
        </section>
    )
}
export default FrontPageSection; //this is to access this function in another script