const now = new Date();
const currentDateTime = now.toLocaleString();
//console.log(currentDateTime);

let intro = [
    'Seize the day and remember',
    'If you are feeling uninspired remember',
    'It was once said',
    'A great philosopher once said',
]

let wisdom = [
        '“We are what we repeatedly do. Excellence, then, is not an act, but a habit." Aristotle', 
        '“The only true wisdom is in knowing you know nothing." Socrates',
        '“It does not matter how slowly you go as long as you do not stop." Confucious',
        '“The beginning is the most important part of the work." Plato',
        '“It is not what happens to you, but how you react to it that matters." Epictetus',
        '“He who has a why to live can bear almost any how." Nietzsche',
        '“The happiness of your life depends upon the quality of your thoughts." Marcus Aurelias',
        '“Do not go where the path may lead, go instead where there is no path and leave a trail. Emerson',
        '"The journey of a thousand miles begins with one step." Lao Tzu',
        '“Dare to know! Have the courage to use your own understanding." Kant',
    ]


function mssge() {
    alert(`It is ${currentDateTime}. ${intro[(Math.floor(Math.random() * intro.length))]} ${wisdom[(Math.floor(Math.random() * wisdom.length))]}`);
}

