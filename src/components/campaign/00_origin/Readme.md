# LP用テンプレート

## 使い方

**00_origin**をコピーして使ってください。

- サブドメインとしてLPを切り替えて使用できます。
  - やり方
    - src/data/routes.ts に該当のキャンペーンを入れます。
    - src/pages/_app.tsx にて、「router.pathname」を使用して、「〇〇ページにアクセスしたらこれを読み込む」という処理の切り分けを記述してください。(hooksで切り分けた方が良い)
    - src/pages/campaign.tsx の 3行目にある【import CustomerReferral from "../components/campaign/01/CustomerReferral";】こちらの番号も適宜変更してください。

- ```bash sudo yarn dev```で動作チェックしてください。
- ```bash sudo yarn lint```でもチェックします。
- ```bash sudo yarn build```で、pushしましょう。
