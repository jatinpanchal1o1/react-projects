import React from 'react';
import Layout from '../component/layout';
import { graphql } from "gatsby"
import SuperSection from '../component/reusable/superSection'
import '../util/css/style.css'
import Imgcard from '../component/reusable/about/imgcard';
import ReusInfo from '../component/reusable/reusInfo';
import Reusdualinfo from '../component/reusable/reusdualinfo';

function About({data}) {
  return (
    <div>
     <Layout>
     <SuperSection
             img ={data.img.childImageSharp.fluid}
             title ="Technology Give us a way !"
             subtitle= "About Company" 
             superClass = "about-super"
            />
       <Reusdualinfo heading="Company Vision"/>

       <ReusInfo heading="About Us"/>      
      <Imgcard/>      
      </Layout>  
    </div>
  );
}

export const query =  graphql`
  {
    img: file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default About;