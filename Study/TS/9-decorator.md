Декораторы в TypeScript — это специальный синтаксис, который позволяет добавлять метаданные или изменять поведение классов, методов, свойств и параметров. Декораторы являются экспериментальной функцией в TypeScript и требуют включения соответствующего флага компилятора.

### Основные типы декораторов

1. Декораторы классов: Применяются к классам и позволяют изменять или добавлять функциональность.
2. Декораторы методов: Используются для изменения поведения методов.
3. Декораторы свойств: Позволяют изменять свойства класса.
4. Декораторы параметров: Применяются к параметрам методов и позволяют добавлять метаданные.

### Включение декораторов

Чтобы использовать декораторы, вам нужно включить опцию experimentalDecorators в вашем файле конфигурации tsconfig.json:
```json
{
"compilerOptions": {
      "experimentalDecorators": true
    }
}
```


### Примеры использования декораторов

#### 1. Декоратор класса

Декоратор класса позволяет добавлять функциональность к классу.
```ts
function LogClass(target: Function) {
    console.log(Class: ${target.name});
}

@LogClass
class User {
    constructor(public name: string) {}
}

const user = new User("Alice");
```


#### 2. Декоратор метода

Декоратор метода позволяет изменять поведение метода.
```ts
function LogMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(Calling ${propertyName} with, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number) {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(5, 10); // "Calling add with" [5, 10]
```



#### 3. Декоратор свойства

Декоратор свойства позволяет добавлять метаданные к свойствам класса.
```ts
function LogProperty(target: any, propertyName: string) {
    let value: string;

    const getter = () => {
        console.log(Getting ${propertyName}: ${value});
        return value;
    };

    const setter = (newValue: string) => {
        console.log(Setting ${propertyName}: ${newValue});
        value = newValue;
    };

    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
    });
}

class Person {
    @LogProperty
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Alice");
person.name = "Bob"; // "Setting name: Bob"
console.log(person.name); // "Getting name: Bob"
```



#### 4. Декоратор параметра

Декоратор параметра позволяет добавлять метаданные к параметрам методов.
```ts
function LogParameter(target: any, methodName: string, parameterIndex: number) {
    console.log(Parameter at index ${parameterIndex} in method ${methodName} was decorated.);
}

class Greeter {
    greet(@LogParameter message: string) {
        console.log(message);
    }
}

const greeter = new Greeter();
greeter.greet("Hello, World!");
```



### Заключение

Декораторы в TypeScript являются мощным инструментом для добавления метаданных и изменения поведения классов, методов и свойств. Они широко используются в таких библиотеках, как Angular, для реализации функциональности, такой как внедрение зависимостей и маршрутизация. Если у вас есть дополнительные вопросы или нужна помощь с конкретными аспектами декораторов, дайте знать!