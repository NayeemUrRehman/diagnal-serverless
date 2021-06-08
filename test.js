// const getMetaData = require('metadata-scraper')

// const url = 'https://www.amazon.com/Amazon-Basics-Shaggy-Sherpa-Blanket/dp/B08FTNQ9CS'

// getMetaData(url).then((data) => {
// 	console.log(data)
// })

const metascraper = require("metascraper")([
  require("metascraper-title")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
]);

const got = require("got");

const targetUrl =
  "https://www.amazon.in/Acer-Processor-Integrated-Graphics-EX215-31/dp/B095BYNN8Z/ref=sr_1_1?_encoding=UTF8&dchild=1&m=A14CZOWI0VEHLG&pf_rd_i=desktop&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=ea67b664-f039-4e4c-a77d-940673f52e0a&pf_rd_r=9818ZPVVSNKRRMKTQV0G&pf_rd_t=36701&qid=1623130060&refinements=p_6%3AA14CZOWI0VEHLG&smid=A14CZOWI0VEHLG&sr=8-1";

(async () => {
  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  console.log(metadata);
})();
