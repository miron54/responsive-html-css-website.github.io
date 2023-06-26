//----------------------------
// Responsywne menu
//----------------------------
const toggleNavbar = () => {
    const toggleIcon = document.querySelector('.toggle_icon')
    const navLinks = document.querySelector('.nav-links')

    toggleIcon.addEventListener('click', () => {
        navLinks.classList.toggle('toggle_active')
        toggleIcon.classList.toggle('toggle')
    })
}
toggleNavbar()


