<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name'=>$this->name,
            'slug'=>str_slug($this->name,'-'),
            'description'=>$this->description,
            'release'=>$this->release,
            'date'=>$this->date,
            'rating'=>$this->rating,
            'ticket'=>$this->ticket,
            'country'=>$this->country,
            'genre'=>$this->genre,
            'image'=>asset('storage/images/' . $this->photo),
            'id'=>$this->id,
        ];
    }
}
