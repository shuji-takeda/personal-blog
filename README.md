# Takeshu Life & Tech - 個人ブログ

完全無料（\$0）かつドメイン代不要で運用できる、Web開発技術と日々の旅・グルメ・思考を思いのままに綴るモダンな個人ブログです。

---

## 🚀 主な機能と特徴

- **完全無料ホスティング**: Cloudflare Pages 連携（無料ドメイン `*.pages.dev` / 転送量無制限）
- **高速表示**: Astro (v5) + Tailwind CSS による初期JavaScriptゼロの爆速配信
- **Tech & Otherの2カテゴリ**:
  - 💻 **Tech**: Shikiによる美しいコードシンタックスハイライト、目次（TOC）自動生成、コードコピーボタン
  - ☕ **Other**: Travel / 旅、Gadget / モノ、Life / 雑記、Book / 学びのサブカテゴリ
  - ✈️ **Travel**: 写真ギャラリー（`<PhotoGallery />`）、レスポンシブ配置
- **収益化（アフィリエイト）サポート**:
  - おすすめ商品・予約リンクカード（`<ProductCard />`）
  - 景品表示法（ステマ規制）対応の自動PRバナー表示（`isAffiliate: true`）
  - 広告・スポンサー枠スロット（`<AdSlot />`）
- **拡張性**: ローカルMarkdownベースのため、将来の「音声入力による文字起こしMD出力」ともスムーズに連動可能

---

## 🛠️ コマンド一覧

最新の Node.js v24 (LTS) 環境で実行してください。

```bash
# 開発サーバーの起動 (http://localhost:4321)
npm run dev

# 型チェックと本番用静的ビルド (dist/ フォルダに出力)
npm run build

# ビルド成果物のローカルプレビュー
npm run preview
```

---

## ✍️ 新しい記事を書く手順

`src/content/blog/` 配下に `.md` または `.mdx` ファイルを作成します。

### フロントマターの書き方例

```yaml
---
title: "記事のタイトル"
description: "記事の概要文（一覧ページやSEOに表示されます）"
pubDate: 2026-09-25
category: "other" # "tech" または "other"
subcategory: "travel" # category が "other" の場合。travel / gadget / life / book
tags: ["京都", "温泉", "国内旅行"]
isAffiliate: true # アフィリエイトリンクを含む場合は true（自動でPR表記が出ます）
---
```

### 収益化カード（ProductCard）の埋め込み方（MDXファイルで使用可能）

```jsx
import ProductCard from '../../components/ProductCard.astro';

<ProductCard
  title="商品名や宿泊施設名"
  description="商品の魅力やおすすめポイントの解説文。"
  badge="宿泊レポート" # または "おすすめ技術書" など
  image="https://画像URL"
  links={[
    { label: "楽天トラベルで見る", url: "https://...", primary: true },
    { label: "じゃらんで見る", url: "https://..." }
  ]}
/>
```

### 写真ギャラリーの埋め込み方

```jsx
import PhotoGallery from '../../components/PhotoGallery.astro';

<PhotoGallery
  columns={2} # 2列 または 3列
  photos={[
    { src: "画像URL", alt: "説明", caption: "キャプション" },
    { src: "画像URL", alt: "説明", caption: "キャプション" }
  ]}
/>
```

---

## 🌐 Cloudflare Pages への無料公開手順（GitHub連携）

1. **GitHub にリポジトリを作成してプッシュ**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit"
   git branch -M main
   git remote add origin https://github.com/<あなたのユーザー名>/personal-blog.git
   git push -u origin main
   ```

2. **Cloudflare にログイン**:
   - [Cloudflare ダッシュボード](https://dash.cloudflare.com/) を開く（アカウントがなければ無料作成）。
   - 左側メニューの **「Workers と Pages」** → **「作成」** → **「Pages」** タブ → **「Git に接続」** を選択。

3. **リポジトリを選択してデプロイ設定**:
   - 作成した GitHub リポジトリ（`personal-blog`）を選択。
   - ビルド設定:
     - **フレームワーク プリセット**: `Astro`
     - **ビルド コマンド**: `npm run build`
     - **ビルド出力ディレクトリ**: `dist`
   - **「保存してデプロイ」** をクリック。

数分でビルドが完了し、`https://personal-blog-xxx.pages.dev` という完全無料の公開URLが発行されます！
以降は、VS Codeで記事を書いて `git push` するだけで自動的に記事が更新されます。
