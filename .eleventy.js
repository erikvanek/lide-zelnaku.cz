module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("pages/css/main.css");
  eleventyConfig.addPassthroughCopy("pages/img/foto/salaty.jpg");
  eleventyConfig.addPassthroughCopy("pages/img/foto/salaty2.jpg");
  eleventyConfig.addPassthroughCopy("pages/img/foto/bylinky.jpg");
  eleventyConfig.addPassthroughCopy("pages/fonts/SuisseBPIntl-Regular.otf");
  eleventyConfig.addPassthroughCopy("pages/fonts/roboto/Roboto-Regular.ttf");
  return {
    dir: {
      input: "pages",
      output: "docs"
    }
  }
};