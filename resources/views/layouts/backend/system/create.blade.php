@extends('layouts.backend.default')

@push('container')
<div class="row">
  <div class="col-xl-12">
    <div class="card card-custom gutter-b card-sticky" data-card="true" id="kt_page_sticky_card">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label"> {{ trans('default.page.create') }} </h3>
        </div>
        <div class="card-toolbar">
          <a href="{{ URL::previous() }}" class="btn btn-outline-primary font-weight-bolder mr-2">
            <i class="ki ki-long-arrow-back icon-xs"></i>
            Back
          </a>
          <div class="btn-group">
            <button type="submit" class="btn btn-outline-primary" form="form-exilednoname">
              <i class="flaticon2-paperplane"></i> <span class="font-weight-bolder"> Save </span>
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        @stack('content-body')
      </div>
    </div>
  </div>
</div>
@endpush

@push('js')
<script src="/assets/backend/plugins/custom/tinymce/tinymce.bundle.js?v=7.0.5"></script>
<script src="/assets/backend/js/pages/crud/forms/editors/tinymce.js?v=7.0.5"></script>
<script src="/assets/backend/js/pages/crud/forms/widgets/bootstrap-datetimepicker.js"></script>
@endpush
