let minusfont = $.querySelector(".minus-option");
let plusfont = $.querySelector(".plus-option");
let underlinefont = $.querySelector(".underline-option");
let italicfont = $.querySelector(".italic-option");
let Boldfont = $.querySelector(".Bold-option");
let commentbox = $.querySelector(".comment-text");
let font = 19;
let btnpost = $.querySelector(".post-btn");
//////////////////////////////////////////////////
minusfont.addEventListener("click", minus);
plusfont.addEventListener("click", plus);
underlinefont.addEventListener("click", underline);
italicfont.addEventListener("click", italic);
Boldfont.addEventListener("click", Bold);
btnpost.addEventListener("click", postcomment);

function minus() {
  font--;
  commentbox.style.fontSize = font + "px";
}

function plus() {
  font++;
  commentbox.style.fontSize = font + "px";
}

function underline() {
  commentbox.classList.toggle("underline");
}

function italic() {
  commentbox.classList.toggle("italic");
}

function Bold() {
  commentbox.classList.toggle("Bold");
}

function postcomment() {
  if (commentbox.value.length > 0) {
    let mainComment = document.querySelector('.bottom-commentbox');
    let newCommentBox = document.createElement('div');
    newCommentBox.classList.add("commentbox");


    let namecommenter = document.createElement("div");
    namecommenter.classList.add("name-commenter");
    let commenter = document.createElement("p");
    commenter.classList.add("commenter");
    commenter.innerHTML = "ناشناس";

    let comment = document.createElement("div");
    comment.classList.add("comment");
    let commenttext = document.createElement("textarea");

    commenttext.setAttribute("overview","readonly");
    commenttext.innerHTML = commentbox.value;
    commenttext.className = commentbox.className;
    commenttext.style.fontSize = commentbox.style.fontSize; 

    commentbox.value = ""
    comment.append(commenttext);
    namecommenter.append(commenter);
    newCommentBox.append(namecommenter, comment)
    mainComment.append(newCommentBox)
  }
  else {
    console.log();
  }
}
