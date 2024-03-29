<?php

namespace App\Http\Controllers;

use App\Models\General;
use App\Models\Trader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GraficaController extends Controller
{
    public function __construct(){
        $this->middleware('auth.admin');
    }
    
    
    public function index()
    {

        return view('graficas.show');
    }

    public function getTrader(Request $request)
    {
        $traders = General::select()
            ->where('trader_id', $request->id)
            ->whereBetween('fecha', [$request->inicio, $request->fin])
            ->get();
        $tradersNombre = Trader::select()->where('id', $request->id)->get();
        return response(['traders' => $traders, 'tradersNombre' => $tradersNombre]);
    }
}