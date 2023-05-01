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
row1.className = "row";
row1.classList.add("row");
document.querySelector(".keyboard").append(row1);

const row2 = document.createElement('div');
row2.className = "row";
row2.classList.add("row");
document.querySelector(".keyboard").append(row2);

const row3 = document.createElement('div');
row3.className = "row";
row3.classList.add("row");
document.querySelector(".keyboard").append(row3);

const row4 = document.createElement('div');
row4.className = "row";
row4.classList.add("row");
document.querySelector(".keyboard").append(row4);

const row5 = document.createElement('div');
row5.className = "row";
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
