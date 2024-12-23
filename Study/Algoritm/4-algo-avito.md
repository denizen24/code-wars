Условие задачи
Мы в Авито любим проводить соревнования, — недавно мы устроили чемпионат по шагам. И вот настало время подводить итоги!

Необходимо определить userIds участников, которые прошли наибольшее количество шагов steps за все дни, не пропустив ни одного дня соревнований.

Пример
# Пример 1
# ввод
statistics = [
[{ userId: 1, steps: 5000 }, { userId: 2, steps: 1500 }],
[{ userId: 2, steps: 1000 }]
]

# вывод
champions = { userIds: [2], steps: 2500 }

# Пример 2
statistics = [
[{ userId: 1, steps: 2000 }, { userId: 2, steps: 1500 }],
[{ userId: 2, steps: 4000 }, { userId: 1, steps: 3500 }]
]

N - days, K - users
Время: O(N*K)
Доп память: O(K)

# вывод
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