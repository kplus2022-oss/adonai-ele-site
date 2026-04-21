# design.md — Holistic Healing Salon「アドナイエレ」デザイン指針

本サイトの見た目・雰囲気を将来の改修でも必ず踏襲するためのデザインガイド。

## 1. コンセプト
- テーマ: 「静けさ・余白・生き直し」
- 印象: 和モダン × 自然光 × グラスモーフィズム
- 対象: 心身の不調を抱える大人。派手さより誠実さ。

## 2. カラーパレット
| 用途 | トークン | 値 |
| --- | --- | --- |
| ベース背景 | `base` | `#F6F5F0`（生成りのオフホワイト） |
| 代替背景（FAQ等） | `base-2` | `#f0efe9` |
| フッター背景 | `base-3` | `#ebeae4` |
| メインテキスト/アクセント | `ink` | `#111211`（ほぼ黒、わずかに緑寄り） |
| ホバー黒 | — | `#333` |
| セレクション | — | `#111211` を 10% 透過 |

- 不透明度で階層を作る: `text-[#111211]/80` `/70` `/50` `/30` `/10`
- ガラス面: `bg-white/70〜80 + backdrop-blur-md/xl + border border-white/60 or #111211/10`

## 3. タイポグラフィ
- 和文: **Shippori Mincho**（400/500/700）Google Fonts
- 欧文ラベル: `font-sans`（システム）で `uppercase tracking-[0.3em]`
- 基本は `font-serif`（明朝）で上品に
- `tracking-widest`（0.1em）を日本語見出しに多用、英ラベルは `tracking-[0.3em]〜[0.4em]`
- ウェイトは `font-light` / `font-medium` を中心。`font-bold` はヒーロー縦書きのみ
- 縦書き見出し: `writing-mode: vertical-rl; letter-spacing: 0.2em;`（`.vertical-text`）

## 4. レイアウト原則
- 最大幅: セクションごとに `max-w-3xl / 5xl / 6xl / 7xl` を使い分け、中央寄せ
- セクション余白: `py-32〜py-40`（ゆったり）
- 横パディング: `px-6`
- グリッド: 2列/3列/5列を画面幅で切替（`md:grid-cols-2` `lg:grid-cols-5`）
- カードは `rounded-3xl` または `rounded-[2.5rem]` / `rounded-[3.5rem]` の大きな丸み

## 5. ビジュアル要素
- 流体シェイプ: `border-radius` を 15秒周期でアニメ（`@keyframes morph`）。固定配置で視差効果
- マウス視差: `mousemove` で `translate` を微量に（±30px）。ヒーロー背景、装飾シェイプに適用
- 背景画像: Unsplash を `bg-fixed bg-cover bg-center` でパララックス、上に `bg-[#F6F5F0]/75 + backdrop-blur-sm` を重ねる
- グラスモーフィズム: 主要CTA・カード・メニューに使用

## 6. アニメーション
- 出現: `.reveal-target`（Y+40px → 0, 1.2s）/ `.reveal-blur`（blur10 → 0, 1.5s）
- `IntersectionObserver`（threshold 0.1, rootMargin `-50px`）で `.is-revealed` を付与
- ディレイ: `.reveal-delay-1〜4`（0.1s 刻み）
- タイムラインドット: スケールと透明度を段階的に。`cubic-bezier(0.34, 1.56, 0.64, 1)`
- スクロールインジケータ: 縦線を 2.5s で上→下にループ

イージングは原則 `cubic-bezier(0.16, 1, 0.3, 1)` を採用。

## 7. コンポーネント指針
- **Header**: 固定、スクロール50px超で白ガラス化（`bg-white/80 backdrop-blur-md`）
- **フルスクリーンメニュー**: `z-[60]`、`bg-[#F6F5F0]/95 backdrop-blur-xl`、項目は和名＋欧文ラベルを縦並び、段階ディレイで出現
- **ボタン**:
  - Primary: `bg-[#111211] text-[#F6F5F0] rounded-full`、hover で `#333` + `scale-105`
  - Ghost: `border border-[#111211]/20〜30 rounded-full`、hover で反転（`bg-[#111211] text-[#F6F5F0]`）
  - Glass: `bg-white/80 backdrop-blur-md border-white/60` + 光彩 `shadow-[0_0_20px_rgba(255,255,255,0.5)]`
- **カード**: 丸み強め＋薄いボーダー＋`hover:-translate-y-1〜2 hover:shadow-xl`
- **画像カード**: 画像 `opacity-80` + 下から黒グラデ、文字は `text-white drop-shadow-md`
- **タイムライン**: 左に1pxライン、円ドット、Stepを英数字 `font-sans font-light` で大きく

## 8. アイコン
- `lucide-react` 固定。`strokeWidth={1}〜1.5` の細線で和モダン感を維持

## 9. アクセシビリティ
- 全 `button` に `aria-label`（アイコンのみの場合）
- 画像は意味があれば `alt` を付与、装飾なら空 `alt=""`
- コントラスト: ガラス面上のテキストは `drop-shadow-md` で担保

## 10. やらないこと（NG）
- 鮮やかな原色・ネオン色
- 角ばった長方形のみのレイアウト（必ず丸みを取り入れる）
- ゴシック体（Noto Sans JP等）をメイン見出しに使う
- 絵文字の使用
- 過度なモーション（1.5s を超える長尺アニメはヒーロー/出現のみに限定）

## 11. ブレークポイント
Tailwind 標準を使用。主に `sm (640) / md (768) / lg (1024)`。`md:` を基準に PC レイアウトを組む。

## 12. ファイル構成
```
project/
├─ app/
│  ├─ layout.tsx      # HTML骨格・フォント読込
│  ├─ page.tsx        # 本LP本体（Client Component）
│  └─ globals.css     # Tailwind + 共通
├─ tailwind.config.ts # カラートークン定義
├─ next.config.js
└─ design.md          # 本ファイル
```

改修時はまず本ファイルを参照し、カラー/タイポ/余白/アニメ原則を維持すること。
