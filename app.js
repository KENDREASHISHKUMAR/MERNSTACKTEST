fetch("http://localhost:5000/api/travel-logs")
  .then((res) => res.json())
  .then((logs) => {
    const logsContainer = document.getElementById("logs");
    logs.forEach((log) => {
      const logElement = document.createElement("div");
      logElement.innerHTML = `<h2>${log.title}</h2><p>${log.location}</p><p>${log.description}</p>`;
      logsContainer.appendChild(logElement);
    });
  });


// node server.js