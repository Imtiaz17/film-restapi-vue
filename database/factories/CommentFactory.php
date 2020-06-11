<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use App\User;
use App\Film;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'user_id'=> function(){
            return User::all()->random();
        },
        'name'=>$faker->name,
        'comment'=>$faker->text($maxNbChars =50),
        'film_id'=> function(){
            return Film::all()->unique();
        },
    ];
});
