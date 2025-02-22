document.addEventListener('DOMContentLoaded', function() {
    const bookCover = document.querySelector('.book-cover');
    const preface = document.querySelector('.preface');
    let isOpen = false;

    bookCover.addEventListener('click', function() {
        if (!isOpen) {
            bookCover.style.transform = 'rotateX(75deg) translateZ(3px) scale(0.75)';
            preface.style.transform = 'translateY(-302px)';
            preface.querySelector('.icon').style.transform = 'rotateX(180deg)';
        } else {
            bookCover.style.transform = '';
            preface.style.transform = '';
            preface.querySelector('.icon').style.transform = '';
        }
        isOpen = !isOpen;
    });
});
