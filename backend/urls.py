from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from client.views import TokenCreateView


urlpatterns = [
    url(r'^jet/', include('jet.urls', 'jet')),
    url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    url(r'^admin/', admin.site.urls),
    url(r'^auth/jwt/create/', TokenCreateView.as_view()),
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.jwt')),

    url(r'^api/', include('assigment.urls', 'api.assigment')),
    url(r'^api/', include('client.urls', 'api.client')),
    url(r'^api/', include('company.urls', 'api.company')),
    url(r'^api/', include('feedback.urls', 'api.feedback')),
    url(r'^api/', include('service.urls', 'api.service')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
