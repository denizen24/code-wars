# Селективность индекса 

— это мера того, насколько эффективно индекс может фильтровать строки в таблице. Она показывает, насколько хорошо индекс может различать между различными значениями в индексируемом столбце. Высокая селективность означает, что индекс может эффективно отсеивать значительное количество строк, что улучшает производительность запросов.

### Основные аспекты селективности индекса:

1. Определение: Селективность индекса рассчитывается как отношение уникальных значений в индексируемом столбце к общему количеству строк в таблице. Формула может выглядеть следующим образом:
   ```javascript
    [
    text{Селективность} = frac{text{Количество уникальных значений}}{text{Общее количество строк}}
    ]
    ```
   

2. Высокая селективность: Индекс с высокой селективностью (например, индекс на поле с уникальными значениями, такими как идентификаторы или email) позволяет быстро находить строки, так как он может точно определить, какие строки соответствуют критериям поиска.

3. Низкая селективность: Индекс с низкой селективностью (например, индекс на поле, где много дублирующихся значений, как пол gender с значениями male и female) не так эффективен, так как он не может существенно сократить количество строк, которые нужно просмотреть.

4. Влияние на производительность: Селективность индекса влияет на производительность запросов. Более селективные индексы обычно приводят к более быстрому выполнению запросов, так как они позволяют СУБД быстрее находить нужные строки.

5. Примеры:
    - Высокая селективность: Индекс на столбце user_id в таблице пользователей, где каждый пользователь имеет уникальный идентификатор.
    - Низкая селективность: Индекс на столбце status в таблице заказов, где возможные значения могут быть pending, completed, canceled, и большинство записей имеет одно из этих значений.

### Заключение

Селективность индекса — это важный фактор, который определяет его эффективность. При проектировании индексов важно учитывать селективность, чтобы обеспечить оптимальную производительность запросов. Высокая селективность позволяет быстро находить данные и улучшает общую производительность базы данных. Если у вас есть дополнительные вопросы или нужна помощь с конкретными аспектами, дайте знать!