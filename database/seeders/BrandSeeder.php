<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = [
            [
                'name' => 'Apple',
                'icon' => 'apple-icon',
            ],
            [
                'name' => 'Samsung',
                'icon' => 'samsung-icon',
            ]
        ];
            foreach ($brands as $brand) {
                Brand::create($brand);
            }
    }
}
