from django.contrib import admin
from .models import Company, Category    


class CategoryAdmin(admin.ModelAdmin):
    pass   


class CompanyAdmin(admin.ModelAdmin):    
    list_display = ('name', 'city', 'owner')    
    exclude = ('slug',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Company, CompanyAdmin)
