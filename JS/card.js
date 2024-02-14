let cardsContainer = document.getElementById('cardsContainer');
let cardIndex = 1;
const totalCards = 10; // Total number of cards
const cardsToShow = 1; // Number of cards to show at a time
const cardWidth = 320; // Adjust this based on your card width

function scrollNext() {
    const maxIndex = totalCards - cardsToShow;

    if (cardIndex < maxIndex) {
        cardIndex++;
        const newPosition = -((cardIndex - 1) * cardWidth);
        cardsContainer.style.transform = `translateX(${newPosition}px)`;
    }
}

function scrollPrevious() {
    if (cardIndex > 1) {
        cardIndex--;
        const newPosition = -((cardIndex - 1) * cardWidth);
        cardsContainer.style.transform = `translateX(${newPosition}px)`;
    }
}
