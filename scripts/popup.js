document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const resultsBody = document.getElementById('results-body');

    // Function to fetch and display project data
    const displayResults = (projectName) => {
        // Example: Fetch data related to the projectName (replace with actual data source)
        const projectData = [
            {
                name: projectName,
                pdf: 'example.pdf',
                page: 'https://example.com/project'
            }
        ];

        // Clear previous results
        resultsBody.innerHTML = '';

        // Populate results
        projectData.forEach(project => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${project.name}</td>
                <td><a href="${project.pdf}" target="_blank">Download PDF</a></td>
                <td><a href="${project.page}" target="_blank">View Project</a></td>
            `;
            resultsBody.appendChild(row);
        });
    };

    // Handle search bar input
    searchBar.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        dropdownLinks.forEach(link => {
            if (link.textContent.toLowerCase().includes(query)) {
                link.style.display = '';
            } else {
                link.style.display = 'none';
            }
        });
    });

    // Handle dropdown link clicks
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const projectName = event.target.getAttribute('data-project');
            displayResults(projectName);
        });
    });
});
