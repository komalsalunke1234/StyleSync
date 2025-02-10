document.addEventListener("DOMContentLoaded", function() {
    const uploadArea = document.getElementById("uploadArea");
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");

    // Click to Upload
    uploadArea.addEventListener("click", () => fileInput.click());

    // Drag & Drop Upload
    uploadArea.addEventListener("dragover", (event) => {
        event.preventDefault();
        uploadArea.style.backgroundColor = "#dbe3ff";
    });

    uploadArea.addEventListener("dragleave", () => {
        uploadArea.style.backgroundColor = "#eaf0ff";
    });

    uploadArea.addEventListener("drop", (event) => {
        event.preventDefault();
        fileInput.files = event.dataTransfer.files;
        uploadArea.style.backgroundColor = "#eaf0ff";
        alert("File uploaded: " + fileInput.files[0].name);
    });

    // Upload Button Click
    uploadBtn.addEventListener("click", () => {
        if (fileInput.files.length > 0) {
            alert("Uploading: " + fileInput.files[0].name);
        } else {
            alert("Please select a file to upload.");
        }
    });

    // Navigation Buttons
    document.getElementById("tryVirtually").addEventListener("click", () => alert("Redirecting to Virtual Try-On..."));
    document.getElementById("checkCloset").addEventListener("click", () => alert("Opening Closet..."));
    document.getElementById("recommendations").addEventListener("click", () => alert("Fetching Recommendations..."));
    document.getElementById("backBtn").addEventListener("click", () => alert("Going Back..."));
});


