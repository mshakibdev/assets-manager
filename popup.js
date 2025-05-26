function getFileName(url) {
    console.log("url-split", url);
    // https://example.com/images/cool-picture.jpg?size=large#top
    try {
        const cleanUrl = url.split('?')[0].split('#')[0];
        return decodeURIComponent(cleanUrl.substring(cleanUrl.lastIndexOf('/') + 1)) || '(no file found)';
    } catch (e) {
        return '(no file found)';
    }
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function getImageSize(url) {
    try {
        const response = await fetch(url, {method: 'HEAD'});
        let size = response.headers.get('content-length');
        if (size) return parseInt(size);
        const resp = await fetch(url);
        const blob = await resp.blob();
        return blob.size;
    } catch (e) {
        return 0;
    }
}

function getFileExtension(url) {
    try {
        const cleanUrl = url.split('?')[0].split('#')[0];
        return cleanUrl.split('.').pop().toLowerCase();
    } catch {
        return '';
    }
}

// Store image data globally for filter/sort
let imagesWithSize = [];

// Render function for images with current filters
function renderImages() {
    const fileType = document.getElementById('fileTypeFilter').value;
    const sortOrder = document.getElementById('sortOrder').value;

    // Filter
    let filtered = imagesWithSize;
    if (fileType !== 'all') {
        filtered = filtered.filter(item => {
            const ext = getFileExtension(item.src);
            if (fileType === 'jpg') return ext === 'jpg' || ext === 'jpeg';
            return ext === fileType;
        });
    }

    // Sort
    filtered = filtered.slice().sort((a, b) => sortOrder === 'asc' ? a.size - b.size : b.size - a.size);

    // Render to DOM
    const imagesDiv = document.getElementById('images');
    imagesDiv.innerHTML = '';
    if (filtered.length) {
        filtered.forEach(item => {
            const {src, fileName, sizeText} = item;
            const div = document.createElement('div');
            div.className = 'img-item';

            const img = document.createElement('img');
            img.src = src;
            img.alt = fileName;

            const label = document.createElement('div');
            label.className = 'img-label';
            label.textContent = `${fileName}\n${sizeText}`;

            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'download-btn';
            downloadBtn.textContent = 'Download';
            downloadBtn.onclick = () => {
                const link = document.createElement('a');
                link.href = src;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                setTimeout(() => document.body.removeChild(link), 100);
            };

            div.appendChild(img);
            div.appendChild(label);
            div.appendChild(downloadBtn);
            imagesDiv.appendChild(div);
        });
    } else {
        imagesDiv.textContent = 'No images found for the selected filter.';
    }
}

// Fetch data and display images
document.getElementById('fetchData').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.id},
            files: ['contentScript.js'],
        },
        () => {
            chrome.tabs.sendMessage(tab.id, {action: 'getImageData'}, async (response) => {
                if (chrome.runtime.lastError) {
                    document.getElementById('result').textContent = 'Error: ' + chrome.runtime.lastError.message;
                    return;
                }
                const {images} = response;
                imagesWithSize = [];
                if (images && images.length) {
                    const sizePromises = images.map(getImageSize);
                    const sizes = await Promise.all(sizePromises);
                    images.forEach((src, i) => {
                        imagesWithSize.push({
                            src,
                            fileName: getFileName(src),
                            size: sizes[i],
                            sizeText: formatSize(sizes[i])
                        });
                    });
                    renderImages();
                } else {
                    document.getElementById('images').textContent = 'No images found on this page.';
                }
            });
        }
    );
});

document.getElementById('downloadZipBtn').addEventListener('click', async () => {
    if (!imagesWithSize.length) {
        alert('No images to download!');
        return;
    }
    const zip = new JSZip();
    const folder = zip.folder("images");
    console.log("folders", folder);
    // Show loading indicator if you want

    // Download all images as blobs and add to ZIP
    await Promise.all(imagesWithSize.map(async (item, idx) => {
        try {
            const response = await fetch(item.src);
            const blob = await response.blob();
            // Make sure fileName is not empty and not duplicate
            let fileName = item.fileName || `image${idx + 1}`;
            // Optional: Prevent duplicate names in zip
            while (folder.files[fileName]) {
                fileName = "_" + fileName;
            }
            folder.file(fileName, blob);
        } catch (e) {
            // Skip failed downloads
        }
    }));

    // Generate and download the ZIP
    zip.generateAsync({type: "blob"}).then(function (content) {
        console.log("con++", content);
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = "images.zip";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    });
});

// Add event listeners for filter and sort dropdowns
document.getElementById('fileTypeFilter').addEventListener('change', renderImages);
document.getElementById('sortOrder').addEventListener('change', renderImages);



