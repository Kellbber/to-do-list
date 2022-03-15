const botao = document.querySelector("#botaoAdicionar");
botao.addEventListener("click", function (){
    const li = document.createElement("li");
    const inputValor = document.querySelector("#campoAdicionar").value;
    const taskText = document.createTextNode(inputValor);
    li.appendChild(taskText);

    document.getElementById("myUL").appendChild(li);

    if(inputValor===""){
        alert(`Você precisa digitar algo para adicionar!`);
    
    }else{
        document.getElementById("myUL").appendChild(li);
    }

    document.querySelector("#campoAdicionar").value="";

    const span = document.createElement("span"); 
    const icon = document.createTextNode("\u00D7"); 
    span.className = "close"; 
    span.appendChild(icon); 
    li.appendChild(span); 

    const close = document.querySelectorAll(".close");
    for(let i=0; i<close.length;i++){
    close[i].addEventListener("click", function (){
        const li= this.parentElement;
        li.style.display="none";
    })
    }

    const list = document.querySelector("ul");
    list.addEventListener("click", function (eli){
        if(eli.target.nodeName === "LI"){
            eli.target.classList.toggle("checked");
        }
    })
});

