<div class="row d-flex align-items-center">
    <div class="pagetitle d-flex align-items-center">
        <h1>Prueba de vida</h1>
    </div>
</div>
<hr class="m-0 p-0 mb-2">
@foreach ($traders as $trader)

    @php
        $last_general = DB::table("general")
        ->where("trader_id", "=", $trader->id)
        ->limit(1)
        ->orderBy("id", "desc")
        ->get();

        $secondLast_general = DB::table('general')
        ->where('trader_id', '=', $trader->id)
        ->orderBy('id', 'desc')
        ->skip(1)
        ->take(1)
        ->get();
    @endphp

    @if ($last_general->isEmpty() || $secondLast_general->isEmpty())
        <div class="alert alert-danger l-bg-bad d-flex align-items-center text-uppercase fw-bolder" role="alert">
            <svg class="bi flex-shrink-0 me-2" fill="#fff" role="img" width="24" height="24" aria-label="Warning:">
                <use xlink:href="#exclamation-triangle-fill" />
            </svg>
            <div>
                No hay datos generales del {{ $trader->nombre }}, consulta con sistemas
            </div>
        </div>
    @else
    
        @php
            $diffBalance = $last_general[0]->balance - $secondLast_general[0]->balance;
            if ($diffBalance != 0 && $secondLast_general[0]->balance != 0) {
                $perBalance = $diffBalance / $secondLast_general[0]->balance;
            } else {
                $perBalance = 0;
            }

            $diffEquity = $last_general[0]->equity - $secondLast_general[0]->equity;
            if ($diffEquity != 0 && $secondLast_general[0]->equity != 0) {
                $perEquity = $diffEquity / $secondLast_general[0]->equity;
            } else {
                $perEquity = 0;
            }

            $diffMargin = $last_general[0]->margin - $secondLast_general[0]->margin;
            if ($diffMargin != 0 && $secondLast_general[0]->margin != 0) {
                $perMargin = $diffMargin / $secondLast_general[0]->margin;
            } else {
                $perMargin = 0;
            }

            $diffRisk = $last_general[0]->risk - $secondLast_general[0]->risk;
            if ($diffRisk != 0 && $secondLast_general[0]->risk != 0) {
                $perRisk = $diffRisk / $secondLast_general[0]->risk;
            } else {
                $perRisk = 0;
            }

            $diffProfit = $last_general[0]->profit - $secondLast_general[0]->profit;
            if ($diffProfit != 0 && $secondLast_general[0]->profit != 0) {
                $perProfit = $diffProfit / $secondLast_general[0]->profit;
            } else {
                $perProfit = 0;
            }

            $diffRatio = $last_general[0]->ratio - $secondLast_general[0]->ratio;
            if ($diffRatio != 0 && $secondLast_general[0]->ratio != 0) {
                $perRatio = $diffRatio / $secondLast_general[0]->ratio;
            } else {
                $perRatio = 0;
            }

            $lastDate = Carbon\Carbon::createFromDate($last_general[0]->fecha);
            $now = Carbon\Carbon::now();

            $diff = $lastDate->diffInMinutes($now);

            $operaciones = App\Models\Operacion::where('trader_id', $trader->id)->where('status', 'abierta')->count();

            $operaciones_conflicto = App\Models\Operacion::where('trader_id', $trader->id)->where('status', 'conflicto')->count();

            $operaciones_hijas = App\Models\OperacionHija::where('trader_id', $trader->id)->where('status', 'abierta')->count();

            $operaciones_abiertasMAM = App\Models\OperacionHija::where('trader_id', 99999)->where('status', 'abierta')->count();

            $operaciones_abiertasPOOL = App\Models\OperacionHija::where('trader_id', 99998)->where('status', 'abierta')->count();

            $operacionesHijasHuerfanas = Illuminate\Support\Facades\DB::table('operacion_hija')
                                ->join('operacion', 'operacion.no_operacion', '=', 'operacion_hija.operacion_id')
                                ->select(DB::raw("operacion_hija.status AS statusHija, operacion.status AS statusMadre, operacion_hija.trader_id"))
                                ->get();

            $operaciones_huerfanasMAM = 0;
            $operaciones_huerfanasPOOL = 0;
            foreach ($operacionesHijasHuerfanas as $operacionHijaHuerfana) {
                if ($operacionHijaHuerfana->statusHija == "abierta" && $operacionHijaHuerfana->statusMadre == "cerrada") {
                    if ($operacionHijaHuerfana->trader_id == 99998) {
                        $operaciones_huerfanasPOOL++;
                    }elseif ($operacionHijaHuerfana->trader_id == 99999) {
                        $operaciones_huerfanasMAM++;
                    }
                }
            }

        @endphp
        
        <div class="trader mb-0">
            <div class="title-trader d-flex justify-content-between align-items-center">                
                <div>
                    @if($trader->id == 99998 || $trader->id == 99999)
                        @if($operaciones_abiertasPOOL != $operaciones_abiertasMAM)
                            <span class="badge bg-warning text-dark">
                                Las operaciones POOL y MAM no son iguales
                            </span>
                        @endif
                    @endif
                    @if ($diff > 0)
                        <span class="badge bg-danger">ALERTA: El ??ltimo dato recibido de {{ $trader->nombre }} fue hace m??s de 1 minuto</span>
                    @endif
                </div>
                <div class="mt-1">
                    <h5>
                        ??ltima actualizaci??n: {{ ucfirst(Carbon\Carbon::parse($last_general[0]->fecha)->diffForHumans()) }}
                    </h5>
                </div>
            </div>
            <div class="row d-flex align-items-center">
                <div class="col-xl-2">
                    <div class="card l-bg-blue shadow">
                        <div class="card-statistic-3 p-3">                            
                            <div class="card-icon card-icon-large">
                                <i class="fa-solid fa-hashtag" style="font-size: 50px"></i>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="d-flex align-items-center justify-content-center mb-0 cant-trader">
                                        {{ $trader->nombre }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="card l-bg-blue-bal shadow">
                        <div class="card-statistic-3 p-3">
                            @if ($perBalance == 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-right-arrow-left"></i>
                                </div>
                            @elseif($perBalance < 0) 
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-down"></i>
                                </div>
                            @elseif($perBalance > 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-up"></i>
                                </div>
                            @endif
                            <div class="title-stats text-center">
                                <h5 class="card-title text-light pt-0 pb-0">Balance</h5>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="d-flex align-items-center justify-content-center mb-0 cant-trader fs-6">
                                        {{ number_format($last_general[0]->balance, 2) }}
                                    </h2>
                                </div>
                                {{-- <div class="col-12 text-center">
                                    @if ($perBalance == 0)
                                        <span>{{ number_format($perBalance, 5) }}% 
                                            <i class="fa fa-arrow-right-arrow-left"></i>
                                        </span>
                                    @elseif($perBalance < 0) 
                                        <span>{{ number_format($perBalance, 5) }}% 
                                            <i class="fa fa-arrow-down"></i>
                                        </span>
                                    @elseif($perBalance > 0)
                                        <span>{{ number_format($perBalance, 5) }}% 
                                            <i class="fa fa-arrow-up"></i>
                                        </span>
                                    @endif
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="card l-bg-good shadow">
                        <div class="card-statistic-3 p-3">
                            @if ($perEquity == 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-right-arrow-left"></i>
                                </div>
                            @elseif($perEquity < 0) 
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-down"></i>
                                </div>
                            @elseif($perEquity > 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-up"></i>
                                </div>
                            @endif
                            <div class="title-stats text-center">
                                <h5 class="card-title text-light pt-0 pb-0">Equity</h5>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="d-flex align-items-center justify-content-center mb-0 cant-trader">
                                        {{ number_format($last_general[0]->equity, 2) }}
                                    </h2>
                                </div>
                                {{-- <div class="col-12 text-center">
                                    @if ($perEquity == 0)
                                        <span>{{ number_format($perEquity, 5) }}% 
                                            <i class="fa fa-arrow-right-arrow-left"></i>
                                        </span>
                                    @elseif($perEquity < 0) 
                                        <span>{{ number_format($perEquity, 5) }}% 
                                            <i class="fa fa-arrow-down"></i>
                                        </span>
                                    @elseif($perEquity > 0)
                                        <span>{{ number_format($perEquity, 5) }}% 
                                            <i class="fa fa-arrow-up"></i>
                                        </span>
                                    @endif
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="card 
                    @if ($last_general[0]->margin > 70)
                        l-bg-good
                    @elseif($last_general[0]->margin > 30 && $last_general[0]->margin <= 70)
                        l-bg-middle
                    @elseif($last_general[0]->margin <= 30)
                        l-bg-bad
                    @endif
                    shadow">
                        <div class="card-statistic-3 p-3">
                            @if ($perMargin == 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-right-arrow-left"></i>
                                </div>
                            @elseif($perMargin < 0) 
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-down"></i>
                                </div>
                            @elseif($perMargin > 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-up"></i>
                                </div>
                            @endif
                            <div class="title-stats text-center">
                                <h5 class="card-title text-light pt-0 pb-0">Margin</h5>
                            </div>
                            <div class="row">
                                    <div class="col-12">
                                        <h2 class="d-flex align-items-center justify-content-center mb-0 cant-trader">
                                            {{ $last_general[0]->margin }}
                                        </h2>
                                    </div>
                                {{-- <div class="col-12 text-center">
                                    @if ($perEquity == 0)
                                    <span>{{ number_format($perEquity, 5) }}% 
                                        <i class="fa fa-arrow-right-arrow-left"></i>
                                    </span>
                                    @elseif($perEquity < 0) 
                                        <span>{{ number_format($perEquity, 5) }}% 
                                            <i class="fa fa-arrow-down"></i>
                                        </span>
                                    @elseif($perEquity > 0)
                                        <span>{{ number_format($perEquity, 5) }}% 
                                            <i class="fa fa-arrow-up"></i>
                                        </span>
                                    @endif
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="card l-bg-middle shadow">
                        <div class="card-statistic-3 p-3">
                            @if ($perRisk == 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-right-arrow-left"></i>
                                </div>
                            @elseif($perRisk < 0) 
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-down"></i>
                                </div>
                            @elseif($perRisk > 0)
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-arrow-trend-up"></i>
                                </div>
                            @endif
                            <div class="title-stats text-center">
                                <h5 class="card-title text-light pt-0 pb-0">Risk</h5>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="d-flex align-items-center justify-content-center mb-0 cant-trader">
                                        {{ number_format($last_general[0]->risk, 2) }}
                                    </h2>
                                </div>
                                {{-- <div class="col-12 text-center">
                                    @if ($perRisk == 0)
                                        <span>{{ number_format($perRisk, 5) }}% 
                                            <i class="fa fa-arrow-right-arrow-left"></i>
                                        </span>
                                    @elseif($perRisk < 0) 
                                        <span>{{ number_format($perRisk, 5) }}% 
                                            <i class="fa fa-arrow-down"></i>
                                        </span>
                                    @elseif($perRisk > 0)
                                        <span>{{ number_format($perRisk, 5) }}% 
                                            <i class="fa fa-arrow-up"></i>
                                        </span>
                                    @endif
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="card l-bg-up shadow">
                        <div class="card-statistic-3 p-3">
                            <div class="card-icon card-icon-large" style="font-size: 95px">
                                <i class="fas fa-arrow-trend-up"></i>
                            </div>
                            <div class="title-stats text-center">
                                <h5 class="card-title text-dark pt-0 pb-0">Operaciones</h5>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center ">
                                    <span>Abiertas: 
                                    @if ($trader->id == 99998)
                                            {{ $operaciones_abiertasPOOL }}
                                        </span>
                                        <br>
                                        <span>
                                            Hu??rfanas:
                                            {{ $operaciones_huerfanasPOOL }}
                                        </span>
                                    @elseif ($trader->id == 99999)
                                        {{ $operaciones_abiertasMAM }}
                                        <br>
                                        <span>
                                            Hu??rfanas:
                                            {{ $operaciones_huerfanasMAM }}
                                        </span>
                                    @else
                                        {{ $operaciones }}
                                    </span>
                                    @endif
                                    <br>
                                    <span>Conflicto: {{ $operaciones_conflicto }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
@endforeach