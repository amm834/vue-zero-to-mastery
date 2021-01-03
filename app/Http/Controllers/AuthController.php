<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

 public function register(Request $request) {
  $user = User::create([
   'name' => $request->name,
   'email' => $request->email,
   'password' => Hash::make($request->password)
  ]);
  if ($user) {
   return response()->json([
    'message' => 'good to go'
   ], 200);
  }
 }

 public function login(Request $request) {
  $user = User::where('email', $request->email)->first();
  if (!$user) {
   return response()->json([
    'message' => 'Auth Fail!'], 401);
  }
  $authUser = Auth::attempt([
   'email' => $request->email,
   'password' => Hash::check($request->password, $user->password)
  ]);
  if ($authUser) {
   // Login Success
   if ($user->role == 'admin') {
    $tokenData = $user->createToken('My Token', ['do_anything']);
   } else {
    $tokenData = $user->createToken('My Token', ['can_create']);
   }
   if ($tokenData) {
    return response()->json([
     'user' => $user,
     'token' => $tokenData->accessToken,
     'token_type' => 'bearer',
     'token_scope' => $tokenData->token->scopes[0]
    ], 200);
   }
  }

 }

 public function logout(Request $request) {
  $token = $request->user()->token();
  $token->revoke();
  return response()->json([
   'message'=>'logout success'
   ]);
 }
}