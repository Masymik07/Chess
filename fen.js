let fen2="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w - - 0 1"

document.querySelector(".skopiowano").style.display="none"

function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result
}


function fen(e){
    fen2=""
    let licznik=0
    let aktualnyKwadrat=document.querySelector(".kwadrat").firstChild
    let jakaFigura="null"
    let ileZer=0

    wszystkieKwadraty.forEach((aktualnyKwadrat, i) => {
            if(aktualnyKwadrat.firstChild==null){
                jakaFigura="null"
            }else{
                jakaFigura = aktualnyKwadrat.firstChild.getAttribute("id");
                kolor = aktualnyKwadrat.firstChild.firstChild.getAttribute('class')
            }
            
            if(i==63&&jakaFigura=="null"){
                ileZer++
                fen2+=ileZer
            }
            if(licznik%8==0&&licznik>1){
                if(ileZer!=0){
                    fen2+=ileZer
                    ileZer=0
                }
                fen2+="/"
            }
                switch(jakaFigura){
                    case 'wieza':
                        if(ileZer!=0){
                            fen2+=ileZer
                            ileZer=0
                        }
                        if(kolor=="bialy"){
                            fen2+="R"
                        }else if(kolor=="czarny"){
                            fen2+="r"
                        }
                        break;
                    case 'pionek':
                        if(ileZer!=0){
                            fen2+=ileZer
                            ileZer=0
                        }
                        if(kolor=="bialy"){
                            fen2+="P"
                        }else if(kolor=="czarny"){
                            fen2+="p"
                        }    
                        break;
                    case 'kon':
                        if(ileZer!=0){
                            fen2+=ileZer
                            ileZer=0
                        }
                        if(kolor=="bialy"){
                            fen2+="N"
                        }else if(kolor=="czarny"){
                            fen2+="n"
                        }    
                        break;
                    case 'krol':
                        if(ileZer!=0){
                            fen2+=ileZer
                            ileZer=0
                        }
                        if(kolor=="bialy"){
                            fen2+="K"
                        }else if(kolor=="czarny"){
                            fen2+="k"
                        }    
                        break;
                    case 'krolowa':
                        if(ileZer!=0){
                            fen2+=ileZer
                            ileZer=0
                        }
                        if(kolor=="bialy"){
                            fen2+="Q"
                        }else if(kolor=="czarny"){
                            fen2+="q"
                        } 
                        break;
                    case 'goniec':
                        if(ileZer!=0){
                            fen2+=ileZer
                            ileZer=0
                        }
                        if(kolor=="bialy"){
                            fen2+="B"
                        }else if(kolor=="czarny"){
                            fen2+="b"
                        }  
                        break;
                    case "null":
                        ileZer++
                        break;
                }
                licznik++  
    })
    if(kogoKolej=="bialy"){
        fen2+=" w"
    }else{
        fen2+=" b"

    }
    fen2+=" - - 0 1"
    
        //ŁĄCZENIE ZE STOCKFISHEM
        async function postChessApi(data = []) {
            const response = await fetch("https://chess-api.com/v1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            return response.json();
        }
        //WYSWITLANIE DANYCH PRZESLANYCH PRZEZ STOCKFISH
        postChessApi({ fen: fen2 }).then((data) => {
            console.log(data)
            if(kogoKolej=="czarny"){
                let id=0
                let id1=0
                
                function chessToCoordinates(chessPosition) {
                    const file = chessPosition.charAt(0);
                    const rank = chessPosition.charAt(1);
                    const x = file.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
                    const y = 9 - parseInt(rank, 10); 
                    return { x, y };
                }
                    
                const coordinates = chessToCoordinates(json2array(data)[20]);
                id1 =(coordinates.x-1+((coordinates.y-1)*8))
                const coordinates1 = chessToCoordinates(json2array(data)[21]);
                id =(coordinates1.x-1+((coordinates1.y-1)*8))
    
                let figura_zab=document.getElementById(id1)
                let miejsce_doc=document.getElementById(id)
                miejsce_doc.innerHTML=""
                miejsce_doc.appendChild(figura_zab.firstChild)
                kogoKolej="bialy"
            }
        });
        
}

function skopiujFen(){
    navigator.clipboard.writeText(fen2);
    document.querySelector(".skopiowano").style.display=""
}