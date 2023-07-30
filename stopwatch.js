let x = 0;
let y = 0;
let z = 0;

document.getElementById('start').addEventListener('click',start);

function start(){
    var time = setInterval(() => {
        if (x >= 60) {
            x=0;
            y++;
            yazdir();
        }else{
            yazdir();
        }


        if (y >= 60) {
            y=0;
            z++;
        }

        function yazdir(){
            if (z<10 && y<10) {
                document.getElementById('word').innerHTML = `0${z}:0${y}:${x}`;
            }else if(z<10){
                document.getElementById('word').innerHTML = `0${z}:${y}:${x}`;
            }else if(y<10){
                document.getElementById('word').innerHTML = `${z}:0${y}:${x}`;
            }
        }

        function deneme() {
            clearInterval(time)
        }
        function reset() {
            x=0;
            y=0;
            clearInterval(time);
            yazdir();
        }
        document.getElementById('stop').addEventListener('click',deneme);
        document.getElementById('reset').addEventListener('click',reset);
        x++;
    }, 1000);
}