<?php

Route::get('/','HomeController@index')->name('home');
Route::get('/{any}', 'HomeController@index')->where('any', '.*');


