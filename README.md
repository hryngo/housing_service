# Housing Service

Housing Service is a fundamental hotel reservation booking system designed to streamline the process of booking hotel rooms for users. The system provides APIs for browsing available properties, selecting room blocks, making reservations, and processing payments securely.

## Table of Contents

- [Housing Service](#housing-service)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Environment variables](#environment-variables)
    - [Authentication](#authentication)
    - [API references](#api-references)
      - [Register property hotel](#register-property-hotel)
      - [Create room types](#create-room-types)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
    - [Properties module](#properties-module)
    - [Room blocks module](#room-blocks-module)
    - [Reservation bookings module](#reservation-bookings-module)
    - [Payments module](#payments-module)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)

## Prerequisites

- [NodeJS 20.x.x](https://nodejs.org/) JavaScript runtime environment.
- [PostgreSQL 15.x](https://www.postgresql.org/download/) Object-relational database system.
- [TypeScript 5.4.x](https://www.typescriptlang.org/download) Programming language.
- [Yarn](https://yarnpkg.com) Package manager.

## Requirements

- [NestJS 10.x.x](https://nestjs.com) NodeJS-based web framework.
- [TypeORM 0.3.x](https://typeorm.io) Object relational mapper.
- [node-postgres](https://node-postgres.com) Non-blocking PostgreSQL client.
- [Passport 0.7.x](https://www.passportjs.org) Authentication middleware for NodeJs.
- [class-transformer](https://github.com/typestack/class-transformer) Literal and constructor object transformer.
- [class-validator](https://github.com/typestack/class-validator) Validation decorators.

## Installation

Installing project dependencies using `yarn`

```shell
yarn install
```

Generating initial database migration.

```shell
npm run migration:generate --name=initial
```

Run database migration.

```shell
yarn migration:run
```

Running application with development mode.

```shell
yarn start
```

Running with watch mode.

```shell
yarn start:dev
```

## Usage

### Environment variables

To start development we need to set up environment variables, create a `.env.development` copy file from `.env.example` under the project directory and populate it as follows:

```dotenv
# Enter your environment variables

DATABASE_HOST=localhost # default host: localhost
DATABASE_PORT=5432 # default port: 5432
DATABASE_NAME={your_database_name}
DATABASE_USER={your_database_user}
DATABASE_PASSWORD={your_database_password}

AUTH_TOKEN_AUDIENCE={your_audience}
AUTH_TOKEN_ISSUER={your_issuer_domain}
```

- `DATABASE_{SUFFIX}` - PostgreSQL database connection variables.
- `AUTH_TOKEN_AUDIENCE` - This variable wil be used as the `aud` [Audience](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3) Claim in the [JSON Web Token](https://jwt.io) (JWT) standard. It specifies the intended recipient(s) for the JWT.
- `AUTH_TOKEN_ISSUER` - This variable wil be used as the `iss` [Issuer](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1) Claim in the JWT standard. It specifies the entity that issued (created) the JWT.

### Authentication

We use JWT, [JSON Web Key](https://datatracker.ietf.org/doc/html/rfc7517) (JWK), and JWK Sets for implementing authentication and permission-based access-control / authorization (PBAC). 

JWT Sets URI is setup in [jwt.strategy.ts](https://github.com/hryngo/housing_service/blob/main/src/auth/jwt.strategy.ts#L26)

```dotenv
{AUTH_TOKEN_ISSUER}/.well-known/jwks.json
```

To handle PBAC, you need to enable (implement) PBAC in your identity service (user authentication system) and send permissions in, and after issuing JWT access token under a custom claim.

Providing your `Bearer` Token (JWT access token) with `Authorization: Bearer {token}` header. To request sequence API calls, for instance:

```http
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7dXNlcl9pZGVudGlmaWVyfSIsImlzcyI6IntBVVRIX1RPS0VOX0lTU1VFUn0iLCJhdWQiOiJ7QVVUSF9UT0tFTl9BVURJRU5DRX0iLCJpYXQiOjE3MTI0MDMxMDgsImV4cCI6MTcxMjQ4OTUwOCwicGVybWlzc2lvbnMiOlsicHJvcGVydHkubWFuYWdlIiwicHJvcGVydHkudmlldyJdfQ.KhlUHLRAEG4kcL6lp-VyBAVk3yQzoemsgDqiM2vfISoK2uGkmT_ohzuA91KEFHui_lEEV7eZk5eP0yg8zA3f6EbnVcc7TQ_6-bb5hNjEK69ECswmiEj0PPRPBERzdTzDvtLcnFsYl6xKVAFgTVxrFCYoObuq0bPkZnDeu1-FxC1rd4PU5kIa1Jx_lBH30yNHT91GtT3dqkk9RherJd83s0MOvI8HJxe3_Rao9W9bNhsd7k_x3fJtV__ouj0sw9Wqd5SIvhUgC7wW39xb3az94P6UxoYkVf8n_ohGe8GNLSw-dEPMN7dhuCIfUoSRC-1Tsp-iuyxFrARC_u67rq1mIQ
```

The custom `permissions` claim in JWT payload, for instance:

```json
{
  ...,
  "sub": "{user_identifier}",
  "iss": "{AUTH_TOKEN_ISSUER}",
  "aud": "{AUTH_TOKEN_AUDIENCE}",
  "iat": 1712403108,
  "exp": 1712489508,
  "permissions": [
    "property.manage",
    "property.view"
  ]
}
```

### API references

The project has used [OpenAPI](https://swagger.io/specification/) Specification to describe [RESTful APIs](https://restfulapi.net).

After, running application we can access API document locally via URL `http://localhost:3000/api`, including [Properties](#properties-module) and [Room Types](#properties-module) API there for now.

#### Register property hotel

`POST /api/v1/properties`

To use services, we need to register a property hotel to our housing system by making API call as follows:

```http
POST /api/v1/properties HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer {token}

{
  "name": "The Continental Hotel",
  "description": "The Continental is a international chain of luxury hotels that function as neutral territories for members of the criminal underworld.",
  "group": "The Continental",
  "brand": "string",
  "roomCount": 120,
  "currency": "USD",
  "phoneNumber": "string",
  "emailAddress": "admin@example.com",
  "addressLine": "1 Wall Street Court, New York City",
  "rating": 5,
  "hotelier": "Winston Scott"
}
```

Learn more properties API in document.

#### Create room types

`POST /api/v1/properties/:propertyId/room-types`

To create room types as accommodations for a specific property hotel with `id` is `066c8703-0013-4304-aa8e-15d5ccae9abc`, request API call as follows:

```http
POST /api/v1/properties/066c8703-0013-4304-aa8e-15d5ccae9abc/room-types HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer {token}

{
  "roomTypes": [
    {
      "name": "Standard",
      "code": "STD",
      "description": "Iusto aperiam nesciunt nihil vel aut itaque.",
      "maxOccupancy": 2,
      "size": 24,
      "unit": "sqm"
    },
    {
      "name": "Deluxe",
      "code": "DLX",
      "description": "Et voluptatem dignissimos fuga officia.",
      "maxOccupancy": 2,
      "size": 36,
      "unit": "sqm"
    }
  ]
}
```

Learn more room types API in document.

## Deployment

This is a way as a step-by-step deployment of how to deliver code to `production` environment.

To be determined (TBD).

## Credits

This project has utilized various open-source libraries and adheres to community guidelines for best practices in software development.

[NodeJS](https://nodejs.org/) • [NestJS](https://nestjs.com) • [Auth0](https://auth0.com) • [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) • [class-transformer](https://github.com/typestack/class-transformer) • [class-validator](https://github.com/typestack/class-validator) • [TypeORM](https://typeorm.io) • [Passport](https://www.passportjs.org) • [PostgreSQL](https://www.postgresql.org) • [TypeScript](https://www.typescriptlang.org) • [Yarn](https://yarnpkg.com)

## License

Housing Service is [MIT license](https://github.com/hryngo/housing_service?tab=MIT-1-ov-file)

## Badges

TBD.

## Features

### Properties module

Allowing users to register hotels and room types management includes amenities.

### Room blocks module

Offering hotels and bookers the room blocks management, including occupancy limits and pricing availability.

TBD.

### Reservation bookings module

Enabling guests to search room availability in blocks, and make multi-room reservations on a single transaction.

TBD.

### Payments module

Facilitating secure payment processing for reservation bookings with various payment methods and online gateway support.

TBD.

## How to Contribute

Hey there! I'd love your help in making this project even better! Get in touch with me at [fuongit@gmail.com](mailto:fuongit@gmail.com).

Here's how you can contribute:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.
4. Or, [open an issue](https://github.com/hryngo/housing_service/issues/new) and I’ll work out how to handle it.

Thanks a bunch for your contribution! I truly appreciate it! 🎉

## Tests

TBD.
