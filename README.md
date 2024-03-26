# Housing Service

Housing Service is a fundamental hotel reservation booking system designed to streamline the process of booking hotel rooms for users. The system provides APIs for browsing available properties, selecting room blocks, making reservations, and processing payments securely.

## Table of Contents

- [Housing Service](#housing-service)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
    - [Properties Module](#properties-module)
    - [Room Blocks Module](#room-blocks-module)
    - [Reservation Bookings Module](#reservation-bookings-module)
    - [Payments Module](#payments-module)
  - [Key Functionalities](#key-functionalities)
  - [Technology Stack](#technology-stack)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)

## Prerequisites

- [NodeJS 20.x.x](https://www.python.org/downloads/release/python-3116/) JavaScript runtime environment.
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

Documentation not available.

## Deployment

Documentation not available.

This is a way as a step-by-step deployment of how to deliver code to `production` environment.

```shell
# Shell script documentation here.
```

## Credits

Documentation not available.

## License

Documentation not available.

---

🏆 Documentation not available.

## Badges

Documentation not available.

## Features

### Properties Module

Allows users to browse and search through a list of available hotel properties. Each property listing includes details such as location, amenities, and room types.

### Room Blocks Module

Provides information on room availability within each property, including room types, occupancy limits, and pricing. Users can view room block details and select the desired dates for their stay.

### Reservation Bookings Module

Enables users to make reservations for their desired room blocks by providing personal information, such as name, contact details, and payment information. Users can also view and manage their existing reservations.

### Payments Module

Facilitates secure payment processing for reservation bookings. Users can choose from multiple payment methods, such as credit/debit cards or online payment gateways, to complete their transactions.

## Key Functionalities

Documentation not available.

## Technology Stack

Documentation not available.

## How to Contribute

Documentation not available.

## Tests

Documentation not available.
