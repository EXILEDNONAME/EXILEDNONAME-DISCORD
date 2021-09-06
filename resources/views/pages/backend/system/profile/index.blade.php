@extends('layouts.backend.blank')
@push('title', Auth::user()->name)

@push('container')
<div class="row">
  <div class="col-xl-12">
    <div class="card card-custom gutter-b card-sticky" data-card="true" id="kt_page_sticky_card">
      <div class="card-header">
        <div class="card-title">
          <h3 class="card-label"> Account Information </h3>
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

        <form id="form-exilednoname" method="POST" action="{{ URL::current() }}/../{{ $data->id }}" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data">
          {{ method_field('PATCH') }}
          {{ csrf_field() }}

          <div class="form-group row">
            <label class="col-lg-3 col-form-label"> Username </label>
            <div class="col-lg-9">
              {!! Form::text('username', (isset(Auth::user()->username) ? Auth::user()->username : ''), ['class' => $errors->has('username') ? 'form-control is-invalid' : 'form-control', 'required' => 'required', 'readonly' => 'true']) !!}
              @error('username') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label"> Name </label>
            <div class="col-lg-9">
              {!! Form::text('name', (isset(Auth::user()->name) ? Auth::user()->name : ''), ['class' => $errors->has('name') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
              @error('name') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label"> Phone </label>
            <div class="col-lg-9">
              {!! Form::number('phone', (isset(Auth::user()->phone) ? Auth::user()->phone : ''), ['class' => $errors->has('phone') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
              @error('phone') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label"> Email </label>
            <div class="col-lg-9">
              {!! Form::email('email', (isset(Auth::user()->email) ? Auth::user()->email : ''), ['class' => $errors->has('email') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
              @error('email') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label"> Address 1 </label>
            <div class="col-lg-9">
              {!! Form::textarea('address_1', (isset($data->address_1) ? $data->address_1 : ''), ['class' => $errors->has('address_1') ? 'form-control is-invalid' : 'form-control']) !!}
              @error('address_1') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label"> Address 2 </label>
            <div class="col-lg-9">
              {!! Form::textarea('address_2', (isset($data->address_2) ? $data->address_2 : ''), ['class' => $errors->has('address_2') ? 'form-control is-invalid' : 'form-control']) !!}
              @error('address_2') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</div>
@endpush
