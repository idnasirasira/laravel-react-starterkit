<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::all();

        return Inertia::render('app/users/page', [
            'users' => $users,
        ]);
    }
}
