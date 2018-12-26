from django.contrib import admin
from .models import Company, Category 
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields


class CategoryAdmin(admin.ModelAdmin):
    pass   


class CompanyAdmin(admin.ModelAdmin):    
    list_display = ('name', 'city', 'owner', 'address')    
    exclude = ('slug',)
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
    }


admin.site.register(Category, CategoryAdmin)
admin.site.register(Company, CompanyAdmin)
