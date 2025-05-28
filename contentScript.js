function getImages() {

    // Get all image sources (absolute URLs)
    const imgTags = document.querySelectorAll('img');
    const images = [];
    for (let img of imgTags) {
        const src = img.src;
        if (src) images.push({
            src:   img.src,
            alt:   img.alt   || '(no alt)',
            title: img.title || '(no title)'
        });
    }

    return {images };
}

function getSvgData() {
    // grab all inline SVGs & serialize as strings
    const svgs = Array.from(document.querySelectorAll('svg'))
        .map(svg => svg.outerHTML);
    return { svgs };
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getImageData') {
        const data = getImages();
        sendResponse(data);
    }
    else if (request.action === 'getSvgData') {
        sendResponse(getSvgData());
    }
    return true;
});
