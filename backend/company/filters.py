from django.db.models import Q, Value
from rest_framework.filters import (
    SearchFilter,
    BaseFilterBackend
)
from .models import Company


class SearchFilterLimit(SearchFilter):
    def filter_queryset(self, *args, **kwargs):
        return super(SearchFilterLimit, self).filter_queryset(*args, **kwargs)[:5]

class CompanyFilterBackend(BaseFilterBackend):
    def filter_queryset(self, request, queryset, view):
        company_slug = request.query_params.get('company')
        radius = request.query_params.get('radius', 5000)
        limit = request.query_params.get('limit', 50)
        price_min = request.query_params.get('priceMin', 0)
        price_max = request.query_params.get('priceMax', None)
        categories = request.query_params.getlist('category[]', None)
        procedures = request.query_params.getlist('procedure[]', None)
        params = {};

        queryset = queryset.filter(is_active=True)

        if company_slug:
            try:
                company = Company.objects.get(slug=company_slug)
                companies = Company.objects.get_nearby_spots(
                    float(company.latitude),
                    float(company.longitude),
                    float(radius),
                    int(limit)
                )
                ids = map(lambda i: i.get('id'), companies)
                distances = { i.get('id') : i.get('distance') for i in companies }
                queryset = queryset.filter(pk__in=ids)
            except Company.DoesNotExist:
                pass        
        
        if categories:
            queryset = queryset.filter(category__pk__in=categories)
        
        if procedures:
            queryset = queryset.filter(procedures__pk__in=procedures)

        if price_max:
            queryset = queryset.filter(
                Q(procedures__price__gte=price_min) & 
                Q(procedures__price__lte=price_max)
            )
        
        return queryset
