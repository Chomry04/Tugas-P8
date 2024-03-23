// script.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://crudcrud.com/api//<resource>') // Ganti your-api-endpoint dengan URL API Anda
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('productList');
        data.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.name + ' - ' + product.price; // Sesuaikan dengan struktur data API Anda
            productList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
