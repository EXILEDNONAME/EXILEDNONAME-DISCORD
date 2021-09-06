@extends('layouts.backend.system.index', ['status' => 'true', 'daterange' => 'true'])
@push('title', 'Table Generals')

@push('content-head')
<th> Date Start </th>
<th> Date End </th>
<th> Name </th>
<th> Description </th>
@endpush

@push('content-body')
{ data: 'date_start', searchable: false, width: 1, className: 'text-nowrap' },
{ data: 'date_end', searchable: false, width: 1, className: 'text-nowrap' },
{ data: 'name' },
{ data: 'description' },
@endpush
