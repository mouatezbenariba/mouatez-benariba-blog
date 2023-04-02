const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');

  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPlugin(syntaxHighlight);

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

    return [...tagSet];
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
