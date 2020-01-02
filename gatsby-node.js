const slash = require('slash')
const path = require('path')


exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
    }
  `);



  const { allWordpressPage } = result.data;

  
  allWordpressPage.edges.forEach(edge => {

    if(edge.node.link != "") {
    
    createPage({
        
      component: '/opt/build/repo/src/templates/page.js',
      path: edge.node.link,
      context: {
        wpId: edge.node.wordpress_id,
      },

    });

    }
  
});

 
};
