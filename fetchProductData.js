const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetchProductData = (url) => {
  return new Promise((resolve, reject) => {
    const data = {};
    JSDOM.fromURL(url).then((dom) => {
      try {
        data.title = dom.window.document.querySelector(".B_NuCI").textContent;
      } catch (e) {
        return reject("product Not found");
      }
      data.rating = {};
      data.rating.overAllScore =
        dom.window.document.querySelector("._3LWZlK").textContent;
      data.rating.userRatings = dom.window.document.querySelector(
        "#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)"
      ).textContent;
      data.rating.reviews = dom.window.document.querySelector(
        "#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(3)"
      ).textContent;
      data.image = dom.window.document.querySelector("._2amPTt").src;
      data.price = dom.window.document.querySelector("._16Jk6d").textContent;
      data.highlights = [];
      dom.window.document
        .querySelectorAll("._21Ahn-")
        .forEach((item) => data.highlights.push(item.textContent));
      try {
        data.seller =
          dom.window.document.querySelector(
            "#sellerName > span"
          ).firstChild.textContent;
      } catch (e) {
        data.seller = "Sold out";
      }
      data.specification = [];
      dom.window.document.querySelectorAll("._1s_Smc").forEach((item) => {
        const key = item.firstChild.textContent;
        const value = item.lastChild.textContent;
        data.specification.push({ [key]: value });
      });
      data.reviews = [];
      dom.window.document
        .querySelectorAll("._2wzgFH")
        .forEach((item) => data.reviews.push(item.textContent));
      return resolve(data);
    });
  });
};

module.exports = fetchProductData;
