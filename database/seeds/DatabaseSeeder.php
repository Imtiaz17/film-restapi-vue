<?php

use Illuminate\Database\Seeder;
use App\Film;
use App\User;
use App\Comment;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //factory(User::class,3)->create();
        factory(Film::class,6)->create()->each(function($film){
            return $film->comments()->save(factory(Comment::class)->make());
        });

    }
}
