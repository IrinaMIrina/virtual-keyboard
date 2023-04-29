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
div2.className = "body--keyboard keyboard";
div2.classList.add("keyboard");
document.querySelector(".wrapper").append(div2);

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
