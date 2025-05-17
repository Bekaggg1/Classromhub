const uploadBtn = document.getElementById('upload-btn');
const materialTitle = document.getElementById('material-title');
const materialSubject = document.getElementById('material-subject');
const materialsList = document.getElementById('materials-list');

const homeworkBtn = document.getElementById('homework-btn');
const homeworkTitle = document.getElementById('homework-title');
const homeworkSubject = document.getElementById('homework-subject');
const homeworkList = document.getElementById('homework-list');

function createCard(title, subject, isHomework = false) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${subject}</p>
    <button class="delete-btn">Delete</button>
  `;
  card.querySelector('.delete-btn').onclick = () => card.remove();

  (isHomework ? homeworkList : materialsList).appendChild(card);
}

uploadBtn.onclick = () => {
  if (materialTitle.value && materialSubject.value) {
    createCard(materialTitle.value, materialSubject.value);
    materialTitle.value = '';
    materialSubject.value = '';
  } else {
    alert("Please fill in both fields.");
  }
};

homeworkBtn.onclick = () => {
  if (homeworkTitle.value && homeworkSubject.value) {
    createCard(homeworkTitle.value, homeworkSubject.value, true);
    homeworkTitle.value = '';
    homeworkSubject.value = '';
  } else {
    alert("Please fill in both fields.");
  }
};
