В TypeScript вы можете объявить типы для функций, указывая типы параметров и возвращаемого значения. Это помогает обеспечить строгую типизацию и предотвращает ошибки при передаче неверных типов данных в функции. Вот основные способы объявления типов для функций в TypeScript:

### 1. Объявление типов параметров и возвращаемого значения

При объявлении функции вы можете указать типы для каждого параметра и тип возвращаемого значения.

```ts
function add(a: number, b: number): number {
    return a + b;
}

const result = add(5, 10); // 15
```


### 2. Типы параметров по умолчанию

Вы можете задавать параметры по умолчанию, указывая их типы.

```ts
function greet(name: string, greeting: string = "Hello"): string {
    return ${greeting}, ${name}!;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"
```


### 3. Необязательные параметры

Вы можете сделать параметры необязательными, добавив знак вопроса (?) после имени параметра. Необязательные параметры также могут иметь свои типы.

```ts
function log(message: string, userId?: number): void {
    console.log(message);
    if (userId) {
        console.log(User ID: ${userId});
    }
}

log("User logged in"); // "User logged in"
log("User logged in", 123); // "User logged in" и "User ID: 123"
```

### 4. Типы функций

Вы можете объявить тип функции отдельно и использовать его для параметров.

```ts
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (a, b) => {
    return a * b;
};

const result = multiply(5, 10); // 50
```

### 5. Функции как свойства объектов

Вы также можете объявлять функции как свойства объектов с указанием типов.

```ts
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

const calculator: Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
```

### Заключение

Объявление типов для функций в TypeScript помогает улучшить читаемость и поддержку кода, а также предотвращает ошибки, связанные с неправильными типами данных. Это делает ваш код более надежным и предсказуемым. Если у вас есть дополнительные вопросы или нужна помощь с конкретными аспектами, дайте знать!