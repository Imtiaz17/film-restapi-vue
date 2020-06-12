<?php

namespace App;
use App\Comment;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{

	public function  getRouteKeyName()
    {
        return 'slug';
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
