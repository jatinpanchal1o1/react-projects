import React from 'react';
import Layout from '../component/layout';
import { graphql } from "gatsby"
import SuperSection from '../component/reusable/superSection'
import '../util/css/style.css'
import ReusInfo from '../component/reusable/reusInfo';
import Reusdualinfo from '../component/reusable/reusdualinfo';

function index({data}) {
  return (
    <div>
     <Layout>
     <SuperSection
             img ={data.img.childImageSharp.fluid}
             title ="It Sector to develop programmer's"
             subtitle= "explore with us :)" 
             superClass = "super"
            /> 

     <Reusdualinfo heading="Think Big"/>

     <ReusInfo heading="About"/>
      </Layout>  
    </div>
  );
}

export const query =  graphql`
  {
    img: file(relativePath: {eq: "darkbg.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default index;