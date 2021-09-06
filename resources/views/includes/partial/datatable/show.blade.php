<tr>
  <td class="align-middle font-weight-bold"> Active </td>
  <td class="align-middle">
    @if ( $data->active == 1 ) Yes
    @else No
    @endif
  </td>
</tr>
<tr>
  <td width="50%" class="align-middle font-weight-bold"> Sort </td>
  <td class="align-middle"> {!! $data->sort !!} </td>
</tr>
<tr>
  <td class="align-middle font-weight-bold"> Status </td>
  <td class="align-middle">
    @if ( $data->status == 1 ) Done
    @else Pending
    @endif
  </td>
</tr>
<tr>
  <td class="align-middle font-weight-bold"> Created At </td>
  <td class="align-middle"> {!! \Carbon\Carbon::parse($data->created_at)->format('d F Y, H:i') !!} </td>
</tr>
<tr>
  <td class="align-middle font-weight-bold"> Updated At </td>
  <td class="align-middle"> {!! \Carbon\Carbon::parse($data->created_at)->format('d F Y, H:i') !!} </td>
</tr>
