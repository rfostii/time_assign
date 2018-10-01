from django.conf.urls import url
from .views import ServiceView


urlpatterns = [
    url(r'^services/$', ServiceView.as_view()),
    url(r'^services/(?P<pk>[0-9]+)/$', ServiceView.as_view()),
]