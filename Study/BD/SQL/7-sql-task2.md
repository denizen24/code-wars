**Выведите идентификаторы всех рейсов и количество пассажиров на них. Обратите внимание, что на каких-то рейсах пассажиров может не быть. В этом случае выведите число "0".**

```
SELECT Trip.id, COUNT(Pass_in_trip.passenger) as count
FROM Trip
LEFT JOIN Pass_in_trip ON trip = Trip.id
GROUP BY Trip.id
```


```
SELECT Trip.id,
COUNT(passenger) AS count
FROM Trip
LEFT JOIN Pass_in_trip ON trip = Trip.id
GROUP BY Trip.id
```