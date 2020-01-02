import React from 'react';
import {   graphql } from 'gatsby';



const PageTemplate = ({ data }) => (


    <article>
        <div className="page-header"><h1>{data.currentPage.title}</h1></div>              
    </article> 


)


export default PageTemplate;

export const pageQuery = graphql`

query($wpId: Int!) {

    currentPage :   wordpressPage(wordpress_id: {eq: $wpId}) {
        title
        content
    }

}       
`