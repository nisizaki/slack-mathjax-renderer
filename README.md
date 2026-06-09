# Slack MathJax Renderer

Slack MathJax Renderer is a Chrome extension that renders LaTeX expressions in Slack Web.

This extension supports the following LaTeX delimiters only:

* Inline math: `\(...\)`
* Display math: `\[...\]`

The delimiters `$...$` and `$$...$$` are intentionally not supported, because the dollar sign is often used in ordinary text, shell commands, prices, and other non-mathematical contexts.

This extension also supports proof trees written with the MathJax `bussproofs` extension, such as `\begin{prooftree} ... \end{prooftree}`, when they are enclosed in display math delimiters `\[` and `\]`.

## Examples

### Basic formulas

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

### Proof tree

Post the following text in Slack Web:

```text
\[
\begin{prooftree}
\AxiomC{$A$}
\AxiomC{$B$}
\RightLabel{$\land I$}
\BinaryInfC{$A \land B$}
\end{prooftree}
\]
```

The proof tree should be rendered below the original Slack message.

For proof trees, make sure to enclose the whole `prooftree` environment with `\[` and `\]`.

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
mathjax/tex-svg-full.js
```

The file `mathjax/tex-svg-full.js` must exist. This file is the local MathJax component used by the extension.

Do not select or load the `mathjax` folder itself as a Chrome extension. The folder that contains `manifest.json` should be loaded.

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

Slack may also use the following URL form:

```text
https://app.slack.com/client/...
```

If Slack Web is already open, reload the Slack tab. If the extension has just been updated, it is safer to close the Slack tab and open it again.

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

You can also test a proof tree:

```text
\[
\begin{prooftree}
\AxiomC{$A$}
\AxiomC{$B$}
\RightLabel{$\land I$}
\BinaryInfC{$A \land B$}
\end{prooftree}
\]
```

## Updating the extension

If you downloaded a new version of this repository, replace the old folder with the new one.

Then open:

```text
chrome://extensions/
```

Click the reload button for this extension.

After that, close the Slack Web tab and open Slack Web again.

## Troubleshooting

### The extension does not appear in Chrome

Make sure that you selected the folder that contains `manifest.json`.

For example, select:

```text
slack-mathjax-renderer
```

Do not select:

```text
slack-mathjax-renderer/mathjax
```

### Formulas are not rendered

Check the following points:

* Slack Web has been reloaded after installing the extension.
* The extension is enabled in `chrome://extensions/`.
* The file `mathjax/tex-svg-full.js` exists.
* The LaTeX delimiters are `\(...\)` or `\[...\]`.

This extension does not render `$...$` or `$$...$$`.

### Proof trees are not rendered

Check the following points:

* The proof tree is enclosed in `\[` and `\]`.
* The proof tree uses `\begin{prooftree}` and `\end{prooftree}`.
* The file `mathjax/tex-svg-full.js` exists.
* The extension has been reloaded from `chrome://extensions/`.
* Slack Web has been closed and opened again after updating the extension.

A minimal test case is:

```text
\[
\begin{prooftree}
\AxiomC{$A$}
\end{prooftree}
\]
```

### Chrome shows an error for the extension

Open:

```text
chrome://extensions/
```

Then check the error message shown for this extension.

A common cause is that a required file is missing.

### The original LaTeX text is still visible

This is expected behavior. The extension keeps the original Slack message and adds a rendered MathJax view below it. This avoids modifying Slack's own message DOM directly and makes the extension more stable.

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

また、この拡張機能は、MathJaxの `bussproofs` 拡張による証明木にも対応します。たとえば、`\begin{prooftree} ... \end{prooftree}` を使った証明木を表示できます。ただし、証明木全体を `\[` と `\]` で囲む必要があります。

## 例

### 基本的な数式

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

### 証明木

Slack Webに次のように投稿します。

```text
\[
\begin{prooftree}
\AxiomC{$A$}
\AxiomC{$B$}
\RightLabel{$\land I$}
\BinaryInfC{$A \land B$}
\end{prooftree}
\]
```

証明木が、元のSlackメッセージの下に表示されます。

証明木を書く場合は、`prooftree` 環境全体を必ず `\[` と `\]` で囲んでください。

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
mathjax/tex-svg-full.js
```

`mathjax/tex-svg-full.js` が存在している必要があります。このファイルは、拡張機能内で使うMathJax本体です。

Chrome拡張機能として読み込むのは、`mathjax` フォルダではありません。`manifest.json` が入っているフォルダを読み込んでください。

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

Slackでは、次の形式のURLが使われることもあります。

```text
https://app.slack.com/client/...
```

すでにSlack Webを開いている場合は、Slackのタブを再読み込みしてください。拡張機能を更新した直後は、Slackのタブをいったん閉じて開き直すほうが安全です。

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

証明木も確認できます。

```text
\[
\begin{prooftree}
\AxiomC{$A$}
\AxiomC{$B$}
\RightLabel{$\land I$}
\BinaryInfC{$A \land B$}
\end{prooftree}
\]
```

## 更新方法

新しい版をダウンロードした場合は、古いフォルダを新しいフォルダに置き換えます。

その後、Chromeで次を開きます。

```text
chrome://extensions/
```

この拡張機能の再読み込みボタンを押します。

最後にSlack Webのタブを閉じて、Slack Webを開き直します。

## トラブルシューティング

### Chromeに拡張機能が表示されない場合

`manifest.json` が入っているフォルダを選択しているか確認してください。

たとえば、選ぶべきフォルダは次です。

```text
slack-mathjax-renderer
```

次のフォルダを選ばないでください。

```text
slack-mathjax-renderer/mathjax
```

### 数式が表示されない場合

次を確認してください。

* 拡張機能をインストールしたあと、Slack Webを再読み込みしたか。
* `chrome://extensions/` で拡張機能が有効になっているか。
* `mathjax/tex-svg-full.js` が存在しているか。
* LaTeXの区切り記号が `\(...\)` または `\[...\]` になっているか。

この拡張機能は `$...$` や `$$...$$` には対応していません。

### 証明木が表示されない場合

次を確認してください。

* 証明木全体が `\[` と `\]` で囲まれているか。
* `\begin{prooftree}` と `\end{prooftree}` を使っているか。
* `mathjax/tex-svg-full.js` が存在しているか。
* `chrome://extensions/` で拡張機能を再読み込みしたか。
* 拡張機能を更新したあと、Slack Webを閉じて開き直したか。

最小の確認例は次です。

```text
\[
\begin{prooftree}
\AxiomC{$A$}
\end{prooftree}
\]
```

### Chrome拡張機能画面でエラーが出る場合

次を開きます。

```text
chrome://extensions/
```

この拡張機能に表示されているエラーメッセージを確認してください。

よくある原因は、必要なファイルが不足していることです。

### 元のLaTeXテキストも表示される場合

これは想定された動作です。この拡張機能は、Slackの元メッセージを残したまま、その下にMathJaxでレンダリングした表示を追加します。Slack自身が管理しているメッセージDOMを直接書き換えないため、より安定して動作します。

## 注意

この拡張機能は、自分のブラウザ上でSlack Webの表示を変更するだけです。Slackの元のメッセージ内容は変更しません。また、Slackにメッセージを送信するものでもありません。

他のSlackユーザーも数式表示を見たい場合は、そのユーザーのChromeにもこの拡張機能をインストールする必要があります。
