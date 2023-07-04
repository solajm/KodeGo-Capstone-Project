<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
    ];

    public function collaborators()
    {
        return $this->belongsToMany(User::class, 'collaborators')->withTimestamps();
    }

    public function audioFiles()
    {
        return $this->hasMany(AudioFile::class);
    }
}
