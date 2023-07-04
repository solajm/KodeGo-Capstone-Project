<?php

use App\Http\Controllers\AudioController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/projects/duplicate/{id}', [ProjectController::class, 'duplicate'])->name('projects.duplicate');
    Route::delete('/projects/delete/{id}', [ProjectController::class, 'delete'])->name('projects.delete');
    Route::post('/projects/share/{id}', [ProjectController::class, 'share'])->name('projects.share');
    Route::get('/projects/create', [ProjectController::class, 'showCreateForm'])->name('projects.create');
    Route::post('/projects/create', [ProjectController::class, 'create'])->name('projects.store');
    Route::get('/projects/rename/{id}', [ProjectController::class, 'rename'])->name('projects.rename');
    Route::put('/projects/rename/{id}', [ProjectController::class, 'updateName'])->name('projects.updateName');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/projects/{id}', [ProjectController::class, 'show'])->name('projects.show');
    Route::post('/projects/{id}/audio', [ProjectController::class, 'addAudio'])->name('project.addAudio');
    Route::post('/upload-audio/{id}', [AudioController::class, 'uploadAudio'])->name('upload.audio');
});
