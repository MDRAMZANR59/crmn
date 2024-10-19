<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;
    protected $fillable=['country', 'state', 'schedule', 'departure_time', 'arrival_time', 'vehicle_id', 'fare'];
}
