// Сформировать массив из миллиона элементов со случайными целыми числами от 1 до миллиона.
// Написать функцию, которая ищет в сформированном массиве переданное случайное целое число
// или ближайшее к нему (не важно, большее или меньшее).


// Функция генерации массива
function generateRandomArray(size, min, max) {
    const array = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNum);
    }
    return array;
}

// Функция поиска числа
function findClosestNumber(arr, target) {
    let closest = arr[0];
    let minDiff = Math.abs(target - closest);

    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(target - arr[i]);
        if (diff < minDiff) {
            minDiff = diff;
            closest = arr[i];
        }
    }

    return closest;
}

// Генерация массива
const randomArray = generateRandomArray(1000000, 1, 1000000);

// Пример
const targetNumber = Math.floor(Math.random() * 1000000) + 1; // Случайное число от 1 до 1 миллиона
const closestNumber = findClosestNumber(randomArray, targetNumber);

console.log(`Целевое число: ${targetNumber}`);
console.log(`Ближайшее число в массиве: ${closestNumber}`);
