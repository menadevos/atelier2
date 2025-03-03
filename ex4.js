document.addEventListener("DOMContentLoaded", function () {
    var myBlogsLink = document.getElementById("myBlogsLink");
    var addPostButton = document.getElementById("addp");
    var logoutButton = document.createElement("button");
    var signUpButton = document.getElementById("signupButton");
    var mainContent = document.getElementById("main-content");
    var blogSection = document.getElementById("blogs-section");
    var postForm = document.querySelector(".cadre");
    var postButton = document.getElementById("postbu");
    var recentBlogsContainer = document.createElement("div"); 

    recentBlogsContainer.id = "recent-blogs";
    mainContent.appendChild(recentBlogsContainer); 

    
    logoutButton.textContent = "Logout";
    logoutButton.id = "logoutButton";
    logoutButton.style.marginLeft = "10px";
    logoutButton.style.padding = "8px 15px";
    logoutButton.style.background = "red";
    logoutButton.style.color = "white";
    logoutButton.style.border = "none";
    logoutButton.style.cursor = "pointer";

    var nav = document.querySelector("nav"); 
    if (nav) {
        nav.appendChild(logoutButton);
    }

    function isUserLoggedIn() {
        return localStorage.getItem("loggedInUser") !== null;
    }

    function loadRecentBlogs(filterByUser = false) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        recentBlogsContainer.innerHTML = "<h2>Recent Posts</h2>"; 

        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        posts = posts.slice(0, 5);
        posts.forEach(post => {
            if (filterByUser && loggedInUser && post.username !== loggedInUser.username) {
                return;
            }

            let article = document.createElement("article");
            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <small>Posted by: ${post.username} on ${post.timestamp}</small>
            `;
            recentBlogsContainer.appendChild(article);
        });
    }

    if (myBlogsLink) {
        myBlogsLink.addEventListener("click", function (event) {
            event.preventDefault();

            if (!isUserLoggedIn()) {
                alert("You must be logged in to see your blogs!");
                window.location.href = "login.html";
                return;
            }

            mainContent.style.display = "none";
            blogSection.style.display = "block";
            postForm.style.display = "none";
            loadRecentBlogs(true); 
        });
    }

    if (addPostButton) {
        addPostButton.addEventListener("click", function () {
            postForm.style.display = "block";
        });
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

            document.getElementById("title").value = "";
            document.getElementById("textar").value = "";

            loadRecentBlogs();
            postForm.style.display = "none";
        });
    }

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });

    loadRecentBlogs(); 
});
