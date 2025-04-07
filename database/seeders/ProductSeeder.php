<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoryLaptop = Category::where('name', 'Laptops')->first();
        $brandLaptop = Brand::where('name', 'Apple')->first();

        $categoryHandphone = Category::where('name', 'Phones')->first();
        $brandHandpone = Brand::where('name', 'Samsung')->first();

        $products = [
            [
                'category_id' => $categoryLaptop->id,
                'brand_id' => $brandLaptop->id,
                'name' => 'Apple MacBook Air',
                'about' => 'Laptop powerful dengan chip Apple M3.',
                'image' => 'apple-macbook-air.jpg',
                'price' => 32,
            ],
            [
                'category_id' => $categoryHandphone->id,
                'brand_id' => $brandHandpone->id,
                'name' => 'Samsung Galaxy S21',
                'about' => 'Smartphone terbaru dari Samsung.',
                'image' => 'samsung-galaxy-s21.jpg',
                'price' => 20,
            ]
            ];
            foreach ($products as $product) {
                Product::create($product);
            }
    }
}
