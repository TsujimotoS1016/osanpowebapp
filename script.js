const missionList = [
    "近所の路地で、<br>猫を探す",
    "川沿いで、<br>水の音だけを聞く",
    "公園のベンチで、<br>雲の形を追う",
    "神社で、<br>深呼吸を3回する",
    "橋の上から、<br>流れる葉っぱを見送る",
    "湖畔で、<br>水切りの石を探す",
    "並木道で、<br>落ち葉を踏む音を楽しむ",
    "見知らぬ坂道で、<br>登り切って景色を見る",
    "城跡の芝生で、<br>ただ空を見上げる",
    "古い町並みで、<br>看板のタイポグラフィを眺める",
    "喫茶店で、<br>何も考えずにコーヒーの湯気を見る",
    "商店街で、<br>惣菜の匂いを嗅ぐ",
    "自販機の前で、<br>普段飲まない飲み物を買う",
    "本屋で、<br>表紙の色だけで本を1冊選ぶ",
    "駅のホームで、<br>電車を見送るだけにする",
    "踏切で、<br>通り過ぎる車両の数を数える",
    "バス停で、<br>次に来たバスに適当に乗る",
    "堤防で、<br>夕日を最後まで見届ける",
    "木の下で、<br>木漏れ日の揺れを観察する",
    "芝生で、<br>裸足になってみる",
    "ベランダで、<br>冷たい風に当たる",
    "窓際で、<br>雨だれが落ちるのを数える",
    "玄関で、<br>靴を丁寧に磨く",
    "コンビニで、<br>一番美味しそうなアイスを買う",
    "スーパーで、<br>旬の果物の香りを嗅ぐ",
    "花屋の前で、<br>季節の花を眺める",
    "交差点で、<br>行き交う人の服の色を観察する",
    "階段で、<br>一段飛ばしで登ってみる",
    "坂の途中で、<br>振り返って街を見下ろす",
    "橋の下で、<br>反響する音を楽しむ",
    "公園のブランコで、<br>少しだけ揺れる",
    "砂場で、<br>綺麗な砂の山を作る",
    "鉄棒で、<br>ぶら下がって背中を伸ばす",
    "緑地で、<br>四つ葉のクローバーを探す",
    "雑木林で、<br>鳥の鳴き声の方向を探る",
    "池の前で、<br>鯉が泳ぐのをぼーっと見る",
    "水飲み場で、<br>水の冷たさを手に感じる",
    "石畳の上で、<br>足裏の感触を確かめる",
    "路地裏で、<br>古い室外機の音を聞く",
    "コインランドリーで、<br>乾燥機が回るのを眺める",
    "パン屋で、<br>焼きたてのパンの匂いに包まれる",
    "和菓子屋で、<br>季節の上生菓子を一つ買う",
    "カフェの窓際で、<br>道行く犬を観察する",
    "ラーメン屋で、<br>スープの熱さだけに集中する",
    "銭湯で、<br>ただお湯の温かさに溶ける",
    "足湯で、<br>血流が良くなるのを感じる",
    "サウナで、<br>心拍音だけを聴く",
    "温泉街で、<br>硫黄の匂いを感じながら歩く",
    "山の麓で、<br>山の稜線を指でなぞる",
    "畑の脇で、<br>土の匂いを深呼吸する",
    "田んぼ道で、<br>カエルの合唱に耳を傾ける",
    "用水路で、<br>水の流れの速さを見比べる",
    "峠道で、<br>遠くの街の灯りを探す",
    "展望台で、<br>ミニチュアみたいな街を見下ろす",
    "夜の公園で、<br>月が雲から出るのを待つ",
    "星空の下で、<br>一番明るい星を見つける",
    "街灯の下で、<br>自分の影の長さを確認する",
    "駐車場で、<br>停まっている車の色を分類する",
    "空港の近くで、<br>飛行機の離着陸を眺める",
    "港で、<br>船が波に揺れるのを見る",
    "砂浜で、<br>波が引く時の音を聞く",
    "海沿いで、<br>潮風を顔に受ける",
    "松林で、<br>松ぼっくりを一つ拾う",
    "苔の生えた石垣で、<br>自然の緑を楽しむ",
    "竹林で、<br>笹が擦れ合う音に包まれる",
    "庭で、<br>雑草を一本だけ無心で抜く",
    "ハンモックで、<br>揺れに身を任せる",
    "屋上で、<br>360度の空を見渡す",
    "階段の踊り場で、<br>ふと立ち止まる",
    "地下街で、<br>人工的な風を感じる",
    "デパートの屋上で、<br>ベンチに座って目を閉じる",
    "ショーウィンドウで、<br>自分の歩く姿勢を確認する",
    "画廊で、<br>一枚の絵だけをじっと見る",
    "博物館で、<br>古い陶器の曲線を目でなぞる",
    "古着屋で、<br>布の触り心地を確かめる",
    "文具店で、<br>ノートの紙質を指で比べる",
    "楽器店で、<br>アコースティックギターを眺める",
    "レコード屋で、<br>ジャケ買いの直感を試す",
    "映画館のロビーで、<br>ポップコーンの匂いを嗅ぐ",
    "水族館で、<br>クラゲの浮遊に同調する",
    "植物園で、<br>温室の湿った空気を吸う",
    "動物園で、<br>動かない動物と一緒に止まる",
    "広場で、<br>鳩が飛び立つのを見る",
    "時計台の下で、<br>鐘の音を体で感じる",
    "交番の前で、<br>地図の看板を目的なく見る",
    "電話ボックスで、<br>受話器の重さを確かめる",
    "郵便ポストの前で、<br>赤い色をじっと見る",
    "標識の下で、<br>矢印の先を想像する",
    "ガード下で、<br>電車の轟音に包まれる",
    "トンネルの中で、<br>自分の声の反響を試す",
    "坂の下で、<br>自転車が下ってくるのを見る",
    "芝生広場で、<br>大の字に寝転がる",
    "縁側で、<br>お茶をすすりながら庭を見る",
    "畳の上で、<br>いぐさの匂いを嗅ぎながら目を閉じる",
    "足元で、<br>日向ぼっこをしている気分になる",
    "扇風機の前で、<br>風の音に耳を傾ける",
    "シャワーを浴びながら、<br>水が流れる感覚に集中する",
    "湯船で、<br>水面に波紋を作って遊ぶ",
    "布団の中で、<br>自分の呼吸のテンポを数える",
    "今いる場所で、<br>1分間だけ完全に動きを止める"
];

const missionText = document.getElementById('mission-text');
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
        missionText.innerHTML = getRandomItem(missionList);
    }, 50);
}

// ルーレットを停止する関数
function stopRoulette() {
    isSpinning = false;
    clearInterval(rouletteInterval);

    // 最終的な結果をセット（見た目がスムーズになるよう少し待つ）
    setTimeout(() => {
        missionText.innerHTML = getRandomItem(missionList);

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
