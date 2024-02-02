const commandSearch = document.getElementById('commandSearch');

commandSearch.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase();
  let commands = document.querySelectorAll('.command_general_info');
  commands.forEach(command => {
    if (command.textContent.toLowerCase().includes(currentValue)) {
      command.parentNode.style.display = 'block';
    } else {
      command.parentNode.style.display = 'none';      
    }
  })
  console.log(currentValue);
})
