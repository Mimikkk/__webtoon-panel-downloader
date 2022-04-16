const image = [...document.getElementsByTagName('img')]
    .find(img => [...img.classList].includes('_images'));

if (image) {
    fetch(image.src)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            Object.assign(document.createElement('a'), {href: url, download: "image.png"}).click();
            window.URL.revokeObjectURL(url);
        });
}
