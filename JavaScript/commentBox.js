document.getElementById('comment-btn').addEventListener('click',function(){
    const commentBox = document.getElementById('text-area');
    const newComment = commentBox.value;

    const commentContainer = document.getElementById('comment-container');

    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    commentBox.value = "";

    
})