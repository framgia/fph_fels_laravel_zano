<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $req)
    {
        
        
        $req->validate([
            'fname'=>'required',
            'lname'=>'required',
            'email'=>'required',
            'password'=>'required',
            'language'=>'required',
            'gender'=>'required',
            'filename'=>'required|mimes:jpg,png,jpeg|max:5048'
        ]);
        $fileNames = $req->file('filename')->store('images');
        $user = User::create([
            'fname'=>$req->input('fname'),
            'lname'=>$req->input('lname'),
            'email'=>$req->input('email'),
            'password' => Hash::make($req['password']),
            'language'=>$req->input('language'),
            'gender'=>$req->input('gender'),
            'filename'=>$fileNames
        ]);
        $user->save();
        return $user;
    }
    public function index()
    {
        return User::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
