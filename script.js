fetch("https://api.github.com/users/RahulSaikia0025/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");

    data.slice(0, 6).forEach(repo => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <a class="btn" href="${repo.html_url}" target="_blank">GitHub</a>
        ${repo.homepage ? `<a class="btn" href="${repo.homepage}" target="_blank">Live</a>` : ""}
      `;

      container.appendChild(div);
    });
  });
