# Beauty Hair Salon GOOD-DAY CorporateSite

Readmeをご覧いただき、ありがとうございます。

こちらのリポジトリはヘアサロンを運営している企業のHPです。

実際に動いているのは[こちら](https://www.goodday-salon.com/)

なんとなくNext.jsでHPを作成したいと思い立ったことがきっかけで作成しました。

結果、WordPressに比べウェブバイタルスが高くなり満足しています。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

システムロジックを構成することに重きを置いてきたので、デザイン面が課題です。

- 特徴(Jamstackな構成)
 - HeadressCMSから記事データを受け取り、記事データ、スタイリストデータを取得しています。
 - ホスティングにレンタルサーバーではなく、静的ホスティングサービスを利用しています。

- 管理に必要なソフトウェアや環境
 - Github(現在のメンバからOrganizationsに追加してもらってください)
 - IDE (VSCodeが良いと思います)
 - Ubuntu (本体の設定を書き換えるのを防止する目的でMacの中にもう一台パソコンを作っています)
 - HeadressCMS(記事を投稿するサービス)
 - 静的ホスティングサービス(サーバーのようなサービス)

- 採用している技術
 - Next.js
 - React
 - TypeScript
 - Git
 - node.js
 - ESlint
 - yarn

## Getting Started

First, run the development server:

### 開発リポジトリ(dev)

```bash
sudo yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### linterCheck

```bash
sudo yarn lint
```
### ビルド

```bash
sudo yarn build
```

### その他

その他不明点については現在のメンバまでご連絡ください。

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
