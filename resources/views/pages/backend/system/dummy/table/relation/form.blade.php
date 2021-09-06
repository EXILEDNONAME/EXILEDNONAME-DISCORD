<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Relation From General </label>
  <div class="col-lg-9">
    {!! Form::select('id_general', dummy_table_generals(), (isset($data->id_general) ? $data->id_general : NULL), ['placeholder' => '- Select Relation From General -', 'class' => 'form-control', 'required' => 'required']) !!}
    @error('id_general') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Date Start </label>
  <div class="col-lg-9">
    {!! Form::text('date_start', (isset($data->date_start) ? $data->date_start : \Carbon\Carbon::now()->format('Y-m-d H:i')), ['id' => 'ex_datetimepicker_start','class' => $errors->has('date_start') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
    @error('date_start') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Date End </label>
  <div class="col-lg-9">
    {!! Form::text('date_end', (isset($data->date_end) ? $data->date_end : \Carbon\Carbon::now()->format('Y-m-d H:i')), ['id' => 'ex_datetimepicker_end','class' => $errors->has('date_end') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
    @error('date_end') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Name </label>
  <div class="col-lg-9">
    {!! Form::text('name', (isset($data->name) ? $data->name : ''), ['class' => $errors->has('name') ? 'form-control is-invalid' : 'form-control', 'required' => 'required']) !!}
    @error('name') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

<div class="form-group row">
  <label class="col-lg-3 col-form-label"> Description </label>
  <div class="col-lg-9">
    {!! Form::textarea('description', (isset($data->description) ? $data->description : ''), [ 'id' => 'kt-tinymce-1', 'class' => $errors->has('description') ? 'form-control is-invalid' : 'form-control']) !!}
    @error('description') <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span> @enderror
  </div>
</div>

@include('includes.partial.datatable.form')
