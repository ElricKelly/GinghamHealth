const headerContainer = document.querySelector('header');

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        headerContainer.innerHTML = data;
    });