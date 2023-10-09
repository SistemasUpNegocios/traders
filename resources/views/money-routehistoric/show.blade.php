@extends('index')

@section('css')
    <style>
        #chartContainer {
            width: 90%;
            height: 400px;
            /* Ajusta la altura según tus necesidades */
            margin: 0px auto;
        }
    </style>
@endsection

@section('title')
    Money Route Historical
@endsection

@section('content')
    <div class="pagetitle">
        <h1>Money Route Historical</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ url('/admin/dashboard') }}">Panel de control</a></li>
                <li class="breadcrumb-item active">Money Route Historical</li>
            </ol>
        </nav>
    </div>

    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body mt-3">
                        <form class="row d-flex align-items-center" id="moneyRouteHistoric">
                            <div cla ss="col-md-4 col-12">
                                <div class="form-floating mb-3 me-3">
                                    <input type="datetime-local" class="form-control" id="fechaDesdeInput" required>
                                    <label for="fechaDesdeInput">A partir de:</label>
                                </div>
                            </div>

                            <div class="col-md-3 col-12">
                                <button class="btn btn-primary mb-3" id="Moneybtn">Generar información</button>
                            </div>
                        </form>
                        <div id="spinner" class="text-center"></div>
                        <div id="chartContainer" style=""></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@section('preloader')
    <div id="loader" class="loader">
        <h1></h1>
        <span></span>
        <span></span>
        <span></span>
    </div>
@endsection

@section('footer')
    <footer id="footer" class="footer">
        <div class="copyright" id="copyright">
        </div>
        <div class="credits">
            Todos los derechos reservados
        </div>
    </footer>
@endsection

@section('script')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.js"></script>
    <script type="text/javascript" src="https://cdn.canvasjs.com/canvasjs.min.js"></script>

    <script src="{{ asset('/js/moneyRouteHistoric.js') }}"></script>
@endsection
