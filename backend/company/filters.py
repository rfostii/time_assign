from django.db.models import Q
from rest_framework.filters import (
    SearchFilter,
    BaseFilterBackend
)


class SearchFilterLimit(SearchFilter):
    def filter_queryset(self, *args, **kwargs):
        return super(SearchFilterLimit, self).filter_queryset(*args, **kwargs)[:5]

class CompanyFilterBackend(BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        price_min = request.query_params.get('priceMin', 0)
        price_max = request.query_params.get('priceMax', None)
        categories = request.query_params.getlist('category', None)
        procedures = request.query_params.getlist('procedure', None)
        params = {};        

        if categories:
            queryset = queryset.filter(category__pk__in=categories)            
        if procedures:
            queryset = queryset.filter(procedures__pk__in=procedures)                

        if price_max:
            return queryset.filter(
                Q(procedures__price__gte=price_min) & 
                Q(procedures__price__lte=price_max)         
            )
        return queryset
