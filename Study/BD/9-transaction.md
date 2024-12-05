# Транзакция в контексте баз данных 

— это последовательность операций, которые выполняются как единое целое. Транзакции обеспечивают целостность и согласованность данных, гарантируя, что все операции внутри транзакции либо успешно выполняются, либо, в случае ошибки, отменяются.

### Основные характеристики транзакций:

1. **Атомарность (Atomicity)**: Транзакция считается атомарной, если она выполняется полностью или не выполняется вовсе. Если одна из операций в транзакции не удалась, все изменения, внесенные до этого момента, откатываются.

2. **Согласованность (Consistency)**: Транзакции должны переводить базу данных из одного согласованного состояния в другое. Это означает, что все бизнес-правила и ограничения должны соблюдаться до и после выполнения транзакции.

3. **Изолированность (Isolation)**: Транзакции должны выполняться независимо друг от друга. Это означает, что изменения, внесенные одной транзакцией, не должны быть видимы другим транзакциям, пока первая транзакция не завершится.

4. **Долговечность (Durability)**: После успешного завершения транзакции все изменения должны сохраняться в базе данных, даже в случае сбоя системы. Это достигается с помощью механизмов журналирования и резервного копирования.

### Пример использования транзакций:

Рассмотрим пример, когда вы переводите деньги с одного банковского счета на другой. Этот процесс включает две операции: вычитание суммы с одного счета и добавление той же суммы на другой счет. Оба действия должны быть выполнены вместе, чтобы избежать несоответствий (например, деньги могут быть вычтены, но не добавлены на другой счет).

Пример транзакции в SQL может выглядеть следующим образом:
```jql

BEGIN;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1; -- Снять 100
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2; -- Добавить 100

COMMIT; //Зафиксировать изменения


//Если одна из операций не удастся, вы можете откатить изменения:

ROLLBACK; //Отменить все изменения в транзакции

```



### Заключение

Транзакции играют ключевую роль в обеспечении целостности и надежности данных в реляционных базах данных. Они позволяют группировать операции, обеспечивая их выполнение как единое целое, что критически важно для приложений, работающих с важной или чувствительной информацией. Если у вас есть дополнительные вопросы или нужна помощь с конкретными аспектами, дайте знать!