<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
     public function login(Request $request)
    {

        $credentials=$request->validate([
        'email'=>'required',
        'password'=>'required'
    	]);
        
        if(!auth()->attempt($credentials)){
            return response()->json(['message' => 'Unauthorized'], 422);
        }

         $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken('user-token')->plainTextToken;
    }
}
