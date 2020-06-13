
## About Film-Mania

Film-Mania is a free film review posting platform where user can post about a film and comment each other posted film. This project is based on below functioanlity 

- Project backend is fully restfull api based with user authenticaion and registration.
- Token for each user to authenticate.
- User can post their preferred film with name, description, genre and others info.
- User can comment each others post only if they logged in
- By default 3 Films showing in /films page, upon clicking load more more films will appear 


## Installation

After you clone this project, do the following:

```
#go into the project
cd film-restapi-vue

# create a .env file
cp .env.example .env

# add the database connection config to your .env file
DB_CONNECTION=mysql
DB_DATABASE=vuespa_db
DB_USERNAME=root
DB_PASSWORD=

# install composer dependencies
composer install

# generate a key for your application
php artisan key:generate

# generate Server secret for JWT
php artisan jwt:secret

# Migration and DB seeder (after changing your DB settings in .env)
php artisan migrate --seed

# install npm dependencies
npm install

# develop
npm run dev # or npm run watch

#start the app
php artisan serve

# Build on production
npm run production

```

## Thank you


