document.addEventListener("DOMContentLoaded", function () {
    var myBlogsLink = document.getElementById("myBlogsLink");
    var mainContent = document.getElementById("main-content");
    var blogSection = document.getElementById("blogs-section");
    var postButton = document.getElementById("postbu");
    var postsContainer = document.querySelector("main section"); // Where posts are displayed

    function isUserLoggedIn() {
        return localStorage.getItem("loggedInUser") !== null;
    }

   
    function loadPosts() {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        postsContainer.innerHTML = "<h2>Recent Posts</h2>"; // Reset content

        posts.forEach(post => {
            let article = document.createElement("article");
            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <small>Posted by: ${post.username}</small>
            `;
            postsContainer.appendChild(article);
        });
    }

    if (myBlogsLink && mainContent && blogSection) {
        myBlogsLink.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            mainContent.style.display = "none";
            blogSection.style.display = "block"; 
        });
    } else {
        console.error("Element not found: Check your HTML IDs.");
    }

   
    if (postButton) {
        postButton.addEventListener("click", function () {
            if (!isUserLoggedIn()) {
                alert("You must be logged in to post!");
                window.location.href = "login.html";
                return;
            }

            let title = document.getElementById("title").value.trim();
            let description = document.getElementById("textar").value.trim();

            if (title === "" || description === "") {
                alert("Title and description cannot be empty!");
                return;
            }

            let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

            let newPost = {
                title: title,
                description: description,
                username: loggedInUser.username,
                timestamp: new Date().toLocaleString() 
            };

            let posts = JSON.parse(localStorage.getItem("posts")) || [];
            posts.unshift(newPost); 
            localStorage.setItem("posts", JSON.stringify(posts));

            alert("Post successfully added!");

            
            loadPosts();
            mainContent.style.display = "block";
            blogSection.style.display = "none";
        });
    }

    
    loadPosts();
});

