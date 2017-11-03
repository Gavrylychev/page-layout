var textfield = document.getElementById('textfield');
var buttonSubmit = document.getElementById('button-submit');
var comments = document.getElementById('comments');

buttonSubmit.addEventListener('click', sendForm);
textfield.addEventListener('keydown', ctrlEnter);

function ctrlEnter(e){
  if(e.ctrlKey && e.keyCode === 13){
    renderCommentHTML(e.target.value);

  }
}

function sendForm(e) {
  e.preventDefault();
  renderCommentHTML(textfield.value);
}

function renderCommentHTML(commentText) {
  var comment = document.createElement('div');
  var name = document.createElement('span');
      name.classList.add('name');
      name.innerText = 'Unknown user';
  var date = document.createElement('span');
      date.classList.add('date');
      date.innerText = '' + new Date().toDateString();
  var commentDiv = document.createElement('div');
      commentDiv.classList.add('block');
      commentDiv.innerText = commentText;
  comment.appendChild(name);
  comment.appendChild(date);
  comment.appendChild(commentDiv);

  comments.appendChild(comment);
}
