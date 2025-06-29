module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
