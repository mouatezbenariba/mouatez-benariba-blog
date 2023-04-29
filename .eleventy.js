const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const Prism = require('prismjs');
require('prismjs/components/')(); // load all Prism.js components

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/style.css');
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

  eleventyConfig.addPlugin(syntaxHighlight);

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
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

  return {
    dir: {
      input: 'src',
      output: 'public',
      passthroughFileCopy: true,
    },
  };
};
