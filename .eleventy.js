module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
