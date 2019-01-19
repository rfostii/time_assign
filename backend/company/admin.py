from django.contrib import admin
from .models import Company, Category, Picture
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields
from service.models import Service


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent_category')

class CompanyAdmin(admin.ModelAdmin):    
    list_display = ('name', 'owner', 'city', 'address', 'is_active')
    exclude = ('slug',)
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
    }

class PictureAdmin(admin.ModelAdmin):
    pass

admin.site.register(Category, CategoryAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Picture, PictureAdmin)
