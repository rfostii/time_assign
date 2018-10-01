from django.conf.urls import url
from .views import CompanyView, CompaniesView


urlpatterns = [
    url(r'^companies/$', CompaniesView.as_view(), name="companies"),
    url(r'^companies/(?P<pk>[0-9]+)/$', CompanyView.as_view(), name="company_id"),
    url(r'^companies/(?P<slug>[-\w]+)/$', CompanyView.as_view(), name="company_slug"),
]