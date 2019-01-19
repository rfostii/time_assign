from django.conf.urls import url
from .views import (
    CompanyView,
    CompaniesView,
    CategoriesView,
    CompaniesCitiesView
)


urlpatterns = [
    url(r'^companies/categories/$', CategoriesView.as_view(), name="company_categories_all"),
    url(r'^companies/categories/(?P<pk>[0-9]+)/$', CategoriesView.as_view(), name="company_category"),
    url(r'^companies/categories/(?P<parent_cetegory_id>[0-9]+)/categories/$', CategoriesView.as_view(), name="company_sub_categories"),
    
    url(r'^companies/$', CompaniesView.as_view(), name="companies"),    
    url(r'^companies/(?P<pk>[0-9]+)/$', CompanyView.as_view(), name="company_id"),
    url(r'^companies/(?P<slug>[-\w]+)/$', CompanyView.as_view(), name="company_slug"),
    
    url(r'^companies/locations/get/$', CompaniesCitiesView.as_view(), name="company_locations"),
]