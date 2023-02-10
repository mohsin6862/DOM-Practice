document.getElementById('submit-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area');
    
    const inputText = textArea.value;

    const updatedText = document.getElementById('text-update');
    updatedText.innerText = inputText;
   textArea.value = "";
})