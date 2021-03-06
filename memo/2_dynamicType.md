# 2. TypeScriptのメリット

## 2.1 dynamic type

TypeScriptを使用する最大の理由の一つはdynamic typeをサポートするということだ。以下の関数を見てみよう。

```javascript
function sum(a, b) {
  return a + b;
}
```

上の関数を定義した開発者の意図はおそらく2つの数字タイプの買収を受け取り、その合計を返還しようとするものと推測される。しかし、コード上ではどんなタイプの買収を伝えるべきか、どのようなタイプの戻り値をリターンしなければならないのか明確ではない。したがって上の関数は以下のように呼ばれることができる。

```javascript
function sum(a, b) {
  return a + b;
}

sum('x', 'y'); // 'xy'
```

上のコードは、JavaScript文法上、いかなる問題もないので、JavaScriptエンジンは何ら異議を唱えることなく、上記コードを実行するだろう。このような状況が発生した理由は、変数や戻り値のタイプを事前に指定しないJavaScriptの動的タイピング(Dynamic Typing)によるものである。

上の関数をTypeScriptの静的タイプを使用して作成しなおしてみよう。

```typescript
function sum(a: number, b: number) {
  return a + b;
}

sum('x', 'y');
// error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
```

TypeScriptは静的タイプに対応しているため、コンパイル段階でエラーを捕捉できるメリットがある。明示的な静的タイプ指定は、開発者の意図を明確にコードで記述できる。これはコードの可読性を高め、予測できるようにし、デバッグを容易にする。

## 2.2.ツールの支援
TypeScriptを使用する理由は様々であるが、最も大きな長所はIDE(統合開発環境)を含む様々なツールのサポートを受けることができるという点である。 IDE のようなツールにタイプ情報を提供することで、ハイレベルなインテリジェンス、コードアシスト、タイプチェック、リファクタリングなどのサポートを受けることができ、このようなツールのサポートは、大規模プロジェクトのための必須要素でもある。

## 2.3 強力なオブジェクト指向プログラミング支援
インタフェース、ジェネリックのような強力なオブジェクト指向プログラミングサポートは、大きく複雑なプロジェクトのコード基盤を容易に構成できるようサポートし、Java、C#などのクラスベースのオブジェクト指向言語に慣れている開発者がJavaScriptプロジェクトを遂行する上で、参入障壁を下げる効果もある。

## 2.4 ES6 ES Next対応
ブラウザさえあればコンパイラなどの開発環境構築なしですぐに使用できるES5 と比較すると、開発環境構築の観点からやや複雑になっている面があるが、現在ES6 を完全にサポートしていないブラウザを考慮して、Babel などのトランスファイラを使用しなければならない現状で、TypeScript 開発環境構築にかかる手間はそれほど惜しくないだろう。 また、TypeScript はまだECMAScript 標準に組み込まれていないが、標準化が有力なスペックを先回りして導入するため、新しいスペックの有用な機能を安全に導入することに有利である。