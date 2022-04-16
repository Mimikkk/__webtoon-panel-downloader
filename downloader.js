(async () => {
  const image = [...document.getElementsByTagName('img')]
    .find(img => [...img.classList].includes('_images'));
  if (!image) return;

  const response = await fetch(image.src)
  const blob = await response.blob()

  const url = URL.createObjectURL(blob);
  Object.assign(document.createElement('a'),{ href: url, download: `${document.title}-panel.png` }).click();
  window.URL.revokeObjectURL(url);
})();
