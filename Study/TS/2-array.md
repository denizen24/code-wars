В JavaScript и TypeScript есть множество методов для работы с массивами, включая перебор, сортировку и другие операции. Давайте рассмотрим основные методы и способы работы с массивами.

### 1. Перебор массивов

#### a. `forEach()`

Метод `forEach()` выполняет указанную функцию один раз для каждого элемента массива.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});
```

#### b. `map()`

Метод `map()` создает новый массив, заполняя его результатами вызова заданной функции для каждого элемента массива.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

#### c. `filter()`

Метод `filter()` создает новый массив, содержащий все элементы, которые прошли проверку, заданную в функции.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

#### d. `for...of`

Цикл `for...of` позволяет перебрать элементы массива без использования индексов.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}
```

### 2. Сортировка массивов

#### a. `sort()`

Метод `sort()` сортирует элементы массива на месте и возвращает отсортированный массив. По умолчанию сортировка происходит в лексикографическом порядке, поэтому для чисел нужно передать функцию сравнения.

```javascript
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b); // Сортировка по возрастанию
console.log(numbers); // [1, 2, 3, 5, 8]

const fruits = ['banana', 'apple', 'cherry'];
fruits.sort(); // Лексикографическая сортировка
console.log(fruits); // ['apple', 'banana', 'cherry']
```

### 3. Поиск в массивах

#### a. `find()`

Метод `find()` возвращает первое значение в массиве, которое удовлетворяет предоставленной функции проверки. Если ни одно значение не найдено, возвращается `undefined`.

```javascript
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find((number) => number > 10);
console.log(found); // 12
```

#### b. `indexOf()`

Метод `indexOf()` возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если элемент не найден.

```javascript
const fruits = ['apple', 'banana', 'cherry'];
const index = fruits.indexOf('banana');
console.log(index); // 1
```

### 4. Удаление и добавление элементов

#### a. `push()` и `pop()`

Методы `push()` и `pop()` используются для добавления и удаления элементов в конце массива соответственно.

```javascript
const numbers = [1, 2, 3];
numbers.push(4); // Добавляет 4 в конец
console.log(numbers); // [1, 2, 3, 4]

const last = numbers.pop(); // Удаляет последний элемент
console.log(last); // 4
console.log(numbers); // [1, 2, 3]
```

#### b. `shift()` и `unshift()`

Методы `shift()` и `unshift()` используются для удаления и добавления элементов в начале массива соответственно.

```javascript
const numbers = [1, 2, 3];
numbers.unshift(0); // Добавляет 0 в начало
console.log(numbers); // [0, 1, 2, 3]

const first = numbers.shift(); // Удаляет первый элемент
console.log(first); // 0
console.log(numbers); // [1, 2, 3]
```

### 5. Объединение и разделение массивов

#### a. `concat()`

Метод `concat()` используется для объединения двух или более массивов.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

#### b. `slice()`

Метод `slice()` возвращает новый массив, содержащий копию части исходного массива.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4); // Извлекает элементы с индекса 1 по 3
console.log(sliced); // [2, 3, 4]
```

### 6. Применение в TypeScript

В TypeScript все перечисленные методы работают так же, как и в JavaScript, но вы можете использовать типы для определения структуры массивов. Например:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled: number[] = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, ...