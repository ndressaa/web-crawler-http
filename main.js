const { crawlPage } = require("./crawl");
const { printReport } = require("./report");

async function main() {
  if (process.argv.length < 3) {
    console.log("No website provided");
    return;
  }
  if (process.argv.length > 3) {
    console.log("Too many arguments");
    return;
  }

  const baseURL = process.argv[2];

  console.log(`Crawling ${baseURL}`);

  const pages = await crawlPage(baseURL, baseURL, {});

  printReport(pages);
}

main();
