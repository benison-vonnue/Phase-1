// ​Task 8 (45 min) - Blog Comment System​
// ​390. ​Comment section on blog article page: name + comment input, comments shown newest first​
// 391.​ Support nested replies: each comment has a Reply button that opens an inline form​
// ​392.​ Upvotes persisted to localStorage - each user can upvote once per comment​
// ​393.​ ​Sanitise comment text using textContent not innerHTML to prevent XSS​

const commentContainer = document.querySelector(".comment-container");
const commentInnerContainer = document.querySelector(
  ".comment-container > .comments > .inner-comments",
);
const commentContainerCloseBtn = document.querySelector(
  ".comment-container > .comments > button",
);

const commentInput = document.querySelector(".add-comment-container input");
const commentAddBtn = document.querySelector(".add-comment-container button");

const articleOneBtn = document.querySelector(
  "article[data-article='1'] button",
);
const articleTwoBtn = document.querySelector(
  "article[data-article='2'] button",
);
const articleThreeBtn = document.querySelector(
  "article[data-article='3'] button",
);

const comments =
  localStorage.getItem("comments") !== null
    ? JSON.parse(localStorage.getItem("comments"))
    : [];

const createCommentCard = (comment) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("comment-card");
  cardDiv.dataset.id = comment.id;
  const cardH4 = document.createElement("h4");
  cardH4.textContent = comment.name;
  const cardComment = document.createElement("p");
  cardComment.textContent = comment.content;
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("action-btns");
  const replyBtn = document.createElement("button");
  replyBtn.textContent = "reply";
  const upvoteBtn = document.createElement("button");
  upvoteBtn.textContent = "upvote";
  const innerSection = document.createElement("div");
  innerSection.classList.add("inner-comment-section");

  btnContainer.appendChild(upvoteBtn);
  btnContainer.appendChild(replyBtn);

  cardDiv.appendChild(cardH4);
  cardDiv.appendChild(cardComment);
  cardDiv.appendChild(btnContainer);
  cardDiv.appendChild(innerSection);

  return cardDiv;
};

const createCommentCards = (groupedComments, article) => {
  if (!(article in groupedComments)) {
    return [];
  }
  return groupedComments[article].map((comment) => {
    const card = createCommentCard(comment);
    let innerCards = null;
    if (Array.isArray(groupedComments[comment.id])) {
      innerCards = createCommentCards(groupedComments, comment.id);
    }
    if (innerCards) {
      innerCards.forEach((each) => {
        card.children[3].appendChild(each);
      });
    }

    return card;
  });
};

const displayArticleComments = (article) => {
  if (!comments) return;

  const articleComments = comments.filter((each) => each.blog === article);

  const groupedComments = articleComments.reduce((group, each) => {
    const { parent } = each;
    if (!group[parent]) {
      group[parent] = [];
    }
    group[parent].push(each);
    return group;
  }, {});

  const commentDom = createCommentCards(groupedComments, article);

  commentDom.forEach((each) => {
    commentInnerContainer.appendChild(each);
  });
};

let parentArticle = null;
let replayTargetId = null;

commentInnerContainer.addEventListener("click", (e) => {
  replayTargetId = e.target.parentElement.parentElement.dataset.id;
  commentInput.focus();
});

commentAddBtn.addEventListener("click", (e) => {
  const [name, content] = commentInput.value.trim().split(" ");

  const commentObj = {};
  commentObj["id"] = `comment${comments.length + 1}`;
  commentObj.name = name.replace("name:", "");
  commentObj.content = content.replace("content:", "");
  commentObj.blog = parentArticle;
  commentObj.parent = replayTargetId;
  commentObj.upvote = 0;

  commentInput.value = "";

  comments.push(commentObj);
  localStorage.setItem("comments", JSON.stringify(comments));

  const clickEvent = new Event("click");

  switch (parentArticle) {
    case "article1":
      articleOneBtn.dispatchEvent(clickEvent);
      return;
    case "article2":
      articleTwoBtn.dispatchEvent(clickEvent);
      return;
    case "article3":
      articleThreeBtn.dispatchEvent(clickEvent);
      return;
  }
});

articleOneBtn.addEventListener("click", () => {
  commentContainer.style.display = "flex";
  replayTargetId = "article1";
  parentArticle = "article1";
  commentInnerContainer.replaceChildren();
  displayArticleComments("article1");
});

articleTwoBtn.addEventListener("click", () => {
  commentContainer.style.display = "flex";
  replayTargetId = "article2";
  parentArticle = "article2";
  commentInnerContainer.replaceChildren();
  displayArticleComments("article2");
});

articleThreeBtn.addEventListener("click", () => {
  commentContainer.style.display = "flex";
  replayTargetId = "article3";
  parentArticle = "article3";
  commentInnerContainer.replaceChildren();
  displayArticleComments("article3");
});

commentContainerCloseBtn.addEventListener("click", () => {
  commentContainer.style.display = "none";
});
