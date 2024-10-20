const plansza = document.querySelector("#plansza1")
const szerokosc = 8

/*function stworzPlansze(){
    for(let i=0;i<=63;i++){
        const kwadrat = document.createElement('div')
        kwadrat.classList.add('kwadrat')
        //kwadrat.innerHTML = poczatkowaFigura
        const wiersz = Math.floor( (63 - i) / 8) + 1
        
        kwadrat.setAttribute('kwadrat-id' ,i)
        if(wiersz % 2 === 0){
            kwadrat.classList.add(i % 2 === 0 ? "beige" : "brazowy" )
        }else{
            kwadrat.classList.add(i % 2 === 0 ? "brazowy" : "beige" )
        }
        switch(fen3[i]){

                //CZARNE
            
            case 'r':
                kwadrat.innerHTML=wieza
                kwadrat.firstChild.firstChild.classList.add('czarny')
                break;
            case 'n':
                kwadrat.innerHTML=kon
                kwadrat.firstChild.firstChild.classList.add('czarny')
                break;
            case 'b':
                kwadrat.innerHTML=goniec
                kwadrat.firstChild.firstChild.classList.add('czarny')
                break;
            case 'q':
                kwadrat.innerHTML=krolowa
                kwadrat.firstChild.firstChild.classList.add('czarny')
                break;
            case 'k':
                kwadrat.innerHTML=krol
                kwadrat.firstChild.firstChild.classList.add('czarny')
                break;
            case 'p':
                kwadrat.innerHTML=pionek
                kwadrat.firstChild.firstChild.classList.add('czarny')
                break;

                //BIALE 

            case 'R':
                kwadrat.innerHTML=wieza
                kwadrat.firstChild.firstChild.classList.add('bialy')
                break;
            case 'N':
                kwadrat.innerHTML=kon
                kwadrat.firstChild.firstChild.classList.add('bialy')
                break;
            case 'B':
                kwadrat.innerHTML=goniec
                kwadrat.firstChild.firstChild.classList.add('bialy')
                break;
            case 'Q':
                kwadrat.innerHTML=krolowa
                kwadrat.firstChild.firstChild.classList.add('bialy')
                break;
            case 'K':
                kwadrat.innerHTML=krol
                kwadrat.firstChild.firstChild.classList.add('bialy')
                break;
            case 'P':
                kwadrat.innerHTML=pionek
                kwadrat.firstChild.firstChild.classList.add('bialy')
                break;
        }
        kwadrat.firstChild && kwadrat.firstChild.setAttribute('draggable' ,true)
        plansza.append(kwadrat)
    }
}
stworzPlansze()*/

let poczatkoweFigury=[
    wieza,kon,goniec,krolowa,krol,goniec,kon,wieza,
    pionek,pionek,pionek,pionek,pionek,pionek,pionek,pionek,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pionek,pionek,pionek,pionek,pionek,pionek,pionek,pionek,
    wieza,kon,goniec,krolowa,krol,goniec,kon,wieza,
]

function stworzPlansze(){
    poczatkoweFigury.forEach((poczatkowaFigura, i) => { 
        const kwadrat = document.createElement('div')
        kwadrat.classList.add('kwadrat')
        kwadrat.innerHTML = poczatkowaFigura
        kwadrat.firstChild && kwadrat.firstChild.setAttribute('draggable' ,true)
        kwadrat.setAttribute('id' ,i)
        const wiersz = Math.floor( (63 - i) / 8) + 1
        if(wiersz % 2 === 0){
            kwadrat.classList.add(i % 2 === 0 ? "beige" : "brazowy" )
        }else{
            kwadrat.classList.add(i % 2 === 0 ? "brazowy" : "beige" )
        }
        if( i <= 15){
            kwadrat.firstChild.firstChild.classList.add('czarny')
        }
        if(i >= 48){
            kwadrat.firstChild.firstChild.classList.add('bialy')
        }
        plansza.append(kwadrat)
    })
}
stworzPlansze()

