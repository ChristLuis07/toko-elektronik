<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index() {
        return Brand::all();
    }

    public function show($slug) {
        $brand = Brand::where('slug', $slug)->first();

        if(!$brand) {
            return response()->json([
                'message' => 'tidak dapat menemukan brand',
            ],404);
        }
        
        return response()->json($brand);
    }
}
