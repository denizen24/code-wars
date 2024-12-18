**Что сделает команда “SETNX KEY 5”**


Команда SETNX в Redis используется для установки значения ключа, только если этот ключ еще не существует. Это означает, что команда выполнит операцию "установить, если не существует". Если ключ уже существует, команда не изменит значение и вернет 0.

### Синтаксис команды

`SETNX key value`


- key: Имя ключа, который вы хотите установить.
- value: Значение, которое вы хотите установить для этого ключа.

### Пример работы команды SETNX

Допустим, вы выполняете следующую команду:

`SETNX mykey 5`


Вот что произойдет:

1. Если mykey не существует:
    - Redis создаст новый ключ mykey и установит его значение равным 5.
    - Команда вернет 1, что означает, что ключ был успешно установлен.

2. Если mykey уже существует:
    - Redis не изменит значение ключа.
    - Команда вернет 0, что означает, что ключ уже существует, и значение не было установлено.

### Пример использования

#### 1. Установка значения, когда ключ не существует

> SETNX mykey 5
(integer) 1  # Ключ был установлен

> GET mykey
"5"


#### 2. Попытка установить значение, когда ключ уже существует

> SETNX mykey 10
(integer) 0  # Ключ уже существует, значение не изменено

> GET mykey
"5"  # Значение осталось прежним


### Заключение

Команда SETNX полезна для обеспечения атомарности операций, когда вы хотите установить значение только в том случае, если ключ еще не существует. Это часто используется для реализации блокировок или для создания уникальных записей, когда необходимо гарантировать, что определенный ключ будет установлен только один раз.