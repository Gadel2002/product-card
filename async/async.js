const usersTemplate = document.getElementById('users__template');
const usersList = document.getElementById('users-list');
const loader = document.querySelector('.container__message');
const messageTitle = document.querySelector('.message__title');
const removeCards = document.getElementById('remove-cards');
const getCards = document.getElementById('get-cards');

const renderUsers = (users) => {
  usersList.innerHTML = '';
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userClone = usersTemplate.content.cloneNode(true);
    userClone.querySelector('.id').textContent = `Id: ${user.id}`;
    userClone.querySelector('.name').textContent = `Name: ${user.name}`;
    userClone.querySelector(
      '.surname'
    ).textContent = `Surname: ${user.surname}`;
    userClone.querySelector('.age').textContent = `Age: ${user.age}`;
    userClone.querySelector('.email').textContent = `Email: ${user.email}`;

    const removeCard = userClone.getElementById('remove-card');

    removeCard.addEventListener('click', () => {
      removeOneCard(user.id);
    });

    usersList.appendChild(userClone);
  }
};

const localUsers = localStorage.getItem('users');

if (localUsers) {
  const parseUsers = JSON.parse(localUsers);
  renderUsers(parseUsers);
  loader.style.display = 'none';
} else {
  fetch('./users.json')
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        renderUsers(data.users);
        loader.style.display = 'none';
        localStorage.setItem('users', JSON.stringify(data.users));
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
      loader.textContent = 'Ошибка при загрузке данных!';
    });
}

const removeAllCards = () => {
  usersList.innerHTML = '';

  localStorage.removeItem('users');

  loader.style.display = 'flex';
  messageTitle.textContent = 'Нет пользователей!';
};

removeCards.addEventListener('click', removeAllCards);

const getAllCards = () => {
  const showUsers = localStorage.getItem('users');

  if (showUsers) {
    const parseUsers = JSON.parse(showUsers);

    renderUsers(parseUsers);

    loader.style.display = 'none';
    usersList.style.display = 'flex';
  } else {
    loader.style.display = 'flex';
    messageTitle.textContent = 'Нет сохраненных пользавателей!';
    usersList.innerHTML = '';
  }
};

getCards.addEventListener('click', getAllCards);

const removeOneCard = (id) => {
  const getUsers = localStorage.getItem('users');
  const parseUsers = JSON.parse(getUsers);
  const filterUsers = parseUsers.filter((user) => {
    return user.id !== id;
  });

  localStorage.setItem('users', JSON.stringify(filterUsers));
  renderUsers(filterUsers);
};
