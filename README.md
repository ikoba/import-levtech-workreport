# レバテック作業報告書インポート用Chrome拡張

作業報告を記録したCSVをインポートして作業報告書を自動入力します。

## 使い方

1. このリポジトリをクローンします。
2. Chromeブラウザで `chrome://extensions/` を開きます。
3. 右上の「デベロッパー モード」をオンにします。
4. 左上の「パッケージ化されていない拡張機能を読み込む」をクリックして、クローンしたディレクトリを指定します。
5. レバテックの作業報告書詳細ページを開き、「編集する」ボタンをクリックします。
    - `https://platform.levtech.jp/p/workreport/input/******/`
6. レポートのテーブルの左上に表示される「CSVインポート」ボタンをクリックしてCSVを指定します。
7. CSVの内容が自動で入力されるので内容を確認し、問題がなければ「保存する」をクリックして保存してください。

## CSVの形式

```csv
日付,開始,終了,休憩,業務内容
2024/10/01,10:00,19:00,1:00,実装
2024/10/02,10:00,19:00,1:00,実装
```

- 列の定義は以下の通りです。
  1. 日付（YYYY/MM/DD）
  2. 開始（hh:mm）
  3. 終了（hh:mm）
  4. 休憩（hh:mm）
  5. 業務内容（テキスト）
- 1行目はヘッダー行なので無視します。

## ライセンス

MIT
