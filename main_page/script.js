const menuBtn = document.querySelector('.btnResp button');
const navList = document.querySelector('.navList');

menuBtn.addEventListener('click', () => {
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
});