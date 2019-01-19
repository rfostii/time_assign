from django.contrib import admin
from .models import Assigment
from client.models import Client


class AssigmentAdmin(admin.ModelAdmin):
    pass

admin.site.register(Assigment, AssigmentAdmin)
