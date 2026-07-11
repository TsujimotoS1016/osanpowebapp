const whereList = [
    "近所の公園で",
    "見知らぬ路地で",
    "大きな木の下で",
    "川沿いの道で",
    "坂道の途中で",
    "コンビニの前で",
    "自動販売機の横で",
    "駅の近くで",
    "いつも通らない道で",
    "ベンチに座って",
    "神社の境内で",
    "交差点で",
    "橋の上で",
    "階段で",
    "日向ぼっこしながら"
];

const whatList = [
    "深呼吸をする",
    "空を見上げる",
    "目を閉じて音を聴く",
    "写真を1枚撮る",
    "ストレッチをする",
    "水分補給をする",
    "スキップをしてみる",
    "猫を探す",
    "花を観察する",
    "面白い看板を探す",
    "鳥の声を聴く",
    "雲の形に名前をつける",
    "いつもより大股で歩く",
    "好きな歌をハミングする",
    "自販機で普段買わない飲み物を買う"
];

const whereText = document.getElementById('where-text');
const whatText = document.getElementById('what-text');
const actionBtn = document.getElementById('action-btn');
const btnText = actionBtn.querySelector('.btn-text');
const generatorArea = document.querySelector('.generator-area');

let isSpinning = false;
let rouletteInterval;

// ランダムに要素を取得する関数
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ルーレットを開始する関数
function startRoulette() {
    isSpinning = true;
    generatorArea.classList.add('roulette-active');
    generatorArea.classList.remove('roulette-stop');
    
    // ボタンのスタイルを変更
    actionBtn.classList.remove('start-btn');
    actionBtn.classList.add('stop-btn');
    btnText.textContent = 'ストップ！';

    // 50msごとにテキストを更新
    rouletteInterval = setInterval(() => {
        whereText.textContent = getRandomItem(whereList);
        whatText.textContent = getRandomItem(whatList);
    }, 50);
}

// ルーレットを停止する関数
function stopRoulette() {
    isSpinning = false;
    clearInterval(rouletteInterval);
    
    // 最終的な結果をセット（見た目がスムーズになるよう少し待つ）
    setTimeout(() => {
        whereText.textContent = getRandomItem(whereList);
        whatText.textContent = getRandomItem(whatList);
        
        generatorArea.classList.remove('roulette-active');
        generatorArea.classList.add('roulette-stop');
    }, 50);

    // ボタンのスタイルを元に戻す
    actionBtn.classList.remove('stop-btn');
    actionBtn.classList.add('start-btn');
    btnText.textContent = 'もう一度！';
}

// ボタンのクリックイベント
actionBtn.addEventListener('click', () => {
    if (isSpinning) {
        stopRoulette();
    } else {
        startRoulette();
    }
});
