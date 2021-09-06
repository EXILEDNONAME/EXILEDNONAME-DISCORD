@extends('layouts.backend.blank')
@push('title', 'Statistics')

@push('container')
<div class="row">
  <div class="col-xl-12">
    <div class="card card-custom gutter-b card-sticky" data-card="true" id="kt_page_sticky_card">
      <div class="card-header">
        <div class="card-title">
          <h3 class="text-dark font-weight-bold"> Statistics </h3>
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
                  @foreach($log->menu() as $levelKey => $item)
                  <th> {!! $item['icon'] !!} {{ $item['name'] }} {{ $item['count'] }} </th>
                  @endforeach
                </tr>
              </thead>
            </table>
          </div>
          <div class="col-xl-12">
            <div class="panel panel-default">
              <div class="panel-heading">
                <div class="group-btns pull-right">
                  <a href="{{ route('log-viewer::logs.download', [$log->date]) }}" class="btn btn-xs btn-success">
                    <i class="fa fa-download"></i> DOWNLOAD
                  </a>
                  <a href="#delete-log-modal" class="btn btn-xs btn-danger" data-toggle="modal">
                    <i class="fa fa-trash-o"></i> DELETE
                  </a>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-condensed">
                  <thead>
                    <tr>
                      <td>Logs :</td>
                      <td colspan="5">[{{ \Carbon\Carbon::parse($log->date)->format('l, d F Y') }}]</td>
                    </tr>
                    <tr>
                      <td>File path :</td>
                      <td colspan="5">{{ $log->getPath() }}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Log entries : </td>
                      <td> {{ $entries->total() }} </td>
                      <td> Size : </td>
                      <td> {{ $log->size() }} </td>
                      <td> Created at : </td>
                      <td> {{ $log->createdAt() }} </td>
                      <td> Updated at :</td>
                      <td> {{ $log->updatedAt() }} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="panel-footer">
                {{-- Search --}}
                <form action="{{ route('log-viewer::logs.search', [$log->date, $level]) }}" method="GET">
                  <div class="form-group">
                    <div class="input-group">
                      <input id="query" name="query" class="form-control" value="{{ $query }}" placeholder="Type here to search">
                      <span class="input-group-btn">
                        @unless (is_null($query))
                        <a href="{{ route('log-viewer::logs.show', [$log->date]) }}" class="btn btn-default">
                          ({{ $entries->count() }} results) <span class="glyphicon glyphicon-remove"></span>
                        </a>
                        @endunless
                        <button id="search-btn" class="btn btn-primary">
                          <span class="fa fa-search"></span>
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {{-- Log Entries --}}
            <div class="panel panel-default">
              @if ($entries->hasPages())
              <div class="panel-heading">
                {{ $entries->appends(compact('query'))->render() }}

                <span class="pull-right">
                  Page {{ $entries->currentPage() }} of {{ $entries->lastPage() }}
                </span>
              </div>
              @endif

              <div class="table-responsive">
                <table id="entries" class="table table-condensed">
                  <thead>
                    <tr>
                      <th style="width: 120px;">Level</th>
                      <th style="width: 65px;">Time</th>
                      <th>Header</th>
                      <th class="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    @forelse($entries as $key => $entry)
                    <tr>
                      <td> {!! $entry->level() !!} </td>
                      <td> {{ $entry->datetime->format('H:i:s') }} </td>
                      <td>
                        <p>{{ $entry->header }}</p>
                      </td>
                      <td class="text-right">
                        @if ($entry->hasStack())
                        <a class="btn btn-xs btn-default" role="button" data-toggle="collapse"
                        href="#log-stack-{{ $key }}" aria-expanded="false" aria-controls="log-stack-{{ $key }}">
                        <i class="fa fa-toggle-on"></i> Stack
                      </a>
                      @endif

                      @if ($entry->hasContext())
                      <a class="btn btn-xs btn-default" role="button" data-toggle="collapse"
                      href="#log-context-{{ $key }}" aria-expanded="false" aria-controls="log-context-{{ $key }}">
                      <i class="fa fa-toggle-on"></i> Context
                    </a>
                    @endif
                  </td>
                </tr>
                @if ($entry->hasStack() || $entry->hasContext())
                <tr>
                  <td colspan="5" class="stack">
                    @if ($entry->hasStack())
                    <div class="stack-content collapse" id="log-stack-{{ $key }}">
                      {!! $entry->stack() !!}
                    </div>
                    @endif

                    @if ($entry->hasContext())
                    <div class="stack-content collapse" id="log-context-{{ $key }}">
                      <pre>{{ $entry->context() }}</pre>
                    </div>
                    @endif
                  </td>
                </tr>
                @endif
                @empty
                <tr>
                  <td colspan="5" class="text-center">
                    <span class="label label-default">{{ trans('log-viewer::general.empty-logs') }}</span>
                  </td>
                </tr>
                @endforelse
              </tbody>
            </table>
          </div>

          @if ($entries->hasPages())
          <div class="panel-footer">
            {!! $entries->appends(compact('query'))->render() !!}

            <span class="pull-right">
              Page {{ $entries->currentPage() }} of {{ $entries->lastPage() }}
            </span>
          </div>
          @endif
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div id="delete-log-modal" class="modal fade">
  <div class="modal-dialog">
    <form id="delete-log-form" action="{{ route('log-viewer::logs.delete') }}" method="POST">
      <input type="hidden" name="_method" value="DELETE">
      <input type="hidden" name="_token" value="{{ csrf_token() }}">
      <input type="hidden" name="date" value="{{ $log->date }}">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">DELETE LOG FILE</h4>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to <span class="text-danger font-weight-bold">DELETE</span> this log file <span class="text-primary"> {{ \Carbon\Carbon::parse($log->date)->format('l, d F Y') }} </span> ?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-default pull-left" data-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-sm btn-danger" data-loading-text="Loading&hellip;">DELETE FILE</button>
        </div>
      </div>
    </form>
  </div>
</div>
@endpush

@push('js')
<script>
$(function () {
  var deleteLogModal = $('div#delete-log-modal'),
  deleteLogForm  = $('form#delete-log-form'),
  submitBtn      = deleteLogForm.find('button[type=submit]');

  deleteLogForm.on('submit', function(event) {
    event.preventDefault();
    submitBtn.button('loading');

    $.ajax({
      url:      $(this).attr('action'),
      type:     $(this).attr('method'),
      dataType: 'json',
      data:     $(this).serialize(),
      success: function(data) {
        submitBtn.button('reset');
        if (data.result === 'success') {
          deleteLogModal.modal('hide');
          location.replace("{{ route('log-viewer::logs.list') }}");
        }
        else {
          alert('OOPS ! This is a lack of coffee exception !')
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        alert('AJAX ERROR ! Check the console !');
        console.error(errorThrown);
        submitBtn.button('reset');
      }
    });

    return false;
  });

  @unless (empty(log_styler()->toHighlight()))
  @php
  $htmlHighlight = version_compare(PHP_VERSION, '7.4.0') >= 0
  ? join('|', log_styler()->toHighlight())
  : join(log_styler()->toHighlight(), '|');
  @endphp
  $('.stack-content').each(function() {
    var $this = $(this);
    var html = $this.html().trim()
    .replace(/({!! $htmlHighlight !!})/gm, '<strong>$1</strong>');

    $this.html(html);
  });
  @endunless
});
</script>
@endpush
