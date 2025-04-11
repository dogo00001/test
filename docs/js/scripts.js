/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {


    const blogPreviews = [
        {
            title: "Blog post title",
            img: "https://dummyimage.com/600x350/adb5bd/495057",
            category: "News",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            author: "Kelly Rowan",
            date: "March 12, 2023 &middot; 6 min read"
        }/*,
        {
            title: "Another blog post title",
            img: "https://dummyimage.com/600x350/adb5bd/495057",
            category: "Media",
            description: "This text is a bit longer to illustrate adaptive card height.",
            author: "Josiah Barclay",
            date: "March 23, 2023"
        },
        {
            title: "The last blog post title",
            img: "https://dummyimage.com/600x350/adb5bd/495057",
            category: "News",
            description: "Some more quick example text to build on the card title.",
            author: "Evelyn Martinez",
            date: "April 2, 2023"
        },
        {
            title: "Another blog post title",
            img: "https://dummyimage.com/600x350/adb5bd/495057",
            category: "Media",
            description: "This text is a bit longer to illustrate adaptive card height.",
            author: "Josiah Barclay",
            date: "March 23, 2023"
        },
        {
            title: "The last blog post title",
            img: "https://dummyimage.com/600x350/adb5bd/495057",
            category: "News",
            description: "Some more quick example text to build on the card title.",
            author: "Evelyn Martinez",
            date: "April 2, 2023"
        }*/
    ];

    const itemsPerPage = 3;
    let currentPage = 1;

    function displayBlogPreviews(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = blogPreviews.slice(startIndex, endIndex);

        const container = document.getElementById("blog-preview-container");
        if (!container) return; // Stop execution if container is missing

        container.innerHTML = ""; // Clear existing content

        paginatedItems.forEach((item) => { // EDIT HTML content here!
            const cardHTML = `
                <div class="col-lg-4 mb-5">
                    <div class="card h-100 shadow border-0">
                        <img class="card-img-top" src="${item.img}" alt="${item.title}" />
                        <div class="card-body p-4">
                            <div class="badge bg-secondary bg-gradient rounded-pill mb-2">${item.category}</div>
                            <a class="text-decoration-none link-dark stretched-link" href="#!">
                                <h5 class="card-title mb-3">${item.title}</h5>
                            </a>
                            <p class="card-text mb-0">${item.description}</p>
                        </div>
                        <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                            <div class="d-flex align-items-end justify-content-between">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..." />
                                    <div class="small">
                                        <div class="fw-bold">${item.author}</div>
                                        <div class="text-muted">${item.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += cardHTML;
        });

        setupPagination();
    }

    function setupPagination() {
        const pagination = document.getElementById("pagination");
        pagination.innerHTML = "";

        const totalPages = Math.ceil(blogPreviews.length / itemsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            pagination.innerHTML += `
                <li class="page-item ${i === currentPage ? "active" : ""}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }

        document.querySelectorAll(".page-link").forEach((button) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                currentPage = parseInt(this.getAttribute("data-page"));
                displayBlogPreviews(currentPage);
            });
        });
    }

    displayBlogPreviews(currentPage);

});


/* Age Gate */
function showAgeGate() {
    const ageGate = document.getElementById("age-gate");
    console.log("Age Gate element found:", ageGate);  // Debugging log
    ageGate.style.display = "flex";

    // Using event listeners to trigger action
    document.getElementById("age-yes").addEventListener("click", () => {
        console.log("Yes button clicked");
        localStorage.setItem("age_verified", "true");

        // Ensure age gate is hidden
        ageGate.style.display = "none";
    });

    document.getElementById("age-no").addEventListener("click", () => {
        console.log("No button clicked");
        window.location.href = "https://www.google.com"; // Redirect underage visitors
    });
}

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded triggered");
    if (localStorage.getItem("age_verified") !== "true") {
        console.log("Age gate not verified yet, showing gate");
        showAgeGate();
    }
    if (localStorage.getItem("age_verified") === "true") {
        console.log("Age gate verified");
        showAgeGate();
    }
});