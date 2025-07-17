function cleanFilename(filename) {
  // Pattern 1: Random hex string + underscore (like your example)
  let match = filename.match(/^[a-f0-9]{16,}_(.+)$/i);
  if (match) return match[1];

  // Pattern 2: Random alphanumeric + underscore
  match = filename.match(/^[a-zA-Z0-9]{10,}_(.+)$/i);
  if (match) return match[1];

  // Pattern 3: UUID-like pattern + underscore
  match = filename.match(
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}_(.+)$/i
  );
  if (match) return match[1];

  // Return original if no pattern matches
  return filename;
}

function getFileName(url) {
  // https://example.com/images/cool-picture.jpg?size=large#top
  try {
    const cleanUrl = url.split("?")[0].split("#")[0];
    return (
      cleanFilename(
        decodeURIComponent(cleanUrl.substring(cleanUrl.lastIndexOf("/") + 1))
      ) || "(no file found)"
    );
  } catch (e) {
    return "(no file found)";
  }
}

function downloadWithExactName(blobOrUrl, fileName) {
  // If passed a Blob, create a temporary URL
  const url =
    blobOrUrl instanceof Blob ? URL.createObjectURL(blobOrUrl) : blobOrUrl;

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // If we created a blob URL, revoke it after a moment
  if (blobOrUrl instanceof Blob) {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

async function getImageSize(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    let size = response.headers.get("content-length");
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
    const cleanUrl = url.split("?")[0].split("#")[0];
    return cleanUrl.split(".").pop().toLowerCase();
  } catch {
    return "";
  }
}

// Store image data globally for filter/sort
let imagesWithSize = [];

// Render function for images with current filters
function renderOverviewTab() {
  const fileType = document.getElementById("fileTypeFilter").value;
  const sortOrder = document.getElementById("sortOrder").value;

  // Filter
  let filtered = imagesWithSize;
  if (fileType !== "all") {
    filtered = filtered.filter((item) => {
      const ext = getFileExtension(item.src);
      if (fileType === "jpg") return ext === "jpg" || ext === "jpeg";
      return ext === fileType;
    });
  }

  // Sort
  filtered = filtered
    .slice()
    .sort((a, b) => (sortOrder === "asc" ? a.size - b.size : b.size - a.size));

  // Render to DOM
  const imagesDiv = document.getElementById("imagesTableBody");
  imagesDiv.innerHTML = "";
  if (filtered.length) {
    filtered.forEach((item) => {
      const { src, fileName, sizeText } = item;
      const updatedFileName = cleanFilename(fileName);
      const div = document.createElement("div");
      div.className = "img-item";

      const img = document.createElement("img");
      img.src = src;
      img.alt = updatedFileName;
      img.className = "img";

      const imgContentWrapper = document.createElement("div");
      imgContentWrapper.className = "img-content";

      const label = document.createElement("div");
      label.className = "img-label";
      label.textContent = `${updatedFileName}\n${sizeText}`;

      const downloadBtn = document.createElement("button");
      downloadBtn.className = "download-btn";
      downloadBtn.innerHTML = ` <span class="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M13 9V9.8C13 10.9201 13 11.4802 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.4802 13 10.9201 13 9.8 13H4.2C3.07989 13 2.51984 13 2.09202 12.782C1.71569 12.5903 1.40973 12.2843 1.21799 11.908C1 11.4802 1 10.9201 1 9.8V9M10.3333 5.66667L7 9M7 9L3.66667 5.66667M7 9V1" stroke="#0D0F0D" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>`;
      // downloadBtn.textContent = "Download";
      downloadBtn.onclick = () => {
        fetch(src)
          .then((r) => r.blob())
          .then((blob) => downloadWithExactName(blob, cleanFilename(fileName)))
          .catch((err) => console.error("Download failed:", err));
      };
      imgContentWrapper.append(label, downloadBtn);
      div.appendChild(img);
      div.appendChild(imgContentWrapper);
      imagesDiv.appendChild(div);
    });
  } else {
    imagesDiv.textContent = "No images found for the selected filter.";
  }
}

function renderImagesTab() {
  const tbody = document.getElementById("imagesTableBody-2");
  // clear any old rows
  tbody.innerHTML = "";

  // if no images, show a placeholder row
  if (!imagesWithSize.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 4;
    td.style.textAlign = "center";
    td.style.padding = "10px";
    td.textContent = "No images to display.";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  // build a row for each image
  imagesWithSize.forEach((item) => {
    const tr = document.createElement("tr");

    // Preview cell
    const tdPreview = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || "";
    img.title = item.title || "";
    img.style.width = "80px";
    img.style.height = "auto";
    img.style.objectFit = "cover";
    tdPreview.appendChild(img);
    tr.appendChild(tdPreview);

    // Alt attribute cell
    const tdAlt = document.createElement("td");
    tdAlt.textContent = item.alt || "(no alt)";
    tr.appendChild(tdAlt);

    // Title attribute cell
    const tdTitle = document.createElement("td");
    tdTitle.textContent = item.title || "(no title)";
    tr.appendChild(tdTitle);

    // Size cell
    const tdSize = document.createElement("td");
    tdSize.textContent = item.sizeText || "unknown";
    tr.appendChild(tdSize);

    tbody.appendChild(tr);
  });
}

async function renderSvgTab() {
  const container = document.getElementById("svgGrid");
  container.innerHTML = ""; // clear old

  // inject & fetch SVG data
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    { target: { tabId: tab.id }, files: ["contentScript.js"] },
    () => {
      chrome.tabs.sendMessage(tab.id, { action: "getSvgData" }, (response) => {
        const svgs = response?.svgs || [];
        if (!svgs.length) {
          container.textContent = "No inline SVGs found.";
          return;
        }

        svgs.forEach((code, i) => {
          const item = document.createElement("div");
          item.className = "svg-item";

          // 1) Preview
          const preview = document.createElement("div");
          preview.className = "svg-preview";
          preview.innerHTML = code;

          // 2) Copy button
          const copyBtn = document.createElement("button");
          copyBtn.textContent = "Copy";
          copyBtn.onclick = () => {
            navigator.clipboard
              .writeText(code)
              .then(() => (copyBtn.textContent = "Copied!"))
              .catch(() => (copyBtn.textContent = "Error"));
            setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
          };

          // 3) Download button
          const downloadBtn = document.createElement("button");
          downloadBtn.textContent = "Download";
          downloadBtn.onclick = () => {
            // create a .svg file from the code
            const blob = new Blob([code], { type: "image/svg+xml" });
            downloadWithExactName(blob, `icon${i + 1}.svg`);
          };

          // assemble & append
          item.append(preview, copyBtn, downloadBtn);
          container.appendChild(item);
        });
      });
    }
  );
}

// Fetch data and display images
document
  .getElementById("tab-overview-btn")
  .addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["contentScript.js"],
      },
      () => {
        chrome.tabs.sendMessage(
          tab.id,
          { action: "getImageData" },
          async (response) => {
            if (chrome.runtime.lastError) {
              document.getElementById("result").textContent =
                "Error: " + chrome.runtime.lastError.message;
              return;
            }
            const { images } = response;
            imagesWithSize = [];
            if (images && images.length) {
              const sizes = await Promise.all(
                images.map((imgObj) => getImageSize(imgObj.src))
              );

              // Build your working array
              imagesWithSize = images.map((imgObj, i) => ({
                src: imgObj.src,
                alt: imgObj.alt,
                title: imgObj.title,
                fileName: getFileName(imgObj.src),
                size: sizes[i],
                sizeText: formatSize(sizes[i]),
              }));
              renderOverviewTab();
              renderImagesTab();
            } else {
              document.getElementById("images").textContent =
                "No images found on this page.";
            }
          }
        );
      }
    );
  });

