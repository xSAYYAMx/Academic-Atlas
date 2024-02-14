document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners or other JavaScript functionality here
    const chapters = document.querySelectorAll('.chapter');
    const chaptersLinks = document.querySelectorAll('.chapters-section a');

    // Hide all chapters initially
    chapters.forEach(chapter => {
        chapter.style.display = 'none';
    });

    // Show the first chapter by default
    chapters[0].style.display = 'block';

    chaptersLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetChapterId = link.getAttribute('href').substring(1);

            // Hide all chapters
            chapters.forEach(chapter => {
                chapter.style.display = 'none';
            });

            // Show the clicked chapter
            document.getElementById(targetChapterId).style.display = 'block';
        });
    });
});


// for the pdf section 


