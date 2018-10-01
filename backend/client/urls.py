from django.conf.urls import url
from .views import ClientView


urlpatterns = [
    url(r'^clients/$', ClientView.as_view()),
    url(r'^clients/(?P<pk>[0-9]+)/$', ClientView.as_view()),
]