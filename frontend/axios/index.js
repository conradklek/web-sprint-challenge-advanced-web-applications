/*
- `[POST] http://localhost:9000/api/login`
- Expects a payload with the following properties: `username`, `password`
- Example of payload: `{ "username": "foo", "password": "12345678" }`
- The `username` length must be >= 3, and the `password` >= 8, after trimming
- The response to a proper request includes `200 OK` and the auth token
- `[GET] http://localhost:9000/api/articles`
- Expects an `Authorization` request header containing a valid auth token
- The response to a proper request includes `200 OK` and a list of articles which could be empty
- `[POST] http://localhost:9000/api/articles`
- Expects an `Authorization` request header containing a valid auth token
- Expects a payload with the following properties: `title`, `text`, `topic`
- The `title` and `text` length must be >= 1, after trimming
- The `topic` needs to be one of three values: `React`, `JavaScript`, `Node`
- Example of payload: `{ "title": "foo", "text": "bar", "topic": "React" }`
- The response to a proper request includes `201 Created`, a success message and the new article
- `[PUT] http://localhost:9000/api/articles/:article_id`
- Expects an `Authorization` request header containing a valid auth token
- Expects a payload with the following properties: `title`, `text`, `topic`
- The `title` and `text` length must be >= 1, after trimming
- The `topic` needs to be one of three values: `React`, `JavaScript`, `Node`
- Example of payload: `{ "title": "foo", "text": "bar", "topic": "React" }`
- The response to a proper request includes `200 OK`, a success message and the updated article
- `[DELETE] http://localhost:9000/api/articles/:article_id`
- Expects an `Authorization` request header containing a valid auth token
- The response to a proper request includes `200 OK` and a success message

❗ Test drive all these endpoints with [Postman](https://www.postman.com/downloads/) before starting with the project.

## MVP

In order to complete this project, you must fix the following modules:

- [frontend/axios/index.js](frontend/axios/index.js)
- [frontend/components/App.js](frontend/components/App.js)
- [frontend/components/LoginForm.js](frontend/components/LoginForm.js)
- [frontend/components/Articles.js](frontend/components/Articles.js)
- [frontend/components/ArticleForm.js](frontend/components/ArticleForm.js)

You must also also test the Spinner component in this module:

- [frontend/components/Spinner.test.js](frontend/components/Spinner.test.js)
*/
// ✨ implement axiosWithAuth

import axios from 'axios';

