document.addEventListener('DOMContentLoaded', () => {
    // ヒント専用ページへの遷移ボタン
    const goToHintPageBtn = document.getElementById('goToHintPageBtn');
    if (goToHintPageBtn) {
        goToHintPageBtn.addEventListener('click', () => {
            alert('ヒント専用ページへ移動します。(まだ開発中)');
            // 実際には、次の行のようなコードでページ遷移を行います。
            // window.location.href = '/hint-page'; // Expressルートなどで定義されたヒントページへのパス
        });
    }

    // --- キーワード入力機能の追加 ---
    const keywordInput = document.getElementById('keywordInput');
    const submitKeywordBtn = document.getElementById('submitKeywordBtn');
    const keywordOutput = document.getElementById('keywordOutput');

    if (keywordInput && submitKeywordBtn && keywordOutput) {
        // キーワードと対応するメッセージのマップ
        const keywordMap = {
            "かおりのそと": "成功1",
            "あおいそら": "成功2",
            "ミドリィ": "成功3"
        };

        submitKeywordBtn.addEventListener('click', () => {
            const inputVal = keywordInput.value.trim(); // 入力値を取得し、前後の空白を除去

            if (keywordMap[inputVal]) {
                // キーワードがマップに存在する場合
                keywordOutput.textContent = keywordMap[inputVal];
                keywordOutput.style.color = 'green'; // 成功メッセージの色
            } else {
                // キーワードがマップに存在しない場合
                keywordOutput.textContent = "一致するキーワードはありません。";
                keywordOutput.style.color = 'red'; // エラーメッセージの色
            }
            keywordInput.value = ''; // 入力フィールドをクリア
        });

        // Enterキーでも送信できるようにする (オプション)
        keywordInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                submitKeywordBtn.click(); // ボタンのクリックイベントを発生させる
            }
        });
    }
});