document.getElementById('comment-btn').addEventListener('click',function(){

    const commentArea = document.getElementById('type-comment');
    const commentText = commentArea.value;
    const commentContainer = document.getElementById('comment-container');
    const newComment = document.createElement('p');
    commentContainer.appendChild(newComment);
    newComment.innerText = commentText;
    commentArea.value = '';
})


