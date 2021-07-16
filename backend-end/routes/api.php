<?php

use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register',[UserController::class, 'register'])->name('register');

Route::prefix('/user')->group(function(){
    Route::post('/login',[LoginController::class, 'login']);
    Route::middleware('auth:api')->get('/all',[UserController::class, 'index']);
});
// Route::resource('lessons', 'LessonController')->except(['create', 'edit']);