# Slack MathJax Renderer

Slack MathJax Renderer is a Chrome extension that renders LaTeX expressions in Slack Web.

This extension supports the following LaTeX delimiters only:

* Inline math: `\(...\)`
* Display math: `\[...\]`

The delimiters `$...$` and `$$...$$` are intentionally not supported, because the dollar sign is often used in ordinary text, shell commands, prices, and other non-mathematical contexts.

## Example

Post the following text in Slack Web:

```text
Inline math:

\( x^2 + y^2 = z^2 \)

Display math:

\[
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]
```

If the extension is installed correctly, the LaTeX expressions will be rendered as mathematical formulas in Slack Web.

## Requirements

* Google Chrome
* Slack Web
* This repository downloaded or cloned to your local computer

This extension is intended to be installed as an unpacked Chrome extension.

## Installation

### 1. Download this repository

Open this GitHub repository in your browser.

Click:

```text
Code -> Download ZIP
```

Then extract the ZIP file to a folder on your computer.

Alternatively, you can use Git:

```bash
git clone https://github.com/YOUR_ACCOUNT/slack-mathjax-renderer.git
```

Replace `YOUR_ACCOUNT` with the actual GitHub account name.

### 2. Check the required files

The extension folder should contain files such as:

```text
manifest.json
mathjax-config.js
content.js
content.css
mathjax/tex-svg.js
```

The file `mathjax/tex-svg.js` must exist. This file is the local MathJax component used by the extension.

### 3. Open Chrome Extensions

Open Google Chrome and go to:

```text
chrome://extensions/
```

### 4. Enable Developer Mode

Turn on the switch labeled:

```text
Developer mode
```

It is usually located in the upper-right corner of the Chrome Extensions page.

### 5. Load the extension

Click:

```text
Load unpacked
```

Then select the folder that contains `manifest.json`.

For example, select the folder:

```text
slack-mathjax-renderer
```

Do not select an inner subfolder such as `mathjax`.

### 6. Open Slack Web

Open Slack Web in Chrome:

```text
https://your-workspace.slack.com/
```

If Slack Web is already open, reload the Slack tab.

### 7. Test the extension

Post the following message in Slack:

```text
Inline math:

\( x^2 + y^2 = z^2 \)

Display math:

\[
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]
```

If the formulas are rendered, the installation is complete.

## Updating the extension

If you downloaded a new version of this repository, replace the old folder with the new one.

Then open:

```text
chrome://extensions/
```

Click the reload button for this extension.

After that, reload Slack Web.

## Troubleshooting

### The extension does not appear in Chrome

Make sure that you selected the folder that contains `manifest.json`.

### Formulas are not rendered

Check the following points:

* Slack Web has been reloaded after installing the extension.
* The extension is enabled in `chrome://extensions/`.
* The file `mathjax/tex-svg.js` exists.
* The LaTeX delimiters are `\(...\)` or `\[...\]`.

This extension does not render `$...$` or `$$...$$`.

### Chrome shows an error for the extension

Open:

```text
chrome://extensions/
```

Then check the error message shown for this extension.

A common cause is that a required file is missing.

## Notes

This extension modifies only the display of Slack Web in your own browser. It does not change the original Slack messages, and it does not send messages to Slack.

Other Slack users will not see rendered formulas unless they also install this extension.

---

# Slack MathJax Renderer

Slack MathJax Renderer は、Slack Web上のLaTeX記法を数式として表示するためのChrome拡張機能です。

この拡張機能は、次のLaTeX区切り記号だけに対応します。

* インライン数式: `\(...\)`
* ディスプレイ数式: `\[...\]`

`$...$` や `$$...$$` には対応していません。ドル記号 `$` は、通常の文章、シェルコマンド、金額などにもよく使われるため、誤って数式として扱われることを避けるためです。

## 例

Slack Webに次のように投稿します。

```text
インライン数式:

\( x^2 + y^2 = z^2 \)

ディスプレイ数式:

\[
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]
```

拡張機能が正しくインストールされていれば、LaTeXで書かれた部分が数式として表示されます。

## 必要なもの

* Google Chrome
* Slack Web
* このリポジトリをダウンロードまたはcloneしたフォルダ

この拡張機能は、Chromeの「パッケージ化されていない拡張機能」としてインストールします。

## インストール手順

### 1. このリポジトリをダウンロードする

ブラウザでこのGitHubリポジトリを開きます。

次をクリックします。

```text
Code -> Download ZIP
```

ZIPファイルをダウンロードしたら、PC上の任意の場所に展開します。

Gitを使う場合は、次のようにcloneしても構いません。

```bash
git clone https://github.com/YOUR_ACCOUNT/slack-mathjax-renderer.git
```

`YOUR_ACCOUNT` は実際のGitHubアカウント名に置き換えてください。

### 2. 必要なファイルを確認する

拡張機能のフォルダには、次のようなファイルが含まれている必要があります。

```text
manifest.json
mathjax-config.js
content.js
content.css
mathjax/tex-svg.js
```

`mathjax/tex-svg.js` が存在している必要があります。このファイルは、拡張機能内で使うMathJax本体です。

### 3. Chromeの拡張機能画面を開く

Google Chromeで次を開きます。

```text
chrome://extensions/
```

### 4. デベロッパーモードをオンにする

Chrome拡張機能画面の右上にある

```text
デベロッパーモード
```

をオンにします。

### 5. 拡張機能を読み込む

次をクリックします。

```text
パッケージ化されていない拡張機能を読み込む
```

そして、`manifest.json` が入っているフォルダを選択します。

たとえば、次のフォルダを選びます。

```text
slack-mathjax-renderer
```

`mathjax` のような内側のフォルダを選ばないでください。

### 6. Slack Webを開く

ChromeでSlack Webを開きます。

```text
https://your-workspace.slack.com/
```

すでにSlack Webを開いている場合は、Slackのタブを再読み込みしてください。

### 7. 動作確認する

Slackに次のメッセージを投稿します。

```text
インライン数式:

\( x^2 + y^2 = z^2 \)

ディスプレイ数式:

\[
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
\]
```

数式として表示されれば、インストールは完了です。

## 更新方法

新しい版をダウンロードした場合は、古いフォルダを新しいフォルダに置き換えます。

その後、Chromeで次を開きます。

```text
chrome://extensions/
```

この拡張機能の再読み込みボタンを押します。

最後にSlack Webのタブを再読み込みします。

## トラブルシューティング

### Chromeに拡張機能が表示されない場合

`manifest.json` が入っているフォルダを選択しているか確認してください。

### 数式が表示されない場合

次を確認してください。

* 拡張機能をインストールしたあと、Slack Webを再読み込みしたか。
* `chrome://extensions/` で拡張機能が有効になっているか。
* `mathjax/tex-svg.js` が存在しているか。
* LaTeXの区切り記号が `\(...\)` または `\[...\]` になっているか。

この拡張機能は `$...$` や `$$...$$` には対応していません。

### Chrome拡張機能画面でエラーが出る場合

次を開きます。

```text
chrome://extensions/
```

この拡張機能に表示されているエラーメッセージを確認してください。

よくある原因は、必要なファイルが不足していることです。

## 注意

この拡張機能は、自分のブラウザ上でSlack Webの表示を変更するだけです。Slackの元のメッセージ内容は変更しません。また、Slackにメッセージを送信するものでもありません。

他のSlackユーザーも数式表示を見たい場合は、そのユーザーのChromeにもこの拡張機能をインストールする必要があります。
