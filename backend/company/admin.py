from django.contrib import admin
from .models import Company, Category    


class CategoryAdmin(admin.ModelAdmin):
    pass   


class CompanyAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Category, CategoryAdmin)
admin.site.register(Company, CompanyAdmin)
