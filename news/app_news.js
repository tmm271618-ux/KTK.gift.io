//XMLHttpRequestでjsonデータを読み込み
let requestURL = '1.json';
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

//JavaScriptオブジェクトに変換
request.onload = function () {
    let data = request.response;
    data = JSON.parse(JSON.stringify(data));
    dataArticle(data);
}

//HTMLに取得したデータを表示する。
function dataArticle(els) {
    let article = document.querySelector('.article');
    els.forEach(el => {
        let filename = el.filename;
        let name = el.name;
        let MAIN = el.MAIN;
        let time = el.time;
        let day = el.day;

        let code = `
            <div class="BN">
                <img src="${filename}">
                <p class="MAIN">${MAIN}</p>
                <time class="time">${time}</time>
                <p class="day">${day}</p>
                <p class="name">${name}</p>
            </div>`;
    
        article.insertAdjacentHTML('beforeend', code);
    });
}
