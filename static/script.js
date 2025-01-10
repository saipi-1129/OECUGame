function start() {

    document.querySelectorAll('.ranking').forEach(function(element) {
        element.style.display = 'none';
    });    

    let difficult = 120;
    let result = document.getElementById('view_links');
    result.innerHTML = "";
    document.getElementById('btn').innerHTML = "";
    for (var i = 1; i <= difficult; i++) {
        result.insertAdjacentHTML('beforeend', `<div class="result" id="${i}"><a href="javascript:miss()" id="a${i}"><img src="static/images/chromecanary.png" id="img${i}"></a></div>`);
    }

    var random = Math.floor(Math.random() * difficult); //0から89
    let img = document.getElementById('img' + random);
    img.src = "static/images/oecu.png";
    document.getElementById('a' + random).setAttribute('href', 'javascript:clear()');
    startTime = Date.now();

    let usedIndexes = new Set([random]);
    for (var i = 1; i <= 50; i++) {
        do {
            random = Math.floor(Math.random() * difficult);
        } while (usedIndexes.has(random));
        usedIndexes.add(random);
        img = document.getElementById('img' + random);
        img.src = "static/images/chromium.png";
    }
    for (var i = 1; i <= 50; i++) {
        do {
            random = Math.floor(Math.random() * difficult);
        } while (usedIndexes.has(random));
        usedIndexes.add(random);
        img = document.getElementById('img' + random);
        img.src = "static/images/chrome.png";
    }
}

function miss() {
    alert('失敗です');
    location.reload();
}

function clear() {
    let clearTime = (Date.now() - startTime) / 1000;
    alert(clearTime + '秒でクリア！');

    // clearTimeをFlaskサーバーに送信する
    fetch('/send-cleartime', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clearTime: clearTime })  // clearTimeを送信
    })
    .then(response => response.json())
    .then(data => {
        console.log('Clear time sent successfully:', data);
    })
    .catch((error) => {
        console.error('Error sending clear time:', error);
    });


    document.querySelectorAll('.ranking').forEach(function(element) {
        element.style.display = 'none';
    });  

    // ページをリロード
    
    location.reload();
}


function taisen(){
    // ここを使って対戦機能実装する
    alert("未実装です。お楽しみに！");
}