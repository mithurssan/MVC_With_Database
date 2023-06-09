# MVC With Database

## Installation and Usage
- npm install
- docker compose up
- npm run dev, server will start on [9000](http://localhost:9000)

## Endpoints
 - GET 
   - `/people` - Return a list of people
   - `/people/:id` - Get the details of a specific person
   - `/wrongs/:id` - Get the details of a specific wrong
   - `/stats` - Return a summary of all the wrongs in the database
   - `/stats/:id` - Return a summary of all the wrongs related to a specific person
   - `/stats/people` - Return a summary of all relevant wrongs for each person

- POST
   - `/people` - Add a new person to the database
   - `/wrongs` - Add a new wrong to the database

- DELETE
   - `/wrongs/:id` - Remove a wrong from the database
   - `/people/:id` - Remove a person from the database

- PATCH
   - `/wrongs/:id` - Update a wrong, changing its description

