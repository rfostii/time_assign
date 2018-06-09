from rest_framework.filters import SearchFilter


class SearchFilterLimit(SearchFilter):
    def filter_queryset(self, *args, **kwargs):
        return super(SearchFilterLimit, self).filter_queryset(*args, **kwargs)[:5]        