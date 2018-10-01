from django.db import models
from django.utils.translation import ugettext_lazy as _


class Feedback(models.Model):
    client = models.ForeignKey('client.Client', related_name='feedback_creator')
    employee = models.ForeignKey('client.Client', related_name='feedback_employee')
    company = models.ForeignKey('company.Company')
    assessment = models.FloatField()
    comment = models.TextField()

    class Meta:
        verbose_name = _('feedback')
        verbose_name_plural = _('feedbacks')
