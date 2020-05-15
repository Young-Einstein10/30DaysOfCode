// Access HTML Form Elements
const form = document.querySelector('form');
const formInput = document.getElementById('user-input');

// Access Paragraph Elemnts
const userProfile = document.querySelector('.userProfile');

// Add Submit Listener to Form
form.addEventListener('submit', searchUser);

// Function To Hanlde Search
async function searchUser(e) {
  // Prevents Automatic Submission of Form
  e.preventDefault();

  try {
    const response = await fetch(`https://api.github.com/users/${formInput.value}`);
    const data = await response.json();
    populateUI(data);

    // Clear Form Input
    form.reset();
  } catch (error) {
    console.log(error);
  }
}

// Input Data Gotten From API in UI
function populateUI(data) {
  const { login, avatar_url, followers, location, name, public_repos, repos_url } = data;

  userProfile.innerHTML = `
    <img src="${avatar_url}" alt="User Avatar">
    <p class="username"><em>@${login}</em></p>
    <p class="name">${name}</p>
    <a href="${repos_url}" class="repo_url">repo url</a>
    <p>
      <span class="no_of_followers">Followers: ${followers}</span>
        || 
      <span class="no_of_repos">Repositories: ${public_repos}</span>
    </p>
    <p class="userLocation">${location}</p>
  `;

  userProfile.style.display = 'block';
}