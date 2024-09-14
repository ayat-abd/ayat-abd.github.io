document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for (const image of images) {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json()) // Fix the typo here
            .then(data => {
                // The Cat API returns an array, get the first object and its 'url' property
                image.src = data[0].url;
                image.width = 100;
                image.height = 100;
            })
            .catch(error => console.error('Error fetching cat image:', error));
    }

});
