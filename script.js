function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  
  const icon = document.getElementById("mode-icon");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}

document.addEventListener('DOMContentLoaded', function() {
const skillsContainer = document.querySelector('.skills-container');
const skillsLoop = document.querySelector('.skills-loop');

// Duplicate the skills loop for seamless scrolling effect
const clonedSkillsLoop = skillsLoop.cloneNode(true);

// Append the clone to the container
skillsContainer.appendChild(clonedSkillsLoop);
});


function sendMessage() {
const message = document.getElementById('chat-box').value;
if (message.trim() !== '') {
  alert('Message sent: ' + message);
  document.getElementById('chat-box').value = ''; // Clear the chat box
} else {
  alert('Please type a message.');
}
}


