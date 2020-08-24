# 3.開発環境の構築
TypeScriptファイル(.ts)はブラウザで動作しないため、TypeScriptコンパイラを利用してJavaScriptファイルに変換しなければならない。これをコンパイルまたはトランスファイリングという。

TypeScriptコンパイラをインストールしてTypeScript開発環境を構築し、TypeScriptコンパイラの使用方法について見てみよう。

## 3.1 Node.jsインストール
- [Installing Node.js](https://nodejs.org/en/)

## 3.2 TypeScriptコンパイラのインストールと使い方
Node.jsをインストールするとnpmも同時にインストールされる。次のようにターミナル(ウィンドウの場合コマンドウィンドウ)でnpmを使ってTypeScriptを全域に設置してバージョンをかくにんする。

```bash
$ npm install -g typescript
```

```bash
$ tsc -v
Version 4.0.2
```

TypeScriptコンパイラ(tsc)はTypeScriptファイル(.ts)をJavaScriptファイルにトランスファイリングする。

>コンパイルは一般的にソースコードをバイトコードに変換する作業を意味する。TypeScript コンパイラはTypeScript ファイルを JavaScript ファイルに変換するので、コンパイルよりはトランスファイリングがより適切な表現である。

トランスファイリングを実行してみるために、以下のようなファイルを作成してみよう。ちなみにTypeScriptファイルの拡張子は.tsである。

```typescript
// person.ts
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello, " + this.name;
  }
}

const person = new Person('Lee');

console.log(person.sayHello());
```
トランスファイリングを実行してみよう。tscコマンドの後ろにトランスファイリング対象ファイル名を指定する。このとき、拡張子.tsは省略できる。

```bash
$ tsc person
```

トランスファイリングを実行した結果、同じディレクトリに JavaScript ファイル(person.js)が生成される。

```javascript
// person.js
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
var person = new Person('Lee');
console.log(person.sayHello());
```
この時トランスファイリングされたperson.jsのJavaScriptバージョンはES3だ。これはTypeScriptコンパイルターゲットJavaScript基本バージョンがES3であるためだ。

もし、JavaScriptバージョンを変更するにはコンパイルオプションに--targetまたは-tを使用する。現在、tscがサポートしているJavaScriptバージョンは、「ES3」（default）、「ES5」、「ES2015」、「ES2016」、「ES2017」、「ES2018」、「ES2019」、「ESNEXT」である。

```bash
$ tsc person -t ES2015
```

実行結果、

```bash
$ node person
Hello, Lee
```