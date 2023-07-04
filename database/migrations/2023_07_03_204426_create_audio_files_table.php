<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAudioFilesTable extends Migration
{
    public function up()
    {
        Schema::create('audio_files', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('project_id');
            $table->string('src');
            $table->string('name');
            $table->foreign('project_id')->references('id')->on('projects');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('audio_files');
    }
}
