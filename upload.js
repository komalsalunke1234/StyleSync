document.addEventListener("DOMContentLoaded", () => {
    const uploadArea = document.getElementById("uploadArea");
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");
    const imageGallery = document.getElementById("imageGallery");
    const categorySelect = document.getElementById("categorySelect");

    uploadArea.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFileUpload);
    uploadBtn.addEventListener("click", handleFileUpload);

    function handleFileUpload(event) {
        const files = fileInput.files;
        if (files.length === 0) return;

        const formData = new FormData();
        formData.append("image", files[0]);
        formData.append("category", categorySelect.value);

        fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            displayImage(URL.createObjectURL(files[0]));
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    function displayImage(imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("uploaded-image");
        imageGallery.appendChild(img);
    }
});
