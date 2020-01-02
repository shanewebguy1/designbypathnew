import React from 'react';
import {  useStaticQuery, graphql } from 'gatsby';
import ReactHtmlParser from 'react-html-parser';


const FirstRow = () => { 

      const {

        firstRow :  {
          nodes: [{ acf: firstRow }],         
        } ,
        
      } = useStaticQuery(graphql`

      query firstRowQuery {
        firstRow: allWordpressAcfPages(filter: {wordpress_id: {eq: 21}}) {
            nodes {
              acf {
                first_row {
                  anchor_link
                  row_title
                  second_block
                  third_block
                  first_block
                }
              }
            }
          }
      }
      
      `);

return( 

<div className="first-row">

  <div className="container">

  {firstRow.first_row.map((data, i) => (
   <div className="main" key={i}>
      <div id={data.anchor_link}></div>

      <div className="row-title">{data.row_title}</div>

      <div className="col-sm-4"> 

         { ReactHtmlParser(data.first_block) }

      </div>

      <div className="col-sm-4"> 

         { ReactHtmlParser(data.second_block) }

      </div>

      <div className="col-sm-4">

         { ReactHtmlParser(data.third_block) }

      </div>
      
   </div>
  ))}

  </div>
  
</div>
)

}

export default FirstRow;