const container = document.querySelector(".container");

const content = document.createElement("div");

content.classList.add("content");
content.innerHTML = "<p>Hey I'm red!</p><h3>Hey I'm a blue h3!</h3>";

content.style.cssText = "color:red";

// add container
container.appendChild(content);

// 2nd container

const content2 = document.createElement("div2");

content2.classList.add("content2");
content2.innerHTML = "<h1>I'm in a div</h1><p>ME TOO!</p>";

content2.style.cssText = "color:blue";

// add container
container.appendChild(content2);
