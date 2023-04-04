function onEntry(entry) {
    console.log("asda");
    entry.forEach(change => {

        if (change.isIntersecting) {
            change.target.classList.add('visible');
        }
    });
}
console.log("asda");
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.triger');
for (let elm of elements) {
    observer.observe(elm);
}



var navbarLinks = document.querySelectorAll('.nav a');
for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        var targetId = this.getAttribute('href');
        var targetPosition = document.querySelector(targetId).offsetTop - 50;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Добавляем плавную прокрутку

        });
    });
}