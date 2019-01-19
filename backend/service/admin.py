from django.contrib import admin
from .models import Service, Category


class ServiceAdmin(admin.ModelAdmin):
    pass

class CategoryAdmin(admin.ModelAdmin):
    pass

admin.site.register(Service, ServiceAdmin)
admin.site.register(Category, CategoryAdmin)
