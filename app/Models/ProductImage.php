<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductImage extends Model
{
    protected $fillable = [
        'product_id',
        'photo'
    ];

    public function photos(): HasMany
    {
    return $this->hasMany(ProductImage::class);
    }
}
