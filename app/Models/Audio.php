<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Audio extends Model
{
    protected $fillable = [
        'filename',
    ];



    public function getFilePathAttribute()
    {
        $path = public_path('audio_files');

        return $path . '/' . $this->filename;
    }

    protected $casts = [
        'audio_files' => 'array',
    ];
}
