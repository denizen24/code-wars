### Задача 3: Сумма двух чисел с помощью хэш-таблицы

Описание задачи:
Дан массив целых чисел и целое число target. Необходимо определить, существуют ли два числа в массиве, сумма которых равна target. Если такие числа найдены, вернуть их индексы.

Пример:
```
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
```
Объяснение: `nums[0] + nums[1] = 2 + 7 = 9`.

### Решение

Этот алгоритм можно эффективно решить с помощью хэш-таблицы (в JavaScript это объект или Map), что позволит нам находить необходимые пары за одно прохождение по массиву.

#### Подход с использованием хэш-таблицы

1. Создаем пустую хэш-таблицу (объект).
2. Проходим по массиву, и для каждого элемента вычисляем, какое число нам нужно, чтобы получить target.
3. Проверяем, есть ли это число в хэш-таблице.
4. Если есть, возвращаем индексы текущего числа и найденного числа.
5. Если нет, добавляем текущее число и его индекс в хэш-таблицу.

Вот пример реализации:
```js
function twoSum(nums, target) {
const map = new Map(); // Создаем хэш-таблицу

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Находим недостающее число
        if (map.has(complement)) { // Проверяем, есть ли оно в хэш-таблице
            return [map.get(complement), i]; // Возвращаем индексы
        }
        map.set(nums[i], i); // Сохраняем число и его индекс
    }

    return null; // Если не нашли
}

// Пример использования
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Вывод: [0, 1]
```

### Объяснение кода:

1. Создание хэш-таблицы:
    - `const map = new Map();` — создаем новый объект Map, который будет хранить числа и их индексы.

2. Цикл по массиву:
    - В цикле перебираем все элементы массива nums.
    - `const complement = target - nums[i];` — вычисляем недостающее число, которое в сумме с текущим числом даст target.

3. Проверка наличия в хэш-таблице:
    - `if (map.has(complement))` — проверяем, есть ли недостающее число в хэш-таблице.
    - Если оно найдено, возвращаем индексы найденного числа и текущего числа.

4. Добавление в хэш-таблицу:
    - Если недостающее число не найдено, добавляем текущее число и его индекс в хэш-таблицу: map.set(nums[i], i);.

5. Возврат результата:
    - Если не нашли пару, возвращаем `null`.

### Сложность

- Временная сложность: `O(n)` — проходим по массиву один раз.
- Пространственная сложность: `O(n)` — в худшем случае храним все элементы в хэш-таблице.

### Заключение

Эта задача часто встречается на собеседованиях, так как она проверяет ваше понимание работы с массивами и хэш-таблицами. Подход с использованием хэш-таблицы является предпочтительным, так как он значительно снижает временную сложность.