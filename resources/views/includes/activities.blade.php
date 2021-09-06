<div class="row">

  <div class="col-xl-4">
    <div class="card card-custom gutter-b" data-card="true" id="kt_card_3">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label"> My Activity </h3>
        </div>
        <div class="card-toolbar">
          <a class="btn btn-sm btn-icon btn-clean btn-light-md" data-card-tool="toggle"><i class="fas fa-caret-down"></i></a>
        </div>
      </div>
      <div class="card-body">
        <div class="example-preview">
          <div class="timeline timeline-2">
            <div class="timeline-bar"></div>

            @php $activity = activities($model)->take(5); @endphp
            @if (!empty($activity) && !empty($activity->count()))
            @foreach($activity as $item)
            <div class="timeline-item">
              @foreach($item['properties'] as $data_object)
              @if ($item->description == 'created')
              <span class="timeline-badge bg-success"></span>
              <div class="timeline-content justify-content-between">
                <span class="mr-3">
                  @if (!empty($item->causer->name))
                  @if (!empty($data_object['name']))
                  <span class="text-muted"> {{ $item->created_at->diffForHumans() }}, {{ $item->causer->name }} </span><br>
                  Created New Item <b>{{ $data_object['name'] }}</b>
                  @else
                  <span class="text-muted"> {{ $item->created_at->diffForHumans() }}, {{ $item->causer->name }} </span><br>
                  Created New Item
                  @endif
                  @else
                  <s> User Not Found </s>
                  @endif
                </span>
              </div>
              @endif
              @endforeach
              <!-- @if ($item->description == 'updated')
              <span class="timeline-badge bg-warning"></span>
              <div class="timeline-content justify-content-between">
                <span class="mr-3">
                  <span class="text-muted"> {{ $item->created_at->diffForHumans() }}, {{ $item->causer->name }} </span><br>
                  @if (!empty($item->causer->name))
                  Updated Item <b>{{ $item['properties']['old']['name'] }}</b> to <b>{{ $item['properties']['attributes']['name'] }}</b>
                  @else
                  <s> User Not Found </s>
                  @endif
                </span>
              </div>
              @endif -->
              @foreach($item['properties'] as $data_object)
              @if ($item->description == 'deleted')
              <span class="timeline-badge bg-danger"></span>
              <div class="timeline-content justify-content-between">
                <span class="mr-3">
                  <span class="text-muted"> {{ $item->created_at->diffForHumans() }}, {{ $item->causer->name }} </span><br>

                  @if (!empty($item->causer->name))
                  @if (!empty($data_object['name']))
                  Deleted Item <b>{{ $data_object['name'] }}</b>
                  @else
                  Deleted Item
                  @endif
                  @else
                  <s> User Not Found </s>
                  @endif

                </span>
              </div>
              @endif
              @endforeach
            </div>
            @endforeach
            @else
            <span class="text-muted"> No Recent Activities ... </span>
            @endif

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-8">
    <div class="card card-custom gutter-b" data-card="true" id="kt_card_3">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label"> Traffics </h3>
        </div>
        <div class="card-toolbar">
          <a class="btn btn-sm btn-icon btn-clean btn-light-md" data-card-tool="toggle"><i class="fas fa-caret-down"></i></a>
        </div>
      </div>
      <div class="card-body">
        <!-- <div id="chart"></div> -->
        <div id="chart_1"></div>
      </div>
    </div>
  </div>

</div>