document
  .getElementById("downloadZipBtn")
  .addEventListener("click", async () => {
    if (!imagesWithSize.length) {
      alert("No images to download!");
      return;
    }
    const zip = new JSZip();
    const folder = zip.folder("images");
    // Show loading indicator if you want

    // Download all images as blobs and add to ZIP
    await Promise.all(
      imagesWithSize.map(async (item, idx) => {
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
      })
    );

    // Generate and download the ZIP
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
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
document
  .getElementById("fileTypeFilter")
  .addEventListener("change", renderOverviewTab);
document
  .getElementById("sortOrder")
  .addEventListener("change", renderOverviewTab);

// Tab logic
const tabs = {
  overviewBtn: document.getElementById("tab-overview-btn"),
  imagesBtn: document.getElementById("tab-images-btn"),
  svgBtn: document.getElementById("tab-svg-btn"),
  overviewTab: document.getElementById("overviewTab"),
  imagesTab: document.getElementById("imagesTab"),
  svgTab: document.getElementById("svgTab"),
};

function switchTab(to) {
  // deactivate all
  // tabs.overviewBtn.classList.remove('active');
  // tabs.imagesBtn.classList.remove('active');
  // tabs.overviewTab.classList.remove('active');
  // tabs.imagesTab.classList.remove('active');
  [tabs.overviewBtn, tabs.imagesBtn, tabs.svgBtn].forEach((b) =>
    b.classList.remove("active")
  );
  [tabs.overviewTab, tabs.imagesTab, tabs.svgTab].forEach((d) =>
    d.classList.remove("active")
  );
  // activate selected
  if (to === "overview") {
    tabs.overviewBtn.classList.add("active");
    tabs.overviewTab.classList.add("active");
  } else if (to === "images") {
    tabs.imagesBtn.classList.add("active");
    tabs.imagesTab.classList.add("active");
  } else {
    tabs.svgBtn.classList.add("active");
    tabs.svgTab.classList.add("active");
    renderSvgTab();
  }
}

tabs.overviewBtn.addEventListener("click", () => switchTab("overview"));
tabs.imagesBtn.addEventListener("click", () => {
  switchTab("images");
  renderImagesTab();
});
tabs.svgBtn.addEventListener("click", () => switchTab("svg"));

document.addEventListener("DOMContentLoaded", async () => {
  // Activate the Overview tab
  switchTab("overview");

  // Trigger the same handler as clicking “Fetch Images”
  document.getElementById("tab-overview-btn").click();
});

// --- View Toggle Setup ---
const gridBtn = document.getElementById("viewGridBtn");
const listBtn = document.getElementById("viewListBtn");
const container = document.getElementById("imagesTableBody");

function setView(mode) {
  const isGrid = mode === "grid";
  container.classList.toggle("view-grid", isGrid);
  container.classList.toggle("view-list", !isGrid);
  gridBtn.classList.toggle("active", isGrid);
  listBtn.classList.toggle("active", !isGrid);
}

// button handlers
gridBtn.addEventListener("click", () => setView("grid"));
listBtn.addEventListener("click", () => setView("list"));

// initialize default
setView("grid");
