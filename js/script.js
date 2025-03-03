console.log('Script connected');

const arrayOfhealthWishes = [
    'Кохання це не тільки слова, це почуття, яке виражається вчинками.',
    'Вмієте любити - вмієте жити. Вмієте жити - вмієте любити.',
    'Любов - це велика сила, яка може змінити світ.',
    'Любов - це найкраще, що може бути в житті.',
    'Кохання - це коли ти не можеш уявити своє життя без іншої людини.',
    'Любов - це коли ти готовий зробити все заради щастя іншої людини.',
    'Кохання - це коли ти відчуваєш себе щасливим, просто дивлячись на іншу людину.',
    'Любов - це коли ти готовий пробачити всі помилки іншої людини.',
    'Кохання - це коли ти відчуваєш себе повним, коли інша людина поруч.',
    'Любов - це коли ти готовий поділитися всім, що маєш, з іншою людиною.',
    'Кохання - це коли ти відчуваєш себе захищеним поруч з іншою людиною.',
    'Любов - це коли ти готовий підтримати іншу людину у всіх її починаннях.',
    'Кохання - це коли ти відчуваєш себе щасливим, просто знаючи, що інша людина щаслива.',
    'Любов - це коли ти готовий зробити все, щоб інша людина відчувала себе коханою.',
    'Кохання - це коли ти відчуваєш себе живим поруч з іншою людиною.',
    'Любов - це коли ти готовий прийняти всі недоліки іншої людини.',
    'Кохання - це коли ти відчуваєш себе натхненним поруч з іншою людиною.',
    'Любов - це коли ти готовий зробити все, щоб інша людина була щаслива.',
    'Кохання - це коли ти відчуваєш себе повним поруч з іншою людиною.',
    'Любов - це коли ти готовий зробити все, щоб інша людина відчувала себе коханою.'
];

let countofpills = 5;
console.log('countofpills ' + countofpills);

document.getElementById('count-of-pills').innerText = '🧡'.repeat(countofpills);

document.getElementById('btn_health_wishes').addEventListener('click', () => {
    console.log('Button clicked');
    let index = Math.floor(Math.random() * arrayOfhealthWishes.length);
    document.getElementById('p_health_wishes').innerText = arrayOfhealthWishes[index];

    countofpills--
    console.log('countofpills ' + countofpills);
    document.getElementById('count-of-pills').innerText = '🧡'.repeat(countofpills) + '🤍'.repeat(5 - countofpills);

    if (countofpills == 0) {
        document.getElementById('btn_health_wishes').style.display = 'none';
    }
});

document.getElementById('btn-buy-pills').addEventListener('click', () => {
    countofpills = 5;
    document.getElementById('count-of-pills').innerText = '🧡'.repeat(countofpills);
    document.getElementById('btn_health_wishes').style.display = 'inline-block';
    document.getElementById('p_health_wishes').innerText = '';
    console.log('btn-buy-wishes clicked');
});