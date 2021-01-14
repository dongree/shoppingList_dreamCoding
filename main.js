'use strict'

const plusBtn = document.querySelector('.addBtn');
const inputBox = document.querySelector('.inputBox');
const listBox = document.querySelector('.listBox');
const trashBtn = document.querySelector('.trashBtn');

// 리스트 추가
plusBtn.addEventListener('click', ()=>{
    listBox.innerHTML += `<li>${inputBox.value}<button class='trashBtn'><i class="fas fa-trash-alt"></i></button></li>`;
})

// 리스트 삭제(미완성)
// trashBtn.addEventListener('click', ()=>{
//     console.log('haha');
// })
