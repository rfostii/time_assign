from django.contrib import admin
from .models import Feedback


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('company', 'employee', 'client', 'rating', 'comment')

admin.site.register(Feedback, FeedbackAdmin)
