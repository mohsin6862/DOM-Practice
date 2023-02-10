document.getElementById('submit-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area');
    
    const inputText = textArea.value;

    const updatedText = document.getElementById('text-update');
    updatedText.innerText = inputText;
   textArea.value = "";
})




document.getElementById('comment-btn').addEventListener('click',function(){

    const textArea = document.getElementById('text-areas');
    const newcomment = textArea.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newcomment;
    commentContainer.appendChild(p);
    textArea.value = '';
})


// document.getElementById('comment-btn').addEventListener('click',function(){
//     const commentBox = document.getElementById('text-area');
//     const newComment = commentBox.value;

//     const commentContainer = document.getElementById('comment-container');

//     const p = document.createElement('p');
//     p.innerText = newComment;
//     commentContainer.appendChild(p);
//     commentBox.value = "";

    
// })