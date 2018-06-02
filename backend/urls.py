from django.conf.urls import url, include
from django.contrib import admin


urlpatterns = [
    url(r'^jet/', include('jet.urls', 'jet')),
    url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    url(r'^admin/', admin.site.urls),
    url(r'^auth/', include('djoser.urls.base')),
    url(r'^auth/', include('djoser.urls.authtoken')),
    url(r'^auth/', include('djoser.urls.jwt')),
    url(r'^auth/', include('djoser.social.urls')),

    url(r'^api/', include('time_assign.urls', 'app')),
]
