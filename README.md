<h1 align="center">Todo BE</h1>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)

<!-- Built With -->

## Built With

- [mongoose](https://mongoosejs.com/)
- [Express](http://expressjs.com/)

ETC: ~4:10h

## Features

- [x] **User story**: I can get all todos
- [x] **User story**: I can add todo
- [x] **User story**: I can delete todo
- [x] **User story**: I can update todo

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

### Run the project

update `./config/default.ts` file e.g.

```bash
export default {
  port: 4004,
  host: "localhost",
  dbUri:
    "mongodb+srv://... your mongo uri",
};
```

```bash
# install packages
yarn

# start server
yarn start
```