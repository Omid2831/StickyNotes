const card = document.querySelector('.card');
 
card.addEventListener('click', function() {
    card.classList.toggle('topLeft');
    card.classList.toggle('bottomRight');
});
