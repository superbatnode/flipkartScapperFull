const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetchProductLinks = (url) => {
  return new Promise((resolve, reject) => {
    const data = [];
    JSDOM.fromURL(url)
      .then((dom) => {
        dom.window.document
          .querySelectorAll("._1fQZEK")
          .forEach((item) => data.push(item.href));
        resolve(data);
      })
      .catch((e) => reject(e));
  });
};
module.exports = fetchProductLinks; 
