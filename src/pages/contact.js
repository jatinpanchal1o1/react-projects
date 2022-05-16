import React from 'react';
import Layout from '../component/layout';
import { graphql } from "gatsby"
import SuperSection from '../component/reusable/superSection'
import '../util/css/style.css'
import ReusInfo from '../component/reusable/reusInfo';
// import Reusdualinfo from '../component/reusable/reusdualinfo';

function Contact({data}) {
  return (
    <div>
     <Layout>
     <SuperSection
             img ={data.img.childImageSharp.fluid}
             title ="For More Information"
             subtitle= "Contact Us" 
             superClass = "about-super"
            /> 

     {/* <Reusdualinfo heading="Info"/> */}

     <ReusInfo heading="About"/>
      </Layout>  
    </div>
  );
}

export const query =  graphql`
  {
    img: file(relativePath: {eq: "contact3.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Contact;