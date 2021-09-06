@extends('layouts.backend.blank')
@push('title', Auth::user()->name)

@push('container')
<div class="row">
  <div class="col-xl-12">
    <div class="card card-custom gutter-b card-sticky" data-card="true" id="kt_page_sticky_card">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label"> {{ trans('default.label.change-password') }} </h3>
        </div>
        <div class="card-toolbar">
          <button type="submit" class="nav-text btn btn-icon btn-outline-primary mr-5" form="form-exilednoname">
            <i class="fas fa-save"></i>
          </button>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link {{ (request()->is('dashboard/profile/account-information')) ? 'active' : '' }}" href="/dashboard/profile">
                <span class="nav-icon">
                  <i class="flaticon2-chat-1"></i>
                </span>
                <span class="nav-text"> {{ trans('default.label.account-information') }} </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link {{ (request()->is('dashboard/profile/change-password*')) ? 'active' : '' }}" href="/dashboard/profile/change-password">
                <span class="nav-icon">
                  <i class="flaticon-lock"></i>
                </span>
                <span class="nav-text"> {{ trans('default.label.password') }} </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body">

        @if ($message = Session::get('success'))
        <div class="alert alert-success" role="alert"> {{ $message }} </div><hr>
        @endif

        @if ($message = Session::get('error'))
        <div class="alert alert-danger" role="alert"> {{ $message }} </div><hr>
        @endif

        <form id="form-exilednoname" method="POST" action="{{ URL::current() }}/../update-password" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data">
          {{ csrf_field() }}


          <input class="form-control" name="created_by" type="hidden" value="1">
          <div class="kt-section__body">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label"> Current Password </label>
              <div class="col-lg-9">
                <input id="current-password" type="password" class="{{ $errors->has('current-password') ? 'form-control is-invalid' : 'form-control' }}" name="current-password" required>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label"> New Password </label>
              <div class="col-lg-9">
                <input id="new-password" type="password" class="{{ $errors->has('new-password') ? 'form-control is-invalid' : 'form-control' }}" name="new-password" required>
              </div>
            </div>
            
            <div class="form-group row">
              <label class="col-lg-3 col-form-label"> Confirm New Password </label>
              <div class="col-lg-9">
                <input id="new-password-confirm" type="password" class="{{ $errors->has('new-password-confirm') ? 'form-control is-invalid' : 'form-control' }}" name="new-password-confirm" required>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
  @endpush
