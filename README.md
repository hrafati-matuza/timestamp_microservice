Timestamp Microservice
======================

This project is a Timestamp Microservice built using Express.js and JavaScript. It provides a simple API that generates a timestamp based on input parameters. This project is part of the freeCodeCamp Backend and API certification, developed using the boilerplate provided.

Table of Contents
-----------------

-   [Overview](#overview)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [API Endpoints](#api-endpoints)
-   [Examples](#examples)
-   [Technologies Used](#technologies-used)
-   [License](#license)

Overview
--------

The Timestamp Microservice is an API that accepts a date string or a UNIX timestamp as a parameter and returns a JSON object containing the corresponding UTC and UNIX timestamp. It provides an easy way to convert date strings into UNIX timestamps and vice versa.

Features
--------

-   Convert date strings to UNIX timestamps.
-   Convert UNIX timestamps to date strings.
-   Handle natural language date strings.
-   Return both UTC and UNIX formats in the response.

Installation
------------

1.  **Clone the repository:**

    bash

    Copy code

    `git clone https://github.com/yourusername/timestamp-microservice.git
    cd timestamp-microservice`

2.  **Install dependencies:**

    bash

    Copy code

    `npm install`

3.  **Start the server:**

    bash

    Copy code

    `npm start`

    The server will start running on `http://localhost:3000`.

Usage
-----

To use the Timestamp Microservice, you can make GET requests to the provided API endpoints. Below are the available endpoints and their usage.

API Endpoints
-------------

### Get Timestamp

-   **URL:** `/api/:date?`

-   **Method:** `GET`

-   **URL Parameters:**

    -   `date` (optional): A date string or UNIX timestamp.
-   **Success Response:**

    -   **Code:** 200
    -   **Content:**

        json

        Copy code

        `{
          "unix": 1450137600,
          "utc": "Fri, 15 Dec 2015 00:00:00 GMT"
        }`

-   **Error Response:**

    -   **Code:** 400
    -   **Content:**

        json

        Copy code

        `{
          "error": "Invalid Date"
        }`

Examples
--------

### Valid Date String

**Request:**

bash

Copy code

`curl http://localhost:3000/api/2015-12-25`

**Response:**

json

Copy code

`{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}`

### Valid UNIX Timestamp

**Request:**

bash

Copy code

`curl http://localhost:3000/api/1451001600000`

**Response:**

json

Copy code

`{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}`

### Invalid Date

**Request:**

bash

Copy code

`curl http://localhost:3000/api/invalid-date`

**Response:**

json

Copy code

`{
  "error": "Invalid Date"
}`

Technologies Used
-----------------

-   **Express.js:** Web framework for Node.js.
-   **JavaScript:** Programming language used for server-side logic.
-   **Node.js:** JavaScript runtime for executing server-side code.
