<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'comment'=>$this->comment,
            'user_id'=>$this->user_id,
            'film_id'=>$this->film_id,
        ];
    }
}
