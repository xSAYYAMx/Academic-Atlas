document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const clearButton = document.getElementById("clearButton");
    const linksList = document.getElementById("linksList");
    const searchResults = document.getElementById("searchResults");
  
    // Event listener for input in the search bar
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      // Show links when the user starts searching
      if (searchTerm.length >= 4) {
        linksList.classList.remove("hidden");
      } else {
        linksList.classList.add("hidden");
        return; // Hide the search results if the search term is less than 4 characters
      }
  
      const links = linksList.getElementsByTagName("a");
      const results = [];
  
      for (let i = 0; i < links.length; i++) {
        const linkText = links[i].innerText.toLowerCase();
        if (linkText.includes(searchTerm)) {
          results.push(`<li>${links[i].outerHTML}</li>`);
        }
      }
  
      displayResults(results);
    });
  
    // Event listener to hide links when clicking anywhere on the body
    document.addEventListener("click", function () {
      linksList.classList.add("hidden");
    });
  
    // Event listener to prevent hiding when clicking inside the search bar
    searchInput.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  
    // Event listener for clear button
    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      linksList.classList.add("hidden");
      
      
      searchResults.innerHTML = "";
    });
  
    function displayResults(results) {
      searchResults.innerHTML = results.length
        ? results.join("")
        : "<li>No results found.</li>";
    }
  
    // Handle click on search result
    searchResults.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        // Handle the click on the search result link
        console.log("Clicked on:", e.target.href);
      }
    });
  });
  