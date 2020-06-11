<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Film;
use Faker\Generator as Faker;

$factory->define(Film::class, function (Faker $faker) {
	for ($i = 0; $i < 3; $i++) {
  		$genre= $faker->name;
	};
    return [
       	'name'=>$faker->name,
        'description'=>$faker->text($maxNbChars =50),
        'release'=>$faker->year($max = 'now'),
        'date'=>$faker->date($format = 'Y-m-d', $max = 'now'),
        'ticket'=>$faker->word,
        'price'=>$faker->randomNumber(3),
        'country'=>$faker->country,
        'rating'=>$faker->numberBetween(1, 5),
        'genre'=>$genre,
        'photo'=>$faker->image('public/storage/images',640,480, null, false),
    ];
});
