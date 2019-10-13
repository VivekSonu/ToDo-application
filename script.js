function call()
    {
    var todo=document.getElementById('input').value ;
    var li=document.createElement("li");
    li.innerHTML=todo;
    document.getElementById('ol').appendChild(li);
    }