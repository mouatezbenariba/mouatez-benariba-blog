const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const Prism = require('prismjs');
require('prismjs/components/')(); // load all Prism.js components

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  // create an array of unique tags from your blog posts
  eleventyConfig.addFilter('getAllTags', (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter('filterTagList', function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
    );
  });

  // Syntax highlight using prism
  eleventyConfig.addFilter('highlight', function (code, lang) {
    const highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);
    return `<pre><code class="language-${lang}">${highlightedCode}</code></pre>`;
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
