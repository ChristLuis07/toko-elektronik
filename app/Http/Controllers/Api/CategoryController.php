<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function show($slug) {
        $category = Category::where('slug', $slug)->first();

        if(!$category) {
            return response()->json([
                'message' => 'tidak dapat menemukan Category',
            ],404);
        }

        return response()->json($category);
    }
}
