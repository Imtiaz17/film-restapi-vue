<?php

namespace App;
use App\Film;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
   public function question()
    {
        return $this->belongsTo(Film::class);
    }
}
