<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Brand extends Model
{

    protected $fillable = [
        'name',
        'slug',
        'icon',
    ];

    public function setNameAttribute($value) 
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = str($value)->slug();
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
