<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class AuthController extends Controller
{
 public function register(Request $request) {
 $user = User::create([
   'name' => $request->name,
   'email' => $request->email,
   'password' => bcrypt($request->password)
  ]);
  if($user){
   return response()->json([
    'message'=>'good to go'
    ],200);
  }
 }
}