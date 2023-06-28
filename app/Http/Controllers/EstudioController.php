<?php

namespace App\Http\Controllers;

use App\Models\General;
use App\Models\Trader;
use App\Models\Reporte;
use App\Models\Box;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \PDF;


class EstudioController extends Controller
{

    public function index(Request $request)
    {
        return view('estudio.show');
    }

      
    public function getInfoEstudio(Request $request)
    {
        $tradersNombre = DB::table('traders_data')->select('id', 'Signal', 'Balance')->where('id', $request->id)->first();
        $monedas = array("EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD", "USDCHF", "USDJPY", "EURGBP", "EURAUD", "EURNZD", "GBPAUD", "GBPNZD", "AUDNZD", "EURCAD", "EURCHF", "EURJPY", "GBPCAD", "GBPCHF", "GBPJPY", "AUDCAD", "AUDCHF", "AUDJPY", "NZDCAD", "NZDCHF", "NZDJPY", "CADCHF", "CADJPY", "CHFJPY");

        $tr = $request->tr;
        $variant = $request->variant;
        $test = $request->test;

        $fecha_inicio = \Carbon\Carbon::parse($request->fecha_inicio)->format('Y-m-d H:i:s');
        $fecha_fin = \Carbon\Carbon::parse($request->fecha_fin)->format('Y-m-d H:i:s');


        $data = array(
            "monedas" => $monedas,
            "tr" => $tr,
            "variant" => $variant,
            "test" => $test,
        );


        return response()->view('estudio.table', $data, 200);
    }


    public function getPDF(Request $request)
    {

        $tradersNombre = DB::table('traders_data')->select('id', 'Signal', 'Balance')->where('id', $request->id)->first();
        $monedas = array("EURUSD", "GBPUSD", "AUDUSD", "NZDUSD", "USDCAD", "USDCHF", "USDJPY", "EURGBP", "EURAUD", "EURNZD", "GBPAUD", "GBPNZD", "AUDNZD", "EURCAD", "EURCHF", "EURJPY", "GBPCAD", "GBPCHF", "GBPJPY", "AUDCAD", "AUDCHF", "AUDJPY", "NZDCAD", "NZDCHF", "NZDJPY", "CADCHF", "CADJPY", "CHFJPY");

        $tr = $request->tr;
        $variant = $request->variant;

        $fecha_inicio = \Carbon\Carbon::parse($request->fecha_inicio)->format('Y-m-d H:i:s');
        $fecha_fin = \Carbon\Carbon::parse($request->fecha_fin)->format('Y-m-d H:i:s');


        $data = array(
            "monedas" => $monedas,
            "tr" => $tr,
            "variant" => $variant,
        );
        
        ini_set('max_execution_time', 180); //3 minutes

        $pdf = PDF::loadView('estudio.imprimir', $data)->setPaper('a4', 'landscape');
        return $pdf->stream('estudio-analysis.pdf');

    }

    public function deleteReporte(Request $request)
    {
        if ($request->ajax()) {
            $reporte_id = $request->id;

            Reporte::destroy($request->id);
            
        }
    }
}
