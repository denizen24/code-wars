**Как проверить, запущен ли процесс, не используя утилиты top или htop?**


Проверить, запущен ли процесс в Linux, можно несколькими способами, не прибегая к утилитам top или htop. Вот несколько методов, которые можно использовать:

### 1. Использование команды ps

Команда ps позволяет просматривать информацию о запущенных процессах. Вы можете использовать её для поиска конкретного процесса.

Пример:
`ps aux | grep имя_процесса`


- ps aux выводит список всех процессов, запущенных в системе.
- grep имя_процесса фильтрует вывод, показывая только строки, содержащие указанное имя процесса.

### 2. Использование команды pgrep

Команда pgrep позволяет искать процессы по имени и возвращает их PID (идентификатор процесса).

Пример:
`pgrep имя_процесса`


- Если процесс запущен, команда вернет его PID. Если процесс не найден, она не выдаст никакого вывода.

### 3. Проверка через /proc

В Linux все запущенные процессы имеют соответствующие записи в файловой системе /proc. Вы можете проверить наличие директории с PID процесса.

Пример:
```
if [ -d /proc/PID ]; then
echo "Процесс с PID $PID запущен."
else
echo "Процесс с PID $PID не запущен."
fi
```

Замените PID на фактический идентификатор процесса, который вы хотите проверить.

### 4. Использование команды systemctl (для служб)

Если процесс является службой, вы можете использовать systemctl для проверки его статуса.

Пример:
`systemctl status имя_сервиса`


### 5. Использование команды pidof

Команда pidof возвращает PID процесса по его имени.

Пример:
`pidof имя_процесса`


- Если процесс запущен, команда вернет его PID. Если процесс не найден, она не выдаст никакого вывода.

### Заключение

Существует несколько способов проверить, запущен ли процесс в Linux, без использования утилит top или htop. Команды ps, pgrep, pidof, а также проверка файловой системы /proc являются эффективными методами для этой задачи.