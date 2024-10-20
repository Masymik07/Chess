const wszystkieKwadraty = document.querySelectorAll(".kwadrat")
const planszaa = document.querySelector("#plansza1")
let kogoKolej = 'bialy'

wszystkieKwadraty.forEach(kwadrat => {
    kwadrat.addEventListener('dragstart', dragStart)
    kwadrat.addEventListener('dragover', dragNad)
    kwadrat.addEventListener('drop', dragUpusc)
})

let kolor
let pozStartId
let elemPrzen

function dragStart(e){
    pozStartId = e.target.parentNode.getAttribute('id')
    elemPrzen = e.target
}

function dragNad(e){
    e.preventDefault()
}

function dragUpusc(e){
    document.querySelector(".skopiowano").style.display="none"
    start1()
    e.stopPropagation() 
    const prawidlowyRuch = elemPrzen.firstChild.classList.contains("bialy")
    const zajete = e.target.classList.contains('figura')
    const valid = sprawdzCzyPrawidlowe(e.target,pozStartId,elemPrzen)
    const ruchPrzeciwnika = kogoKolej === 'bialy' ? 'czarny' : 'bialy'
    const zajetePrzezPrzeciwnika = e.target.firstChild?.classList.contains(ruchPrzeciwnika)
    if(prawidlowyRuch){
        if(zajetePrzezPrzeciwnika && valid){
                e.target.parentNode.append(elemPrzen)
                e.target.remove()
                zmienGracza()
                fen()
                return
        }
        if(zajete && !zajetePrzezPrzeciwnika){
            return
        }
        if(valid){
            e.target.append(elemPrzen)
            zmienGracza()
            fen()
            return
        }
    }
}

function zmienGracza(){
    if(kogoKolej === "czarny" ){
        startCzas()
        kogoKolej = "bialy"
    }else{
        stopCzas()
        kogoKolej = "czarny"
    }
}