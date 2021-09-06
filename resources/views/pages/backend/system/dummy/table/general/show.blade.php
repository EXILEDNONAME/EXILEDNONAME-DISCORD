@extends('layouts.backend.system.show', ['status' => 'true'])
@push('title', 'Table Generals')

@push('content-body')
<div class="table-responsive">
  <table width="100%" class="table table-bordered table-hover table-checkable" id="exilednoname">
    <tr>
      <td class="align-middle font-weight-bold"> Name </td>
      <td class="align-middle"> {!! $data->name !!} </td>
    </tr>
    <tr>
      <td class="align-middle font-weight-bold"> Description </td>
      <td class="align-middle"> {!! $data->description !!} </td>
    </tr>
    @include('includes.partial.datatable.show')
  </table>
</div>
@endpush
