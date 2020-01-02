import React from 'react';
import {   graphql } from 'gatsby';



const PageTemplate = ({ data }) => (


<div className="eqweq">
eqwewq

</div>


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