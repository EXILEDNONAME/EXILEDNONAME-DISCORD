@extends('layouts.backend.system.index')
@push('title', 'Management Users')

@push('content-head')
<th> Roles </th>
<th> Username </th>
<th> Name </th>
<th> Email </th>
<th> Phone </th>
<th> Created At </th>
@endpush

@push('content-body')
{ data: 'id_roles' },
{ data: 'username' },
{ data: 'name' },
{ data: 'email' },
{ data: 'phone' },
{ data: 'created_at' },
@endpush
