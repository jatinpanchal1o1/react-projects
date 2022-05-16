import React from 'react';
import Layout from '../component/layout';
import { graphql } from "gatsby"
import SuperSection from '../component/reusable/superSection'
import '../util/css/style.css'
import ReusInfo from '../component/reusable/reusInfo';
import Reusdualinfo from '../component/reusable/reusdualinfo';
import Cart from '../component/cart/cart';

function Product({data}) {
  return (
    <div>
     <Layout>
     <SuperSection
             img ={data.img.childImageSharp.fluid}
             title ="Products For You !"
             subtitle= "Our Products" 
             superClass = "about-super"
            /> 

     <Cart courses={data.courses}/>
      
     <ReusInfo heading="Provider"/>
      </Layout>  
    </div>
  );
}

export const query =  graphql`
  {
    img: file(relativePath: {eq: "product.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    courses: allContentfulAsset {
        edges {
          node {
            id
            title
            description
            url
          }
        }
      }
  }
`

export default Product;