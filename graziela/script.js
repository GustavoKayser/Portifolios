document.addEventListener("click", event => {
    target = event.target;
    targetParent = target.parentNode;
    
    text = document.getElementById("text");

    if (target == document.getElementById("apresentese") || targetParent == document.getElementById("apresentese")) {
        text.innerText = "Meu nome é Graziela, tenho 16 anos, moro em Urubici SC, gosto muito de dançar, (apesar de não ter tanto talento pra isso), gosto de assistir série e escutar música.";
    } else if (target == document.getElementById("projetos") || targetParent == document.getElementById("projetos")) {
        text.innerText = "Além de participar de projetos escolares, tenho o propósito de doar minhas roupas no mínimo 2 vezes ao ano e quando era mais nova no meu aniversário minha vó fazia um bolo e dava para famílias que precisavam."
    } else if (target == document.getElementById("cursos") || targetParent == document.getElementById("cursos")) {
        text.innerText = "Já participei de 2 cursos de inglês no qual estudo até hoje em um deles e neste ano comecei a fazer academia, pois eu era muito sedentária."
    } else if (target == document.getElementById("futuro") || targetParent == document.getElementById("futuro")) {
        text.innerText = "Desejo estudar fonoaudiologia na UFSC, em Florianópolis, quero morar em um apartamento e trabalhar muito pra ser rica."
    }
})