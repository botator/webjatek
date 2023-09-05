let ido = 30;
function minden(){
pontokd =0;
const visszaszamol = document.getElementById("szamlalo");


setInterval(updateCountdown, 1000);

function updateCountdown(){
    const percek = Math.floor(ido/60);
    let masodpercek = ido % 60;

    visszaszamol.innerHTML = `${masodpercek}`;
    
    ido--;
if(ido==-1)
{ido++;}
}
}


let pontokd =0;
function pontos()
{
    if(ido<30 && ido>0){
    const menyipont = document.getElementById("pontok");
    pontokd++;
    menyipont.innerHTML = pontokd;
    }
    
}
