function openNav() {
    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menuJs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else {
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.imgprojeto-container');
    const images = document.querySelectorAll('.imgprojeto img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    showImage(currentIndex);
    document.querySelector('.btn2').addEventListener('click', nextImage);
    document.querySelector('.btn1').addEventListener('click', prevImage);
});
