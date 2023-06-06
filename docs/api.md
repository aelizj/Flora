# Flora API Documentation

<!-- TOC -->
**Contents**
- [1.1. Authentication](#11-authentication)
- [1.2. Rate Limiting](#12-rate-limiting)
- [1.3. Example API Error Format](#13-example-api-error-format)
- [1.4. `GET /api/plants`](#14-get-apiplants)
  - [1.4.1. Expected parameters](#141-expected-parameters)
  - [1.4.2. Example Response](#142-example-response)
  - [1.4.3. Error Response](#143-error-response)
- [1.5. `POST /api/plants`](#15-post-apiplants)
  - [1.5.1. Expected Payload and Headers](#151-expected-payload-and-headers)
  - [1.5.2. Successful Response](#152-successful-response)
    - [1.5.2.1. Example Response](#1521-example-response)
  - [1.5.3. Error Response](#153-error-response)
<!-- /TOC -->

---

## 1.1. Authentication

There are no authorization requirements at this time.

---

## 1.2. Rate Limiting

There are no rate limits on the API at this time.

---

## 1.3. Example API Error Format

The `/api` routes use the following format to return errors:

```json
{
  "message": "Error message",
  "code": "HTTP status code"
}
```

---

## 1.4. `GET /api/plants`

Fetches all plants from the database.

### 1.4.1. Expected parameters

None

### 1.4.2. Example Response

```json
{
  "plants": [
    {
      "_id": "6075a11231b7fc1717f3848b",
      "commonName": "Snake plant",
      "scientificName": "Dracaena trifasciata",
      "createdAt": "2021-07-20T07:28:29.089Z",
      "updatedAt": "2021-07-20T07:28:29.089Z"
    },
    {
      "_id": "6075a11231b7fc1717f3848c",
      "commonName": "Spider plant",
      "scientificName": "Chlorophytum comosum",
      "createdAt": "2021-07-20T07:28:29.089Z",
      "updatedAt": "2021-07-20T07:28:29.089Z"
    }
  ]
}
```

### 1.4.3. Error Response

If fetching all plants fails, an error will be returned with a 500 response status code.

```json
{
  "message": "Failed to fetch plants; please try again.",
  "code": 500
}
```

---

## 1.5. `POST /api/plants`

Creates a new plant guide.

### 1.5.1. Expected Payload and Headers

The Content-Type for this request should be `application/json`.

```json
{
  "plant": {
    "commonName": "ZZ Plant",
    "scientificName": "Zamioculcas zamiifolia"
  }
}
```

### 1.5.2. Successful Response

The new plant guide is returned in JSON format with a 201 response status code.

#### 1.5.2.1. Example Response

```json
{
  "_id": "6075a11231b7fc1717f3848b",
  "commonName": "ZZ Plant",
  "scientificName": "Zamioculcas Zamiifolia",
  "createdAt": "2021-07-20T07:28:29.089Z",
  "updatedAt": "2021-07-20T07:28:29.089Z"
}
```

### 1.5.3. Error Response

If creating a plant guide fails, an error will be returned with a 503 "Service Unavailable" status code.

```json
{
  "message": "Creating plant guide failed, please try again",
  "code": 503
}
```
