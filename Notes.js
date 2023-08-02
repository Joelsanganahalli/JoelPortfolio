const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const noteList = document.getElementById('noteList');

noteForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    createNoteItem(noteText);
    noteInput.value = '';
  }
});

noteList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-note')) {
    const noteItem = event.target.closest('.note-item');
    noteItem.remove();
  }
});

function createNoteItem(noteText) {
  const noteItem = document.createElement('li');
  noteItem.classList.add('note-item');

  const noteTextElement = document.createElement('span');
  noteTextElement.textContent = noteText;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-note');
  deleteButton.textContent = 'Delete';

  noteItem.appendChild(noteTextElement);
  noteItem.appendChild(deleteButton);
  noteList.appendChild(noteItem);
}
