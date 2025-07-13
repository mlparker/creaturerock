const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/images/glyphs");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addCollection("news", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/*.md");
  });
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md");
  });
  eleventyConfig.addFilter("date", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("MMMM d, yyyy");
  });
  return {
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
