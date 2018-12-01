from django.conf.urls import url
from .views import CompanyView, CompaniesView, CategoriesView


urlpatterns = [
    url(r'^companies/categories/$', CategoriesView.as_view(), name="company_category_all"),
    url(r'^companies/categories/(?P<pk>[0-9]+)/$', CategoriesView.as_view(), name="company_category"),
    
    url(r'^companies/$', CompaniesView.as_view(), name="companies"),
    url(r'^companies/(?P<pk>[0-9]+)/$', CompanyView.as_view(), name="company_id"),
    url(r'^companies/(?P<slug>[-\w]+)/$', CompanyView.as_view(), name="company_slug"),    
]