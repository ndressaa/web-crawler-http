function printReport(pages) {
  const sortedPages = sortPages(pages);

  sortedPagesObj = sortedPages.map((page) => {
    return {
      Page: page[0],
      Links: page[1],
    };
  });

  console.table(sortedPagesObj);
}

function sortPages(pages) {
  const pagesArray = Object.entries(pages);
  pagesArray.sort((a, b) => b[1] - a[1]);
  return pagesArray;
}

module.exports = { sortPages, printReport };
