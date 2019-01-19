from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import ugettext_lazy as _
from .models import Client
from .forms.client import ClientCreationForm, ClientChangeForm


class ClientAdmin(BaseUserAdmin):
    # The forms to add and change user instances

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference the removed 'username' field
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'company')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_employee', 'groups', 'user_permissions')}),
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
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_employee', 'company')
    search_fields = ('email', 'first_name', 'last_name', 'company')
    ordering = ('email',)


admin.site.register(Client, ClientAdmin)
