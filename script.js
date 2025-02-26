let currentPage = 0;
    const itemsPerPage = 18;

    function displayImages() {
        const containers = document.querySelectorAll('.image-container');
        containers.forEach((container, index) => {
            if (index >= currentPage * itemsPerPage && index < (currentPage + 1) * itemsPerPage) {
                container.classList.remove('hidden');
            } else {
                container.classList.add('hidden');
            }
        });
        updatePageInfo(); 
    }

    function nextPage() {
        const totalImages = document.querySelectorAll('.image-container').length;
        if ((currentPage + 1) * itemsPerPage < totalImages) {
            currentPage++;
            displayImages();
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            displayImages();
        }
    }

    function filterImages() {
        const input = document.getElementById('search').value.toLowerCase();
        const containers = document.querySelectorAll('.image-container');

        containers.forEach(container => {
            const title = container.getAttribute('data-title').toLowerCase();
            if (title.includes(input)) {
                container.style.display = 'inline-block';
            } else {
                container.style.display = 'none';
            }
        });

        // Reset pagination
        currentPage = 0;
        displayImages();
    }

    function updatePageInfo() {
        const pageInfoTop = document.getElementById('page-info-top');
        const pageInfoBottom = document.getElementById('page-info-bottom');
        const currentPageNumber = currentPage + 1;

        pageInfoTop.textContent = `Página ${currentPageNumber}`;
        pageInfoBottom.textContent = `Página ${currentPageNumber}`;
    }

    // Mostrar imágenes al cargar la página
    displayImages();