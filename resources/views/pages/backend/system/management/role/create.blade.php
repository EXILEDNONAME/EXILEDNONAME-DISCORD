@extends('layouts.backend.system.create')
@push('title', 'Management Roles')

@push('content-body')
<form method="POST" id="form-exilednoname" action="{{ URL::current() }}/../" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data">
  {{ csrf_field() }}

  <input class="form-control" name="created_by" type="hidden" value="{{ Auth::User()->id }}">
  @include($path . '.form', ['formMode' => 'create', 'status' => 'true'])
</form>
@endpush
