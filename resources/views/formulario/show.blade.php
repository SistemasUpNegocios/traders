@extends('index')

@section('css')
<link rel="stylesheet" href="https://cdn.datatables.net/1.11.4/css/dataTables.bootstrap5.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.9/css/responsive.bootstrap5.min.css">
@endsection

@section('title') Formulario @endsection

@section('content')
<div class="pagetitle">
    <h1>Formulario</h1>
    <nav>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="{{ url('/admin/dashboard') }}">Panel de control</a></li>
            <li class="breadcrumb-item active">Formulario</li>
        </ol>
    </nav>
</div>

<section class="section">
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body mt-3">
                        <table class="table table-striped table-bordered nowrap" id="formulario">
                            <thead class="text-center">
                                <tr>
                                    <th data-priority="0" scope="col">ID</th>
                                    <th data-priority="0" scope="col">Moneda</th>
                                    <th data-priority="0" scope="col">Precio</th>
                                    <th data-priority="0" scope="col">SL</th>
                                    <th data-priority="0" scope="col">Compra/Venta</th>
                                    <th data-priority="0" scope="col">Fecha y hora</th>
                                </tr>
                            </thead>
                            <tbody class="text-center" style="vertical-align: middle"></tbody>
                        </table>
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
<script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.11.4/js/dataTables.bootstrap5.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.9/js/dataTables.responsive.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.9/js/responsive.bootstrap5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="{{ asset('/js/formulario.js') }}"></script>
@endsection