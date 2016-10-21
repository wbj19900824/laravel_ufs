@if ($paginator->getLastPage() > 1)

<ul class="ui pagination menu">
    <li>
        <a href="{{ $paginator->getUrl(1) }}" class="item{{ ($paginator->getCurrentPage() == 1) ? ' disabled' : '' }}">
            <i class="icon left arrow"></i> 
            首页
        </a>
    </li>
    @for ($i = 1; $i <= $paginator->getLastPage(); $i++)
        <a href="{{ $paginator->getUrl($i) }}" class="item{{ ($paginator->getCurrentPage() == $i) ? ' active' : '' }}">
            {{ $i }}
        </a>
    @endfor
    <li>
        <a href="{{ $paginator->getUrl($paginator->getLastPage()) }}" class="item{{ ($paginator->getCurrentPage() == $paginator->getLastPage()) ? ' disabled' : '' }}"> 
            末页 
            <i class="icon right arrow"></i>
        </a>
    </li>
</ul>

@endif