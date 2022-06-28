const jsdom = require("jsdom");
const fetchProductData = require("./fetchProductData");
const fetchProductLinks = require("./FetchProductLinks");
const url = "https://www.flipkart.com/search?q=mobile&page=1"; //change last digit of url here upto 40
fetchProductLinks(url)
  .then((urls) => {
    urls.forEach((url) => {
      fetchProductData(url).then(console.log).catch(console.error);
    });
  })
  .catch(console.error);
