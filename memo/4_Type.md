# 1. Type

## 1.1 Type Declaration

TypeScript は以下のように変数名の後にタイプを明示することでタイプを宣言できる。

```typescript
let foo: string = 'hello';
```
宣言したタイプに合わない値を割り当てるとコンパイル時点でエラーが発生する。

```typescript
let bar: number = true; // error TS2322: Type 'true' is not assignable to type 'number'.
```
このタイプ宣言は開発者がコードを予測できるように手助けする。またタイプ宣言は、強力なタイプチェックを可能にし、文法エラーやタイプと一致しない値の割り当てなど、基本的な不具合をランタイム以前に検出する。VSCodeのようなツールを使用するとコードを作成する時点でエラー検出できる。


```typescript
function multiply1(x: number, y: number): number {
  return x * y;
}

const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));

console.log(multiply1(true, 1)); // error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
```

TypeScriptはES5、ES6のSuperset（上位拡張）なのでJavaScriptのタイプをそのまま使用できる。JavaScript固有のタイプ以外にもTypeScript固有のタイプが追加で提供される。

| Type | JS | TS | Description |
|:---:|:---:|:---:|:---|
| `boolean` | ◯ | ◯ | true, false |
| `null` | ◯ | ◯ | 値がないことを明示 |
| `undefined` | ◯ | ◯ | 値を与えなかった変数 |
| `number` | ◯ | ◯ | 数字(整数と実数、Infinity、NaN) |
| `string` | ◯ | ◯ | 文字列 |
| `symbol` | ◯ | ◯ | 固有で修正不可能なデータタイプであり、主にオブジェクトプロパティの識別子として使用(ES6で追加) |
| `object` | ◯ | ◯ | 参照型 |
| `array` | X | ◯ | 配列 |
| `tuple` | X | ◯ | 固定された要素数だけのタイプを予め宣言後、配列を表現 |
| `enum` | X | ◯ | 列挙型(数字値集合に名前を指定したもの) |
| `any` | X | ◯ | タイプ推論(type inference)できないか、タイプチェックが必要ない変数に使用(varキーワードで宣言した変数のようにどのタイプの値でも割り当て可能) |
| `void` | X | ◯ | 一般に関数で返り値がない場合に使用 |
| `never` | X | ◯ | 決して発生しない値 |

```typescript
// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';
let myName: string = `Lee`; // ES6
let greeting: string = `Hello, my name is ${ myName }.`; // ES6

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // ジェネリック配列タイプ

// tuple
let tuple: [string, number];
tuple = ['hello', 10]; // OK
tuple = [10, 'hello']; // Error
tuple = ['hello', 10, 'world', 100]; // Error
tuple.push(true); // Error

// enum
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3); // 4

// any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// void
function warnUser(): void {
  console.log("This is my warning message");
}

// never
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}
```
大文字で始まるStringタイプは、String生成子関数で生成されたStringラッパーオブジェクトタイプを意味する。したがって、stringタイプにStringタイプを割り当てるとエラーが発生する。 しかし、Stringタイプにはstringタイプを割り当てることができる。

```typescript
// string
let primiteveStr: string;
primiteveStr = 'hello'; // OK.
primiteveStr = new String('hello'); // Error
/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/

let objectStr: String;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK
```

また、オブジェクトタイプもタイプできる。

```typescript
// Date
const today: Date = new Date();

// HTMLElement
const elem: HTMLElement = document.getElementById('myId');

class Person { }
// Person
const person: Person = new Person();
```

## 1.2 Static Typing
TypeScriptの最も独特な特徴は静的タイプをサポートしているということだ。静的タイプ言語はタイプを明示的に宣言し、タイプが決定した後はタイプを変更できない。誤ったタイプの値が割り当てられ又は返されると、コンパイラはこれを感知してエラーを発生させる。

```typescript
let foo: string,   // 文字列
    bar: number,   // 数字
    baz: boolean;  // boolean

foo = 'Hello';
bar = 123;
baz = 'true'; // error: Type '"true"' is not assignable to type 'boolean'.
```

静的タイピングのメリットは**コード可読性、予測性、安定性の向上**であるが、これは大規模プロジェクトに最適である。

## 1.3 Type Inference
もしタイプ宣言を省略すると、値が割り当てられる過程で動的にタイプが決定される。これをタイプ推論（TypeInference）という。

```typescript
let foo = 123; // foo is number
```

また、TypeScript は静的タイプ言語であるため、タイプ推論でタイプが決まって以降、異なるタイプの値を割り当てるとエラーが発生する。

```typescript
let foo = 123; // foo is number
foo = 'hi';    // error: Type '"hi"' is not assignable to type 'number'.
```
タイプ宣言を省略して値も割り当てず、タイプが推論できないと`any`タイプになる。`any`タイプの変数はJavaScriptのvarキーワードで宣言された変数のように、どのタイプの値も再割り当てが可能である。これはTypeScript を使用する長所をなくすため、使用しない方が良い。

```typescript
let foo; // let foo: any

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean
```