## Userlar uchun

| Method | url | description | token | body |
|---|---|---|---|---|
| POST | /login | Login qilishi | | username, password |
| POST | /users | Userni ro'yxatdan o'tkazish | true | first_name, last_name, username, password |
| GET | /users | Userlar ro'yxatini olish | true | |
| GET | /users/:id | Bitta user ma'lumoti | true | |
| PATCH | /users/:id | User ma'lumotini tahrirlash | true | first_name?, last_name?, username?, password? |
| DELETE | /users/:id | Userni o'chirish | true | |

<br>
*** GET /users yo'liga so'rov jo'natishda query yuborish mumkin
<br>
q= type string,
<br>
sort[by]= first_name || username
<br>
sort[order]= asc || desc
<br>
page[offset]= type number
<br>
page[limit]= type number
<br>
filters[is_deleted]= type boolean