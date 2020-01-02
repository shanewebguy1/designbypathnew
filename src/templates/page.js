import React from 'react';
import {   graphql } from 'gatsby';
import Layout from '../components/Layout';


const PageTemplate = ({ data }) => (

<Layout>

    <div id="content" className="clearfix row">
                
        <div id="main" className="col col-lg-12 clearfix" role="main">
            <div className="container pagecontent">
                                    
                <article>
                 <div className="page-header"><h1>{data.currentPage.title}</h1></div>              
                </article> 

                <div className="post_content" dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
                
            </div>

        </div> 
                    
    </div>

</Layout>

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

