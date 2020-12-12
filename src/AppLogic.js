const AppLogic = ()=>{
    //DOM Elements
    const topic = document.getElementById('topic');
    const content = document.getElementById('content');
    const button = document.getElementById('button');
    const note = document.querySelector('.entry');
    const noteTopic = document.querySelector('.note-topic');
    
    //event listener
    button.addEventListener("click", function(){
        noteTopic.innerHTML = topic.value;
        note.innerHTML = content.value;
        note.style.textAlign = "left"
        topic.value = "";
        content.value = "";
    });
}

export default AppLogic;
