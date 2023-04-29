// Get references to the button and elements
var moreButton = document.getElementById("more-btn");
var elements = document.querySelectorAll(".element");
// Array of participant objects
const participants = [
  {
    photo: 'assets/goku.jpg',
    name: 'Son Goku',
    title: 'Winner of the galactic martial art tournament',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde illum',
  },
  {
    photo: 'assets/naruto.jpg',
    name: 'Naruto',
    title: 'Title of participant',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde illum',
  },
  {
    photo: 'assets/goku.jpg',
    name: 'Son Goku',
    title: 'Winner of the galactic martial art tournament',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde illum',
  },
  {
    photo: 'assets/naruto.jpg',
    name: 'Naruto',
    title: 'Title of participant',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde illum',
  },
  {
    photo: 'assets/goku.jpg',
    name: 'Son Goku',
    title: 'Winner of the galactic martial art tournament',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde illum',
  },
  {
    photo: 'assets/naruto.jpg',
    name: 'Naruto',
    title: 'Title of participant',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde illum',
  },
];



participantsHTML += '</div>';
window.addEventListener('load', function() {
  const participantsContainer = document.getElementById('participants-desktop');
  let participantsHtml = '';

  for (const participant of participants) {
    participantsHtml += `
      <article class="participant">
        <div class="participant-photo"><img src="${participant.photo}" alt=""></div>
        <div class="participant-info">
          <h3>${participant.name}</h3>
          <blockquote>${participant.title}</blockquote>
          <p>${participant.bio}</p>
        </div>
      </article>
    `;
  }

  participantsContainer.innerHTML = participantsHtml;
});
window.addEventListener('load', function() {
  const participantsContainer = document.getElementById('participants-desktop');
  let participantsHtml = '';

  for (const participant of participants) {
    participantsHtml += `
      <article class="participant">
        <div class="participant-photo"><img src="${participant.photo}" alt=""></div>
        <div class="participant-info">
          <h3>${participant.name}</h3>
          <blockquote>${participant.title}</blockquote>
          <p>${participant.bio}</p>
        </div>
      </article>
    `;
  }

  participantsContainer.innerHTML = participantsHtml;
});
// Set event listener for button click
moreButton.addEventListener("click", function() {
  // Toggle the hide class on the elements
  for (var i = 0; i < elements.length; i++) {
    if (i >= 2) {
      elements[i].classList.toggle("hide");
    }
  }
  var buttonText = moreButton.textContent.toUpperCase();
  // Toggle the button text
  if (buttonText == "MORE ") {
    moreButton.innerHTML = "HIDE" + moreButton.innerHTML.substring(4);
  } else {
    moreButton.innerHTML = "MORE" + moreButton.innerHTML.substring(4);
  }
});
