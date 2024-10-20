
const koniec = document.querySelector('.k1')
koniec.style.display="none"
let minutyDziesiatki = document.querySelector("#minuty1")
let minutyJednosci = document.querySelector("#minuty2")
let sekundyDziesiatki = document.querySelector("#sekundy1")
let sekundyJednosci = document.querySelector("#sekundy2")
let a = 0, b = 0, mojRuch = 1
let x, y, z, k

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function wyodrebnianie(liczba){
    let wynik=0
    wynik += liczba%10
    liczba = Math.floor(liczba / 10)
    a=liczba
    b=wynik
}

async function start1() {
    for(let i=z*10+k;i>=0;i--){
        if(x==0&&y==0){
            x=5
            y=9
        }
        wyodrebnianie(i)
        if(mojRuch==1){
        minutyDziesiatki.innerHTML=a
        minutyJednosci.innerHTML=b
        z=a
        k=b
        }else{
            break;
        }
        for(let j=x*10+y;j>=0;j--){
            wyodrebnianie(j)
            if(mojRuch==1){
                sekundyDziesiatki.innerHTML=a
                sekundyJednosci.innerHTML=b
                x=a
                y=b
                await sleep(1000);
            }
        }
    }
    if(x==0&&y==0&&z==0&&k==0){
        koniec.style.display="flex"
    }
}

function start() {
    let ileMinut = document.querySelector("#select1").value
    ileMinut--
    wyodrebnianie(ileMinut);
    z=a
    k=b
    wyodrebnianie(59);
    x=a
    y=b
    start1()
}

function stopCzas(){
    mojRuch=0
}

function startCzas(){
    mojRuch=1
    start1()
}