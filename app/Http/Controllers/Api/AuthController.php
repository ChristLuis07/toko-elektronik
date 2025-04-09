<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'photo' => 'required|image|max:2048',
        ]);

        $photoPath = null;
        if($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('User','public');
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'photo' => $photoPath,
        ]);

        return response()->json([
            'message' => 'User Berhasil Dibuat',
            'user' => $user,
        ], 201);
    }
}
