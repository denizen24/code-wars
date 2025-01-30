Условие задачи
Мы в Авито любим проводить соревнования, — недавно мы устроили чемпионат по шагам. И вот настало время подводить итоги!

Необходимо определить userIds участников, которые прошли наибольшее количество шагов steps за все дни, не пропустив ни одного дня соревнований.

Пример
# Пример 1
# ввод
```
statistics = [
[{ userId: 1, steps: 5000 }, { userId: 2, steps: 1500 }],
[{ userId: 2, steps: 1000 }]
]
```

# вывод
`champions = { userIds: [2], steps: 2500 }`

# Пример 2
```
statistics = [
[{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
[{ userId: 2, steps: 4000 }, { userId: 1, steps: 3500 }]
]
```
N - days, K - users
Время: O(N*K)
Доп память: O(K)

# вывод
```js
champions = { userIds: [1, 2], steps: 5500 }

function getChampions(statistics = []) {

    const finalStat = []
    let map = new Map()
    for usersOneDay of statistics[0] {
        for user of usersOneDay {
            map.set(user.userId, user.steps)
        }
    }


    for (const i = 1, i < statistics.length, i++) {
        const mapDay = new Map()
        for user of statistics[i] {
            if (map.has(user.userId)) {
                const stepDaySum = map.get(user.userId)
                mapDay.set(user.userId, user.steps + stepDaySum)
            }
        }
        map = mapDay
    }

    const max = map[0]
    const result = []
    for item of map {
        if (max.steps < item.steps) max = item
    }
    
    for item of map {
        if (max.steps === item.steps) result = result.push(item.userId)
    }

    return { userId: result, steps: max.steps}
```


## решение из чатика

Для решения задачи необходимо пройтись по массиву statistics, подсчитать общее количество шагов для каждого пользователя и определить пользователей, которые не пропустили ни одного дня соревнований. Если пользователь пропустил хотя бы один день, его не следует учитывать в итоговом результате.

Вот пример реализации на JavaScript:
```js
function findChampions(statistics) {
    const userSteps = {};
    const userDays = {};
    const totalDays = statistics.length;
    
        // Обрабатываем статистику по дням
        statistics.forEach(dailyStats => {
            const uniqueUserIds = new Set(); // Для отслеживания уникальных пользователей в день
    
            dailyStats.forEach(({ userId, steps }) => {
                // Суммируем шаги для каждого пользователя
                if (!userSteps[userId]) {
                    userSteps[userId] = 0;
                    userDays[userId] = 0; // Инициализируем счетчик дней
                }
                userSteps[userId] += steps;
                uniqueUserIds.add(userId);
            });
    
            // Увеличиваем счетчик дней для пользователей, которые участвовали в этом дне
            uniqueUserIds.forEach(userId => {
                userDays[userId] += 1;
            });
        });
    
        // Определяем чемпионов
        const champions = { userIds: [], steps: 0 };
    
        for (const userId in userSteps) {
            // Проверяем, пропустил ли пользователь хоть один день
            if (userDays[userId] === totalDays) {
                if (userSteps[userId] > champions.steps) {
                    champions.userIds = [parseInt(userId)]; // Обновляем список чемпионов
                    champions.steps = userSteps[userId]; // Обновляем максимальное количество шагов
                } else if (userSteps[userId] === champions.steps) {
                    champions.userIds.push(parseInt(userId)); // Добавляем пользователя в список чемпионов
                }
            }
        }
    
        return champions;
}
```
```js
// Примеры использования
const statistics1 = [
[{ userId: 1, steps: 5000 }, { userId: 2, steps: 1500 }],
[{ userId: 2, steps: 1000 }]
];

const statistics2 = [
[{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
[{ userId: 2, steps: 4000 }, { userId: 1, steps: 3500 }]
];

console.log(findChampions(statistics1)); // { userIds: [2], steps: 2500 }
console.log(findChampions(statistics2)); // { userIds: [2], steps: 5500 }
```

### Объяснение кода:

1. Инициализация объектов:
    - userSteps: Для хранения общего количества шагов каждого пользователя.
    - userDays: Для отслеживания количества дней, когда каждый пользователь участвовал.

2. Обработка статистики:
    - Мы проходим по каждому дню и собираем данные о шагах пользователей.
    - Для каждого пользователя обновляем общее количество шагов и увеличиваем счетчик дней, если он присутствует в статистике за этот день.

3. Определение чемпионов:
    - Мы проходим по userSteps и проверяем, участвовал ли пользователь во всех днях соревнований.
    - Если он участвовал, сравниваем его общее количество шагов с текущими чемпионами и обновляем список чемпионов.

4. Возврат результата:
    - Возвращаем объект с userIds и steps, представляющий чемпионов.

Этот код решает задачу, подсчитывая шаги и определяя пользователей, которые не пропустили ни одного дня соревнований. 