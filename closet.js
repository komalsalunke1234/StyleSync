document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("imageGallery");

    // Dummy images for now (Replace this with Firebase logic if needed)
    const images = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150/FF7F50",
        "https://via.placeholder.com/150/FF5722",
        "https://via.placeholder.com/150/4CAF50"
    ];

    function loadImages() {
        images.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = "Uploaded Image";
            imageGallery.appendChild(img);
        });
    }

    loadImages();

    // Button event listeners
    document.getElementById("tryVirtually").addEventListener("click", () => alert("Redirecting to Virtual Try-On..."));
    document.getElementById("checkCloset").addEventListener("click", () => alert("Opening Closet..."));
    document.getElementById("recommendations").addEventListener("click", () => alert("Fetching Recommendations..."));
});
