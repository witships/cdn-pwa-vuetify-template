# ワイヤーフレーム作成に便利

- vue3,vuetify を cdn で利用
- pwa に対応
  - サーバー起動時のみ、index.html で PWA のインストールが可能
- vuetify.html は、pwa 対応していない vuetify ページ
- vanilla.html は、pwa のみ対応、vutify の無いページ

| html    | PWA | vuetify |
| ------- | --- | ------- |
| index   | 〇  | 〇      |
| vuetify |     | 〇      |
| vanilla | 〇  |         |
