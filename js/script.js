const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
};
