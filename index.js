const Metalsmith  = require('metalsmith');
const collections = require('@metalsmith/collections');
const layouts     = require('@metalsmith/layouts');
const markdown    = require('@metalsmith/markdown');
const permalinks  = require('@metalsmith/permalinks');

Metalsmith(__dirname)         // __dirname defined by node.js:
                              // name of the directory of this file
  .metadata({                 // add any variable you want
                              // use them in layout-files
    sitename: "tygutowski",
    siteurl: "https://tygutowski.com/",
    description: "software engineering projects",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/"
  })
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .clean(true)                // clean destination before
  .use(collections({          // group all blog posts by internally
    posts: 'posts/*.md'       // adding key 'collections':'posts'
  }))                         // use `collections.posts` in layouts
  .use(markdown())            // transpile all md into html
  .use(permalinks({           // change URLs to permalink URLs
    relative: false           // put css only in /css
  }))
  .use(layouts())             // wrap layouts around html
  .build(function(err) {      // build process
    if (err) throw err;       // error handling is required
  });