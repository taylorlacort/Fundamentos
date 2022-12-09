const changeThemebtn = document.querySelector('#change-theme')

changeThemebtn.addEventListener('change', function () {
    document.body.classList.toggle('dark');
})