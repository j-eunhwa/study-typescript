# 1. Introduction

JavaScriptは1995年、ネットスケープ社のブレンダン·アイク(Brendan Eich)が自社のウェブブラウザであるNavigator2に搭載するために開発したスクリプト言語である。創始期JavaScriptはウェブページの補助的な機能を遂行するために**限定的な用途**で使用された。 この時期、ほとんどのロジックは主にウェブサーバで実行され、ブラウザ（クライアント）はサーバから受け取ったHTMLとCSSをレンダリングするレベルであった。

HTML5が登場するまで、ウェブアプリケーションはフラッシュ、シルバーライト、アクティブエックスといったプラグインに依存してインタラクティブなウェブページを構築してきた。そしてHTML5が登場したことでプラグインに依存していた構築方式はJavaScriptに取って代わられた。また、AJAXの活性化により、デスクトップアプリケーションと類似したユーザエクスペリエンスを提供できるSPA（SinglePageApplication）が大勢となった。 これにより、サーバ側が担当していた業務の多くがクライアント側に移動することになり、JavaScriptはウェブのアセンブリ言語と呼ばれるほど重要な言語としてのプレゼンスが高まるようになった。

すべてのプログラミング言語に長所と短所があるように、JavaScriptも言語がうまく精製される前に急いでリリースされた問題と、過去のウェブページの補助的な機能を遂行するために限定的な用途で作られた**生まれつきの限界**で良い点も悪い点も多いのが事実だ。

JavaスクリプトはCやJavaのようなC-family言語とは区別される以下のような特性がある。

- Prototype-based Object Oriented Language
- Scope, this
- dynamic type, loosely type

このような特性はクラスベースのオブジェクト指向言語（Java、C++、C#など）に慣れている開発者を混乱させ、コードが複雑化する恐れがあり、デバッグやテスト工数が増加するなどの問題を引き起こしかねないため、特に規模の大きなプロジェクトでは注意が必要である。

このようなJavaScript、Dart、Haxeのような**AltJS**(JavaScriptの代替言語)が登場した。

TypeScriptもJavaScriptの代替言語の一つとして**JavaScript（ES5）のSuperset（上位拡張）**である。 C#の創始者であるデンマーク出身のソフトウェアエンジニアAnders Hejlsberg（アネルス·ハイルスベール）が開発を主導したTypeScriptは、Microsoftが2012年に発表したオープンソースであり、静的タイピングをサポートし、ES6（ECMAScript 2015）のクラス、モジュールなどとES7のDecoratorなどに対応する。

![Typescript superset](../img/typescript-superset.png)

TypeScriptはES5のSupersetなので既存のJavaScript(ES5)文法をそのまま使うことができる。 また、ES6の新機能を使用するためにBabelのような別途トランスファイラーを使用しなくてもES6の新機能を既存のJavaScriptエンジン(現在のブラウザまたはNode.js)で実行することができる。

今後[ECMAScriptのアップグレードに伴う新しい機能を持続的に追加する予定](https://github.com/Microsoft/TypeScript/wiki/Roadmap "TypeScriptのRoadmap")であり、毎年アップグレードされるECMAScriptの標準に付いていける良い手段になるだろう。

さらにAngular JSの後続バージョンである[AngularのTypeScriptの正式採用](https://devblogs.microsoft.com/typescript/angular-2-built-on-typescript/)でTypeScriptへの関心が高まっている。