function getImages() {
  // Get all image sources (absolute URLs)
  const imgTags = document.querySelectorAll("img");
  const images = [];
  for (let img of imgTags) {
    const src = img.src;
    if (src)
      images.push({
        src: img.src,
        alt: img.alt || "(no alt)",
        title: img.title || "(no title)",
      });
  }

  return { images };
}

function getSvgData() {
  // grab all inline SVGs & serialize as strings
  const svgs = Array.from(document.querySelectorAll("svg")).map(
    (svg) => svg.outerHTML
  );
  return { svgs };
}

// ----------- Extract all background images -----------
function extractBackgroundImages() {
  const urls = new Set();
  const pseudoElements = ["::before", "::after"];

  document.querySelectorAll("*").forEach((el) => {
    const style = window.getComputedStyle(el);

    // Extract background-image URLs like url("example.jpg")
    const bg = style.getPropertyValue("background-image");
    const matches = [...bg.matchAll(/url\(["']?(.*?)["']?\)/g)];

    // Convert each found URL to an absolute URL and store in the Set
    matches.forEach((match) => {
      const absoluteUrl = new URL(match[1], document.baseURI).href;

      urls.add(absoluteUrl);
    });

    pseudoElements.forEach((pseudo) => {
      const pseudoStyle = window.getComputedStyle(el, pseudo);
      const pseudoBackground = pseudoStyle.getPropertyValue("background-image");
      const pseudoMatches = [
        ...pseudoBackground.matchAll(/url\(["']?(.*?)["']?\)/g),
      ];
      pseudoMatches.forEach((match) => {
        const absoluteUrl = new URL(match[1], document.baseURI).href;
        urls.add(absoluteUrl);
      });
    });
  });

  const svgBackgrounds = [];
  const otherBackgrounds = [];

  urls.forEach((url) => {
    if (url.match(/\.svg(\?|#|$)/i) || url.startsWith("data:image/svg+xml")) {
      svgBackgrounds.push({ src: url, type: "background-svg" });
    } else {
      otherBackgrounds.push({ src: url, type: "background-img" });
    }
  });

  return { svgBackgrounds, otherBackgrounds };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { svgBackgrounds, otherBackgrounds } = extractBackgroundImages();

  if (request.action === "getImageData") {
    const data = getImages();
    const images = [...data.images, ...otherBackgrounds, ...svgBackgrounds];
    sendResponse({ images });
  } else if (request.action === "getSvgData") {
    sendResponse(getSvgData());
  }
  return true;
});
