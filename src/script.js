const div = document.createElement('div');
div.className = "wrapper";
div.classList.add("wrapper");
document.body.append(div);

const p = document.createElement('p');
p.className = "title";
p.classList.add("title");
p.textContent = "RSS Виртуальная клавиатура";
document.querySelector(".wrapper").append(p);

const textarea = document.createElement('textarea');
textarea.className = "body--textarea textarea";
textarea.classList.add("title");
document.querySelector(".wrapper").append(textarea);

const div2 = document.createElement('div');
div2.className = "keyboard";
div2.classList.add("keyboard");
document.querySelector(".wrapper").append(div2);

const row1 = document.createElement('div');
row1.className = "row1";
row1.classList.add("row");
document.querySelector(".keyboard").append(row1);

const row2 = document.createElement('div');
row2.className = "row2";
row2.classList.add("row");
document.querySelector(".keyboard").append(row2);

const row3 = document.createElement('div');
row3.className = "row3";
row3.classList.add("row");
document.querySelector(".keyboard").append(row3);

const row4 = document.createElement('div');
row4.className = "row4";
row4.classList.add("row");
document.querySelector(".keyboard").append(row4);

const row5 = document.createElement('div');
row5.className = "row5";
row5.classList.add("row");
document.querySelector(".keyboard").append(row5);

const description = document.createElement('p');
description.className = "description";
description.classList.add("description");
description.textContent = "Клавиатура создана в операционной системе Windows";
document.querySelector(".wrapper").append(description);

const language = document.createElement('p');
language.className = "description";
language.classList.add("description");
language.textContent = "Для переключения языка комбинация: левыe ctrl + alt";
document.querySelector(".wrapper").append(language);

const rowFirst = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];
function init() {
  let result = '';
  for (let i = 0; i < rowFirst.length; i += 1) {
    result += `<div class="key">${String.fromCharCode(rowFirst[i])}</div>`;
  }
  document.querySelector('.row1').innerHTML = result;
}
init();

const rowSecond = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
function initSecondRow() {
  let result = '';
  for (let i = 0; i < rowSecond.length; i += 1) {
    result += `<div class="key" >${String.fromCharCode(rowSecond[i])}</div>`;
  }
  document.querySelector('.row2').innerHTML = result;
}
initSecondRow();

const rowThird = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
function initThirdRow() {
  let result = '';
  for (let i = 0; i < rowThird.length; i += 1) {
    result += `<div class="key" >${String.fromCharCode(rowThird[i])}</div>`;
  }
  document.querySelector('.row3').innerHTML = result;
}
initThirdRow();

const rowFourth = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 35];
function initFourthRow() {
  let result = '';
  for (let i = 0; i < rowFourth.length; i += 1) {
    result += `<div class="key" >${String.fromCharCode(rowFourth[i])}</div>`;
  }
  document.querySelector('.row4').innerHTML = result;
}
initFourthRow();

const rowFifth = [17, 91, 18, 32, 18, 93, 17, 37, 38, 40, 39];
function initFifthRow() {
  let result = '';
  for (let i = 0; i < rowFifth.length; i += 1) {
    result += `<div class="key" >${String.fromCharCode(rowFifth[i])}</div>`;
  }
  document.querySelector('.row5').innerHTML = result;
}
initFifthRow();

const btns = document.querySelectorAll('.key');

btns.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
