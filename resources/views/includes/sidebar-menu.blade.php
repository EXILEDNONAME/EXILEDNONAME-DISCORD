<li class="menu-item {{ (request()->is('dashboard')) ? 'menu-item-active' : '' }}">
  <a href="/dashboard" class="menu-link">
    <i class="menu-icon fas fa-desktop"></i>
    <span class="menu-text"> Dashboard </span>
  </a>
</li>

<li class="menu-section">
  <h4 class="menu-text"> Extensions </h4>
  <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
</li>

<li class="menu-item menu-item-submenu {{ (request()->is('dashboard/dummy*')) ? 'menu-item-open' : '' }}">
  <a href="javascript:;" class="menu-link menu-toggle">
    <i class="menu-icon fas fa-shield-alt"></i>
    <span class="menu-text"> Dummies </span>
    <i class="menu-arrow"></i>
  </a>
  <div class="menu-submenu">
    <i class="menu-arrow"></i>
    <ul class="menu-subnav">
      <li class="menu-item {{ (request()->is('dashboard/dummy/invoices*')) ? 'menu-item-active' : '' }}">
        <a href="/dashboard/dummy/invoices" class="menu-link">
          <span class="menu-text"> Invoices </span>
        </a>
      </li>
      <li class="menu-item {{ (request()->is('dashboard/dummy/reports*')) ? 'menu-item-active' : '' }}">
        <a href="/dashboard/dummy/reports" class="menu-link">
          <span class="menu-text"> Reports </span>
        </a>
      </li>
      <li class="menu-item menu-item-submenu {{ (request()->is('dashboard/dummy/table*')) ? 'menu-item-open' : '' }}">
        <a href="javascript:;" class="menu-link menu-toggle">
          <span class="menu-text"> Tables </span>
          <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
          <i class="menu-arrow"></i>
          <ul class="menu-subnav">
            <li class="menu-item {{ (request()->is('dashboard/dummy/table/generals*')) ? 'menu-item-active' : '' }}">
              <a href="/dashboard/dummy/table/generals" class="menu-link">
                <i class="menu-bullet menu-bullet-line"><span></span></i>
                <span class="menu-text"> Generals </span>
              </a>
            </li>
            <li class="menu-item {{ (request()->is('dashboard/dummy/table/relations*')) ? 'menu-item-active' : '' }}">
              <a href="/dashboard/dummy/table/relations" class="menu-link">
                <i class="menu-bullet menu-bullet-line"><span></span></i>
                <span class="menu-text"> Relations </span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</li>

<li class="menu-item {{ (request()->is('dashboard/file-manager*')) ? 'menu-item-active' : '' }}">
  <a href="/dashboard/file-manager" class="menu-link">
    <i class="menu-icon fas fa-hdd"></i>
    <span class="menu-text"> File Manager </span>
  </a>
</li>

<li class="menu-item">
  <a href="#" class="menu-link">
    <i class="menu-icon fas fa-recycle"></i>
    <span class="menu-text"> Generator </span>
  </a>
</li>

<li class="menu-section">
  <h4 class="menu-text"> Settings </h4>
  <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
</li>

<li class="menu-item menu-item-submenu {{ (request()->is('dashboard/management*')) ? 'menu-item-open' : '' }}">
  <a href="javascript:;" class="menu-link menu-toggle">
    <i class="menu-icon fas fa-shield-alt"></i>
    <span class="menu-text"> Managements </span>
    <i class="menu-arrow"></i>
  </a>
  <div class="menu-submenu">
    <i class="menu-arrow"></i>
    <ul class="menu-subnav">
      <li class="menu-item {{ (request()->is('dashboard/management/roles*')) ? 'menu-item-active' : '' }}">
        <a href="/dashboard/management/roles" class="menu-link">
          <i class="menu-bullet menu-bullet-line"><span></span></i>
          <span class="menu-text"> Roles </span>
        </a>
      </li>
        <li class="menu-item {{ (request()->is('dashboard/management/users*')) ? 'menu-item-active' : '' }}">
        <a href="/dashboard/management/users" class="menu-link">
          <i class="menu-bullet menu-bullet-line"><span></span></i>
          <span class="menu-text"> Users </span>
        </a>
      </li>
    </ul>
  </div>
</li>

<li class="menu-item {{ (request()->is('dashboard/profile*')) ? 'menu-item-active' : '' }}">
  <a href="/dashboard/profile" class="menu-link">
    <i class="menu-icon fas fa-user"></i>
    <span class="menu-text"> Profile </span>
  </a>
</li>

<li class="menu-item {{ (request()->is('dashboard/statistics*')) ? 'menu-item-active' : '' }}">
  <a href="/dashboard/statistics" class="menu-link">
    <i class="menu-icon fas fa-bug"></i>
    <span class="menu-text"> Statistics </span>
  </a>
</li>

<li class="menu-section">
  <h4 class="menu-text"> Other </h4>
  <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
</li>

<li class="menu-item {{ (request()->is('dashboard/help-center*')) ? 'menu-item-active' : '' }}">
  <a href="/dashboard/help-center" class="menu-link">
    <i class="menu-icon flaticon2-open-text-book"></i>
    <span class="menu-text"> Help Center </span>
  </a>
</li>

<li class="menu-item">
  <a href="/dashboard/logout" class="menu-link" onclick="return confirm('Are you sure?')">
    <i class="menu-icon fas fa-sign-out-alt"></i>
    <span class="menu-text"> Logout </span>
  </a>
</li>
