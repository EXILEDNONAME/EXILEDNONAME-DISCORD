<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Active </label>
  <div class="col-lg-9">
    {{ Form::select('active', ['1' => 'Yes', '2' => 'No'], (isset($data->active) ? $data->active : '1'), ['class' => $errors->has('active') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) }}
    @error('active') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Sort </label>
  <div class="col-lg-9">
    {!! Form::number('sort', (isset($data->sort) ? $data->sort : $model::count() + 1), ['class' => $errors->has('sort') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
    @error('sort') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

@if ( !empty($status) && $status == 'true')
<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Status </label>
  <div class="col-lg-9">
    {{ Form::select('status', ['1' => 'Success', '2' => 'Pending', '3' => 'Delivered', '4' => 'Canceled'], (isset($data->status) ? $data->status : ''), ['class' => $errors->has('status') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) }}
    @error('status') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>
@endif
