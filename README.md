Для запуска должен быть установлен и запущен docker. 

Перед запуском в `docker-compose.yml` нужно указть `environment в api`.

- EMAIL - email который будет добавлен в базу данных и на которое будут отправлено письмо
- API_KEY_MAILGAN - ключ с сервиса mailgan
- DOMAIN_MAILGAN - домен mailgan

Для запуска введите команду `docker-compose up --build`

В базу запись доваляеться автоматически при запуске проекта

Для отправки запроса в Postman:
- Указать Url - `http://localhost:4000/api/invoice`
- Добавить в body `{
                      "email": "Здесь email который указан в environment",
                      "listOfWorks": [
                          {"price": 231, "project": "какой то проект"},
                          {"price": 231, "project": "какой то проект"}
                      ]
                  } `
- Проверить почту
