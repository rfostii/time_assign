from django.db import models
from django.utils.translation import ugettext_lazy as _


class Assigment(models.Model):
    company = models.ForeignKey('company.Company')
    client = models.ForeignKey('client.Client', related_name='assigment_client')
    employee = models.ForeignKey('client.Client', related_name='assigment_employee')        
    service = models.ForeignKey('service.Service')
    datetime = models.DateTimeField()
    duration = models.TimeField()
    comment = models.TextField()

    class Meta:
        verbose_name = _('assigment')
        verbose_name_plural = _('assigments')
