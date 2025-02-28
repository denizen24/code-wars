### Задача: Слияние двух отсортированных массивов

Описание задачи:
Даны два отсортированных массива. Необходимо объединить их в один отсортированный массив.

Пример:
```
Input: nums1 = [1, 2, 3], nums2 = [2, 5, 6]
Output: [1, 2, 2, 3, 5, 6]
```

### Решение

Существует несколько способов решить эту задачу. Рассмотрим подход с использованием двух указателей.

#### Подход с двумя указателями

Этот подход использует два указателя для прохода по обоим массивам и объединения их в новый массив.
```js
function mergeSortedArrays(nums1, nums2) {
const merged = [];
let i = 0; // Указатель для nums1
let j = 0; // Указатель для nums2

    // Проходим по обоим массивам
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    // Добавляем оставшиеся элементы из nums1
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    // Добавляем оставшиеся элементы из nums2
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    return merged;
}

// Пример использования
const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];
const result = mergeSortedArrays(nums1, nums2);
console.log(result); // Вывод: [1, 2, 2, 3, 5, 6]
```

### Объяснение кода:

1. Инициализация:
    - Создаем пустой массив merged, который будет хранить объединенные элементы.
    - Инициализируем два указателя i и j для отслеживания текущих индексов в nums1 и nums2.

2. Основной цикл:
    - Используем цикл while, чтобы проходить по обоим массивам, пока оба указателя не выйдут за пределы.
    - Сравниваем текущие элементы nums1[i] и nums2[j] и добавляем меньший элемент в массив merged.

3. Добавление оставшихся элементов:
    - После завершения основного цикла могут остаться элементы в одном из массивов. Используем дополнительные циклы while, чтобы добавить их в merged.

4. Возврат результата:
    - Функция возвращает объединенный отсортированный массив.

### Сложность

- Временная сложность: `O(n + m)`, где n и m — длины массивов nums1 и nums2.
- Пространственная сложность: `O(n + m)` для хранения объединенного массива.

### Заключение

Эта задача часто встречается на собеседованиях, так как она проверяет ваше понимание работы с массивами и алгоритмов сортировки. Подход с двумя указателями является эффективным и интуитивно понятным.