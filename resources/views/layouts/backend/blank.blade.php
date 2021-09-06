<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('includes.head')
<body id="kt_body" class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize aside-minimize-hoverable page-loading">
  @include('includes.partial.logo-mobile')
  <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid page">
      <div class="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
        @include('includes.partial.logo-desktop')
        <div class="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
          <div id="kt_aside_menu" class="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="10000">
            <ul class="menu-nav">
              @include('includes.sidebar-menu')
            </ul>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
        <div id="kt_header" class="header header-fixed">
          <div class="container-fluid d-flex align-items-stretch justify-content-between">
            @include('includes.menu-header')
            @include('includes.menu-topbar')
          </div>
        </div>

        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">

          <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
              @include('includes.partial.breadcrumb')
              <div class="d-flex align-items-center">
                <span class="text-muted"> # </span>
              </div>
            </div>
          </div>

          @stack('help-center')

          <div class="d-flex flex-column-fluid">
            <div class="container-fluid">
              @stack('container')
            </div>
          </div>
        </div>

        @include('includes.footer')

      </div>
    </div>
  </div>

  @include('includes.partial.scroll-top')
  @include('includes.partial.sticky-toolbar')
  @include('includes.js')

</body>
</html>
