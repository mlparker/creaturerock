module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy(".nojekyll");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
