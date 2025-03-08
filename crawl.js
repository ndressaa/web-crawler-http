function normalizeURL(urlString) {
  const urlObject = new URL(urlString);
  const hostpath = urlObject.hostname + urlObject.pathname;

  if (hostpath.length > 0 && hostpath.endsWith("/")) {
    return hostpath.slice(0, -1);
  }

  return hostpath;
}

module.exports = {
  normalizeURL,
};
