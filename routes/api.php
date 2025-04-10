<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





//home
Route::get('/', [HomeController::class, 'index']);

// Authentikasi Route
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');

// Api Category
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/category/{slug}', [CategoryController::class, 'show']);

// Api Brand
Route::get('/brands', [BrandController::class, 'index']);
Route::get('/brand/{slug}', [BrandController::class, 'show']);

// Api Product
Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/{slug}', [ProductController::class, 'show']);

