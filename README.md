# スロット狙い目ティア管理アプリ テスト公開用

このフォルダは GitHub Pages にそのままアップロードして公開できます。

## 公開手順

1. GitHub で新しいリポジトリを作成します。
   - 例: `slot-tier-test`
   - テスト公開だけなら Public で大丈夫です。

2. このフォルダ内のファイルをリポジトリ直下にアップロードします。
   - `index.html`
   - `.nojekyll`
   - `README.md`

3. GitHub のリポジトリ画面で `Settings` → `Pages` を開きます。

4. `Build and deployment` の `Source` を `Deploy from a branch` にします。

5. `Branch` を `main` / `/root` にして `Save` します。

6. 数十秒から数分待つと、以下のようなURLで開けます。

```text
https://あなたのGitHub名.github.io/リポジトリ名/
```

## Supabase 側で追加する設定

Supabase の `Authentication` → `URL Configuration` で、公開URLを登録してください。

- Site URL:

```text
https://あなたのGitHub名.github.io/リポジトリ名/
```

- Redirect URLs:

```text
https://あなたのGitHub名.github.io/リポジトリ名/
```

メール確認を使う場合、この設定をしておくと確認後に公開ページへ戻れます。

## 注意

- このHTML内の Supabase anon key は公開されますが、anon key はブラウザで使う前提のキーです。
- 仕事量データの保護は Supabase の RLS で行います。
- リポジトリを Public にすると、HTMLコードは誰でも見られます。
