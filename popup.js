// === Loader helpers (uses the #loader you added in index.html) ===
const loaderEl = document.getElementById("loader");

const INTERACTIVE_SELECTOR =
    'button, input, select, textarea, [role="button"], [type="button"], [type="submit"]';

function setBusy(isBusy) {
    document.querySelectorAll(INTERACTIVE_SELECTOR).forEach((el) => {
        if (isBusy) {
            if (!el.disabled) el.dataset._wasEnabled = "1"; // remember which were enabled
            el.disabled = true;
        } else {
            if (el.dataset._wasEnabled === "1") {
                el.disabled = false;
                delete el.dataset._wasEnabled;
            }
        }
    });
}

function showLoader() {
    loaderEl?.classList.add("show");
    setBusy(true);
}

function hideLoader() {
    loaderEl?.classList.remove("show");
    setBusy(false);
}
// Start hidden by default; we only hide after images exist
hideLoader();

function getImageDims(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth || 0, h: img.naturalHeight || 0 });
        img.onerror = () => resolve({ w: 0, h: 0 });
        img.src = url;
    });
}

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

    // -------- Filter
    let filtered = imagesWithSize;
    if (fileType !== "all") {
        filtered = filtered.filter((item) => {
            const ext = getFileExtension(item.src);
            if (fileType === "jpg") return ext === "jpg" || ext === "jpeg";
            return ext === fileType;
        });
    }

    // -------- Sort (Largest First / Smallest First by size)
    filtered = filtered
        .slice()
        .sort((a, b) => (sortOrder === "asc" ? a.size - b.size : b.size - a.size));

    // -------- Render
    const container = document.getElementById("imagesTableBody");
    const isListView = container.classList.contains("view-list");
    const isGridView = container.classList.contains("view-grid");

    container.innerHTML = "";

    if (!filtered.length) {
        // (You also keep a loader for 0 images—this is just a fallback)
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 5;
        td.style.textAlign = "center";
        td.style.padding = "10px";
        td.textContent = "No images found for the selected filter.";
        tr.appendChild(td);
        container.appendChild(tr);
        return;
    }

    filtered.forEach((item) => {
        const { src, fileName, sizeText } = item;
        const updatedFileName = cleanFilename(fileName);

        // Row wrapper
        const row = document.createElement("div");
        row.className = "img-item";

        // Left: preview
        const imgEl = document.createElement("img");
        imgEl.src = src;
        imgEl.alt = updatedFileName || "";
        imgEl.className = "img";

        // Middle: name + size
        const content = document.createElement("div");
        content.className = "img-content";

        const contentContainer = document.createElement("div");
        contentContainer.className = "content-container";

        const label = document.createElement("div");
        label.className = "img-label";
        label.textContent = updatedFileName;

        const sizeEl = document.createElement("div");
        sizeEl.className = "img-size";
        // In grid view, append "| WxH" if we have dimensions
        if (isGridView && item.w && item.h) {
            sizeEl.textContent = `${sizeText} | ${item.w}x${item.h}`;
        } else {
            sizeEl.textContent = sizeText;
        }


        contentContainer.append(label, sizeEl);

        // ---- Actions (right)
        // Download (existing behavior)
        const downloadBtn = document.createElement("button");
        downloadBtn.className = "download-btn";
        downloadBtn.title = "Download";
        downloadBtn.innerHTML = `
      <span class="icon-wrap">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1v7m0 0l-3-3m3 3l3-3M2 9.5v.3c0 1.2 0 1.7.3 2 .3.2.7.2 1.7.2h6c1 0 1.4 0 1.7-.2.3-.3.3-.8.3-2v-.3" stroke="#0D0F0D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>`;
        downloadBtn.onclick = () => {
            fetch(src)
                .then((r) => r.blob())
                .then((blob) => downloadWithExactName(blob, cleanFilename(updatedFileName)))
                .catch((err) => console.error("Download failed:", err));
        };

        // Copy URL button — **only in List View**
        if (isListView) {
            const actions = document.createElement("div");
            actions.className = "img-actions"; // keep both buttons grouped on the right

            const copyBtn = document.createElement("button");
            copyBtn.className = "download-btn copy-btn"; // reuse same style
            copyBtn.title = "Copy image URL";
            copyBtn.setAttribute("aria-label", "Copy image URL");

            const copyIcon = `
        <span class="icon-wrap">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4.25" y="1.75" width="8" height="8" rx="1.25" stroke="#0D0F0D"/>
            <rect x="1.75" y="4.25" width="8" height="8" rx="1.25" stroke="#0D0F0D"/>
          </svg>
        </span>`;
            const checkIcon = `
        <span class="icon-wrap">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7l2 2 5-5" stroke="#0D0F0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>`;

            copyBtn.innerHTML = copyIcon;
            copyBtn.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();
                try {
                    await navigator.clipboard.writeText(src);
                    copyBtn.innerHTML = checkIcon;      // quick visual feedback
                    setTimeout(() => (copyBtn.innerHTML = copyIcon), 900);
                } catch (err) {
                    console.error("Copy URL failed:", err);
                }
            });

            actions.append(copyBtn, downloadBtn);
            content.append(contentContainer, actions);
        } else {
            // Grid view: keep your original single download button
            content.append(contentContainer, downloadBtn);
        }

        row.appendChild(imgEl);
        row.appendChild(content);
        container.appendChild(row);
    });
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
    img.style.width = "64px";
    img.style.height = "48px";
    img.style.objectFit = "cover";
    tdPreview.appendChild(img);
    tr.appendChild(tdPreview);

    // Alt attribute cell
    const tdAlt = document.createElement("td");

    tdAlt.textContent = item.alt || "(no alt)";
    if (tdAlt.textContent === "(no alt)") {
      tdAlt.classList.add("danger");
    }

    tr.appendChild(tdAlt);

    // Title attribute cell
    // const tdTitle = document.createElement("td");
    // tdTitle.textContent = item.title || "(no title)";
    //
    // if (tdTitle.textContent === "(no title)") {
    //   tdTitle.classList.add("danger");
    // }
    // tr.appendChild(tdTitle);

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

          const svgBtnContainer = document.createElement("div");
          svgBtnContainer.className = "svg-btn-container";
          svgBtnContainer.append(copyBtn, downloadBtn);

          // assemble & append
          item.append(preview, svgBtnContainer);
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
        // show centered spinner immediately
        showLoader();

        // optional: clear previous results area so the spinner is visually centered
        const tbody = document.getElementById("imagesTableBody");
        if (tbody) tbody.innerHTML = "";

        try {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            // If the active page is a Chrome error page (e.g., offline “dino”), treat as 0 images
            if (tab?.url?.startsWith?.("chrome-error://")) {
                // Keep the loader visible and exit (requirement: loader stays when images = 0)
                return;
            }

            // Inject content script (safe to call even if already injected)
            await new Promise((resolve, reject) => {
                chrome.scripting.executeScript(
                    { target: { tabId: tab.id }, files: ["contentScript.js"] },
                    () => (chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve())
                );
            });

            // Request image data
            const response = await new Promise((resolve) => {
                chrome.tabs.sendMessage(tab.id, { action: "getImageData" }, (res) => resolve(res));
            });

            const images = (response && response.images) || [];

            // === Key requirement: if 0 images, keep loader visible and stop ===
            if (!images.length) {
                return; // spinner stays centered; no message shown
            }

            // You already compute sizes + build imagesWithSize in your current code.
            // We'll reuse your existing functions and rendering as-is:

            const sizes = await Promise.all(
                images.map((imgObj) => getImageSize(imgObj.src).catch(() => 0))
            );

            // compute dimensions (natural width/height)
            const dims = await Promise.all(
                images.map((imgObj) => getImageDims(imgObj.src))
            );

            imagesWithSize = images.map((imgObj, i) => ({
                src: imgObj.src,
                alt: imgObj.alt,
                title: imgObj.title,
                fileName: getFileName(imgObj.src),
                size: sizes[i],
                sizeText: formatSize(sizes[i]),
                w: dims[i].w,
                h: dims[i].h
            }));

            // Hide spinner now that we have images
            hideLoader();

            // Use your existing render functions
            renderOverviewTab();
            renderImagesTab();
        } catch (_) {
            // On any failure (including offline), behave like images === 0:
            // do nothing here so the loader stays visible and centered.
            return;
        }
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
gridBtn.addEventListener("click", () => { setView("grid"); renderOverviewTab(); });
listBtn.addEventListener("click", () => { setView("list"); renderOverviewTab(); });

// initialize default
setView("grid");
