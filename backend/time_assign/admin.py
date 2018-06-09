from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import ugettext_lazy as _
from time_assign.models import (
        Assigment, Client, Company,
        Service, Feedback, Category
    )
from time_assign.forms.client import ClientCreationForm, ClientChangeForm


class CategoryAdmin(admin.ModelAdmin):
    pass   


class AssigmentAdmin(admin.ModelAdmin):
    pass    


class ClientAdmin(UserAdmin):
    # The forms to add and change user instances

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference the removed 'username' field
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')}
        ),
    )
    form = ClientChangeForm
    add_form = ClientCreationForm
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)


class CompanyAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


class ServiceAdmin(admin.ModelAdmin):
    pass


class FeedbackAdmin(admin.ModelAdmin):
    pass


admin.site.register(Category, CategoryAdmin)
admin.site.register(Assigment, AssigmentAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Feedback, FeedbackAdmin)
