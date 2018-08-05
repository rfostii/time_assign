from django.conf.urls import url
from time_assign.views.assigment import AssigmentView
from time_assign.views.client import ClientView
from time_assign.views.company import CompanyView, CompaniesView
from time_assign.views.feedback import FeedbackView
from time_assign.views.service import ServiceView


urlpatterns = [
    url(r'^assigments/$', AssigmentView.as_view()),
    url(r'^assigments/(?P<pk>[0-9]+)/$', AssigmentView.as_view()),

    url(r'^clients/$', ClientView.as_view()),
    url(r'^clients/(?P<pk>[0-9]+)/$', ClientView.as_view()),

    url(r'^companies/$', CompaniesView.as_view(), name="companies"),
    url(r'^companies/(?P<pk>[0-9]+)/$', CompanyView.as_view(), name="company_id"),
    url(r'^companies/(?P<slug>[-\w]+)/$', CompanyView.as_view(), name="company_slug"),

    url(r'^feedbacks/$', FeedbackView.as_view()),
    url(r'^feedbacks/(?P<pk>[0-9]+)/$', FeedbackView.as_view()),

    url(r'^services/$', ServiceView.as_view()),
    url(r'^services/(?P<pk>[0-9]+)/$', ServiceView.as_view()),
]