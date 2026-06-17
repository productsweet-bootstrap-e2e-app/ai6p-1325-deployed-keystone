module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/public');
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_layouts',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};
