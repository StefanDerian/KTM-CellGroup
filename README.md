
## Project Overview
This backend instance is made for the church community. In our church community we have a big group and small groups (called Cell Groups). The purpose of this backend APIs is made is to enable people assigning and tracking member's cellgroup community and where they are at at the moment.

This backend instance will be made evolving overtime and adjusted according to business needs.




## Stack
Node v20
Nest Js
TypeOrm
MySQl database


## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Database Migrations

To avoid manual database creation, I did use typeorm for automatic database migration

 "migration:run": "npm run typeorm migration:run -- -d ./src/config/typeorm.ts",
    "migration:generate": "npm run typeorm -- -d ./src/config/typeorm.ts migration:generate ./src/migrations/$npm_config_name",
    "migration:create": "npm run typeorm -- migration:create ./src/migrations/$npm_config_name",
    "migration:revert":
```bash
# running existing migration
$ yarn migration:run

# generate migration based on the files under entities folder
$ yarn run migration:generate

# creating an empty migration file
$ yarn run migration:create

# reverting existing migration 
$ yarn run migration:revert
```


## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

## License

Nest is [MIT licensed](LICENSE).
