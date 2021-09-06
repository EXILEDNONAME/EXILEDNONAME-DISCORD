@extends('layouts.backend.system.index', ['status' => 'true', 'daterange' => 'true'])
@push('title', 'Table Relations')

@push('content-head')
<th> Relation </th>
<th> Date Start </th>
<th> Date End </th>
<th> Name </th>
<th> Description </th>
@endpush

@push('content-body')
{ data: 'id_generals' },
{ data: 'date_start', searchable: false, width: 1, className: 'text-nowrap' },
{ data: 'date_end', searchable: false, width: 1, className: 'text-nowrap' },
{ data: 'name' },
{ data: 'description' },
@endpush

@push('filter-header')
<div class="col-md-2 my-2 my-md-0">
  <div class="d-flex align-items-center">
    {!! Form::select(NULL, filter_single_relation(), NULL, ['data-column' => 3, 'placeholder' => '- Filter Single Relation -', 'class' => 'form-control filter-single-relation']) !!}
  </div>
</div>
@endpush

@push('filter-function')
d.filter_single_relation = $('#filter_single_relation').val();
@endpush

@push('filter-data')
$('.filter-single-relation').change(function () {
  table.column(3)
  .search( $(this).val() )
  .draw();
});
@endpush
