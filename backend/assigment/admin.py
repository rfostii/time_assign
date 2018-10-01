from django.contrib import admin
from .models import Assigment


class AssigmentAdmin(admin.ModelAdmin):
    pass    


admin.site.register(Assigment, AssigmentAdmin)
