const facts = [
    "Attack on Titan has become one of the most popular anime series worldwide since its debut.",
    "The series was inspired by Hajime Isayama's experiences working in a bar and the people he met there.",
    "Eren Yeager was originally supposed to be killed off in the first season, but fans' reactions led to him surviving.",
    "The Titans in the series are a metaphor for humanity's fears and struggles.",
    "The iconic ‘Three Dimensional Maneuver Gear’ was inspired by the idea of flying."
];

const readBtn = document.getElementById('ReadBtn');
const factContainer = document.getElementById('factContainer');
const randomFact = document.getElementById('randomFact');
const closeFact = document.getElementById('closeFact');

readBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    randomFact.textContent = facts[randomIndex];
    factContainer.style.display = 'block';
});

closeFact.addEventListener('click', () => {
    factContainer.style.display = 'none';
});
