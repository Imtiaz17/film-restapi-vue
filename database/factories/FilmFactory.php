<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Film;
use Faker\Generator as Faker;

$factory->define(Film::class, function (Faker $faker) {
    $title=$faker->name;
    return [
       	'name'=>$title,
        'slug'=>str_slug($title),
        'description'=>$faker->text($maxNbChars =50),
        'release'=>$faker->year($max = 'now'),
        'date'=>$faker->date($format = 'Y-m-d', $max = 'now'),
        'ticket'=>$faker->word,
        'price'=>$faker->randomNumber(3),
        'country'=>$faker->country,
        'rating'=>$faker->numberBetween(1, 5),
        'genre'=>$faker->name,
        'photo'=>$faker->image('public/storage/images',400,300, null, false),
    ];
});
