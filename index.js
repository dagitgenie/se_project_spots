// const profileEditBtn = document.querySelector(".profile__edit-btn");
// console.log("Hello");


const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-open")
})

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-open")
})

const newPostBtn = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");

const addNewPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-open")
})

addNewPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-open")
})