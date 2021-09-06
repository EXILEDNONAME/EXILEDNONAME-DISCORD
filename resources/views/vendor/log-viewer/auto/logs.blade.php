@extends('layouts.backend.blank')
@push('title', 'Statistics')

@push('container')
<div class="row">
  <div class="col-xl-12">
    <div class="card card-custom gutter-b card-sticky" data-card="true" id="kt_page_sticky_card">
      <div class="card-header">
        <div class="card-title">
          <h3 class="text-dark font-weight-bold"> @stack('title') </h3>
        </div>
        <div class="card-toolbar">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link {{ (request()->is('dashboard/statistics')) ? 'active' : '' }}" href="/dashboard/statistics">
                <span class="nav-icon">
                  <i class="flaticon2-chat-1"></i>
                </span>
                <span class="nav-text"> Main </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link {{ (request()->is('dashboard/statistics/logs*')) ? 'active' : '' }}" href="/dashboard/statistics/logs">
                <span class="nav-icon">
                  <i class="flaticon2-layers-1"></i>
                </span>
                <span class="nav-text"> Logs </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="table-responsive">
            <table class="table table-condensed table-hover table-stats">
              <thead>
                <tr>
                  @foreach($headers as $key => $header)
                  <th class="{{ $key == 'date' ? 'text-left' : 'text-center' }}">
                    @if ($key == 'date') {{ $header }}
                    @else <span class="level level-{{ $key }}"> {{ log_styler()->icon($key) }} {{ $header }} </span>
                    @endif
                  </th>
                  @endforeach
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @forelse($rows as $date => $row)
                <tr>
                  @foreach($row as $key => $value)
                  <td class="{{ $key == 'date' ? 'text-left' : 'text-center' }}">
                    @if ($key == 'date')
                    {{ \Carbon\Carbon::parse($value)->format('l, d F Y') }}
                    @elseif ($value == 0)
                    <span class="level level-empty">{{ $value }}</span>
                    @else
                    <a href="{{ route('log-viewer::logs.filter', [$date, $key]) }}">
                      <span class="level level-{{ $key }} text-info font-weight-bolder"><ins>{{ $value }}</ins></span>
                    </a>
                    @endif
                  </td>
                  @endforeach
                  <td class="text-right">
                    <a href="{{ route('log-viewer::logs.show', [$date]) }}" data-toggle="tooltip" title="" data-original-title="Details"><span class="navi-icon mr-2"><i class="flaticon2-expand"></i></span></a>
                    <a href="{{ route('log-viewer::logs.download', [$date]) }}" data-toggle="tooltip" title="" data-original-title="Download"><span class="navi-icon"><i class="flaticon-download-1"></i></span></a>
                  </td>
                </tr>
                @empty
                <tr>
                  <td colspan="11" class="text-center">
                    <span class="label label-default">{{ trans('log-viewer::general.empty-logs') }}</span>
                  </td>
                </tr>
                @endforelse
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endpush
