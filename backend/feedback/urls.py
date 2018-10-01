from django.conf.urls import url
from .views import FeedbackView


urlpatterns = [
    url(r'^feedbacks/$', FeedbackView.as_view()),
    url(r'^feedbacks/(?P<pk>[0-9]+)/$', FeedbackView.as_view()),
]