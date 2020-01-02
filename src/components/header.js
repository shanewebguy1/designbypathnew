import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';

const Header = () => { 
    
    const {

        logo :  {
            options: logo,
        } ,
        
        menu :  {
            edges: [{ node: menu }],
        } ,

    } = useStaticQuery(graphql`


    query HeaderQuery {
 
        logo: wordpressAcfOptions {
            options {
                logo {
                    localFile {
                      publicURL
                    }
                }
              }
        }
        
        site {
          siteMetadata {
            title
          }
        }
        
        menu: allWordpressMenusMenusItems(
          filter: { wordpress_id: { eq: 2 } }
        ) {
          totalCount
          edges {
            node {
              items {
                title
                url
              }
              name
            }
          }
        }
    }

 

  `);


return( <div>

<header role="banner" className="">

 <div className="navbar navbar-default navbar-fixed-top" id="navbar-fixed-top">
				<div className="container">

                    <div className="navbar-header">	

                        <Link to="/" className="navbar-brand" type="logo">
                           <img id='logo' type="logo" src={ logo.logo.localFile.publicURL } alt="Design by Patrick Logo" />
                        </Link>   
 
					</div>

                    <Navigation menu={menu} />

				</div> 
			</div>
		<div className="clear"></div>

		     
    </header>
   
</div>
)

}

export default Header