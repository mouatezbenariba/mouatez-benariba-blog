const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const Prism = require('prismjs');
require('prismjs/components/')(); // load all Prism.js components
const fs = require('fs');
const NOT_FOUND_PATH = 'public/404.html';
var slugify = require('slugify');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');
  eleventyConfig.addPassthroughCopy('./src/manifest.json');
  eleventyConfig.addPassthroughCopy('./src/netlify.toml');
  eleventyConfig.addPassthroughCopy('./src/Robots.txt');

  // add a new filter for English post dates
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // add a new filter for Arabic post dates
  eleventyConfig.addFilter('postDateAr', function (date) {
    const dt = DateTime.fromJSDate(date, { zone: 'utc' }).setLocale('ar');
    return dt.toLocaleString({
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      numberingSystem: 'latn',
    });
  });

  // add slugify filter
  eleventyConfig.addFilter('slugify', (input) => {
    return slugify(input, {
      lower: true, // Convert the slug to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters from the slug
    });
  });

  eleventyConfig.addPlugin(syntaxHighlight, {
    // Line separator for line breaks
    lineSeparator: '\n',

    // Change which Eleventy template formats use syntax highlighters
    templateFormats: ['*'], // default

    // Use only a subset of template types (11ty.js added in v4.0.0)
    // templateFormats: ["liquid", "njk", "md", "11ty.js"],

    // Added in 3.1.1, add HTML attributes to the <pre> or <code> tags
    preAttributes: {
      tabindex: 0,

      // Added in 4.1.0 you can use callback functions too
      'data-language': function ({ language, content, options }) {
        return language;
      },
    },
    codeAttributes: {},

    // Added in 5.0.0, throw errors on invalid language names
    errorOnInvalidLanguage: false,
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'post', 'posts', 'featured'].indexOf(tag) === -1
    );
  }

  eleventyConfig.addFilter('excludeTags', function (tags) {
    return filterTagList(tags);
  });

  // create an array of unique tags from your blog posts
  eleventyConfig.addCollection('tagList', function (collection) {
    const tagSet = new Set();
    collection.getAllSorted().forEach(function (item) {
      if ('tags' in item.data) {
        const tags = item.data.tags;

        tags.forEach(function (tag) {
          tagSet.add(tag);
        });
      }
    });

    return filterTagList([...tagSet]);
  });

  // Syntax highlight using prism
  eleventyConfig.addFilter('highlight', function (code, lang) {
    const highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);
    return `<pre><code class="language-${lang}">${highlightedCode}</code></pre>`;
  });

  // 404 error custom page
  module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function (err, bs) {
          bs.addMiddleware('*', (req, res) => {
            if (!fs.existsSync(NOT_FOUND_PATH)) {
              throw new Error(
                `Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`
              );
            }

            const content_404 = fs.readFileSync(NOT_FOUND_PATH);
            // Add 404 http status code in request header.
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        },
      },
    });
  };

  return {
    dir: {
      input: 'src',
      output: 'public',
      passthroughFileCopy: true,
    },
  };
};
