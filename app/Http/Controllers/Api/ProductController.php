<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::with(['category', 'brand'])->get();
    }

    public function show($slug) {
        $product = Product::with(['category', 'brand'])->where('slug', $slug)->first();

        if(!$product) {
            return response()->json([
                'message' => 'Product tidak ditemukan',
            ], 404);
        }

        return response()->json($product);
    }
}
