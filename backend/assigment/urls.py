from django.conf.urls import url
from .views import AssigmentView


urlpatterns = [
    url(r'^assigments/$', AssigmentView.as_view()),
    url(r'^assigments/(?P<pk>[0-9]+)/$', AssigmentView.as_view()),    
]