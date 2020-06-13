<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $validateData=$request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'min:6', 'confirmed'
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        return response()->json(['user' =>$user ], 201);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
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
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
       auth()->logout();
        return response()->json(['message' => 'Successfully logged out'],200);
    }
}
