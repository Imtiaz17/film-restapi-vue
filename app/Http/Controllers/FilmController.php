<?php

namespace App\Http\Controllers;

use App\Film;
use Illuminate\Http\Request;
use App\Http\Resources\FilmResource;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return FilmResource::collection(Film::orderBy('id', 'DESC')->paginate(3));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $film= new Film();
        $film->name=$request->name;
        $film->slug=str_slug($request->name);
        $film->description=$request->description;
        $film->release=$request->release;
        $film->date=date("Y-m-d", strtotime($request->date));
        $film->rating=$request->rating;
        $film->ticket=$request->ticket;
        $film->price=$request->price;
        $film->country=$request->country;
        $genre = $request->genre;
        $film->genre=implode(",", $genre);
        $photo=$request->photo;
        $imgname = time() . '.' . explode('/', explode(':', substr($photo, 0, strpos($photo, ';')))[1])[1];
          \Image::make($photo)->resize(650, 275, function ($c) {
                    $c->aspectRatio();
                    $c->upsize();
                })->save(public_path('storage/images/') . $imgname);
        $film->photo=$imgname;
        $film->save();
        return new FilmResource($film);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function show(Film $film)
    {
        return new FilmResource($film);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function edit(Film $film)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Film $film)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Film  $film
     * @return \Illuminate\Http\Response
     */
    public function destroy(Film $film)
    {
        //
    }
}
