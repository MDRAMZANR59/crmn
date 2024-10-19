<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class flight extends Model
{
    use HasFactory;
    protected $fillable=['airline_id', 'class', 'trip_type', 'person', 'departure_place', 'arrival_place', 'departure_time',  'arrival_time', 'transit_time', 'is_complementary_food', 'baggage_allowance'];
}
