const dropdownButton = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const dropdownArrow = document.getElementById("arrow")

const toggleDropdown = function() {
  dropdownMenu.classList.toggle('show');
  dropdownArrow.classList.toggle('arrow')
}

dropdownButton.addEventListener('click', function(e) {
  e.stopPropagation()
  toggleDropdown()
})

document.documentElement.addEventListener('click', function() {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
})