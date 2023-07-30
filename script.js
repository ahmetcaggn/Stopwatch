var randomSayi;

let Count = 15;
let dogruCount = 0;
let yanlisCount = 0;
document.getElementById('zaman').innerHTML = `${Count}`;
function degis() {
    randomSayi = Math.floor((Math.random() * 26) + 65);
    let yazi = String.fromCharCode(randomSayi);
    document.getElementById('word').innerHTML = yazi;

}
degis();
// document.getElementById('word').addEventListener('change',myfunc);

document.getElementById('girdi').addEventListener('keypress', myfunc);
document.getElementById('girdi').addEventListener('keydown', deneme, { once: true });

function deneme() {
    var durdur = setInterval(() => {
        Count--;
        document.getElementById('zaman').innerHTML = Count;
        if (Count <= 0) {
            clearInterval(durdur);
        }
    }, 1000);


}

function resetle() {
    Count = 15;
    dogruCount = 0;
    yanlisCount = 0;
    document.getElementById('zaman').innerHTML = `${Count}`;
    document.getElementById('gizle').style.display = 'none';
    document.getElementById('dogru').innerHTML = ``;
    document.getElementById('yanlis').innerHTML = ``;
    document.getElementById('wpm').innerHTML = ``;
    document.getElementById('girdi').value = ``;
    document.getElementById('girdi').addEventListener('keydown', deneme, { once: true });
    degis();
}


function myfunc(e) {


    if (e.keyCode === 32) {

        if (Count > 0) {
            let key = document.getElementById('girdi').value;
            key = key.trim();

            if (document.getElementById('word').innerHTML.trim() == key.trim().toUpperCase()) {
                dogruCount++;

            } else {
                yanlisCount++;
            }

            document.getElementById('girdi').value = "";

            degis();
        } else {
            document.getElementById('word').innerHTML = 'Sureniz doldu...';
            document.getElementById('dogru').innerHTML = `Doğru kelime: ${dogruCount}`;
            document.getElementById('yanlis').innerHTML = `Yanlış kelime: ${yanlisCount}`;
            document.getElementById('wpm').innerHTML = `WPM: ${(yanlisCount + dogruCount) / (15/60)}`;
            document.getElementById('gizle').style.display = 'block';
        }

    }
}