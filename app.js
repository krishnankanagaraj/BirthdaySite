var cards = document.querySelectorAll('.card')
var main = document.getElementById('main')
const screen = window.innerWidth
main.style.display = 'none'
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        card.style.setProperty('display', 'none', 'important');
        if (index == cards.length - 1) {
            reset.style.display = 'block'
            indicator.style.setProperty('display', 'none', 'important');
        }
        else {
            indicator.style.setProperty('display', 'block', 'important');
        }
    })
})

var countdownDate = new Date('April 18, 2024 00:00:00').getTime();

// Update the countdown every second
var countdownTimer = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the difference between now and the countdown date
    var distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerHTML = "Time Left For birthday:<br> " + " <span style='font-size:35px;color:salmon;'>" + (days > 1 ? days + "D" : '') + (hours > 1 ? hours + "H" : '') + (minutes > 1 ? minutes + "M" : '') + seconds + 'S' + "</span>";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = '<h2 class="text-white text-center">Happy Happy Happy 😍 Birthday Keshi</h2>';
        var message = document.getElementById('message')
        message.style.display = 'none'
        main.style.display = 'block'
    }
}, 1000); // Update every second