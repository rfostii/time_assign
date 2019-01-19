from django.db import models
from django.utils.translation import ugettext_lazy as _


class Assigment(models.Model):
    company = models.ForeignKey('company.Company', verbose_name=_('Заклад'))    
    employee = models.ForeignKey('client.Client', verbose_name=_('Працівник'), related_name='assigment_employee')        
    client = models.ForeignKey('client.Client', verbose_name=_('Клієнт'), related_name='assigment_client')
    service = models.ForeignKey('service.Service', verbose_name=_('Послуга'))
    datetime = models.DateTimeField(verbose_name=_('Час'))
    duration = models.TimeField(verbose_name=_('Тривалість'))
    comment = models.TextField(verbose_name=_('Додатково'))

    class Meta:
        verbose_name = _('Запис')
        verbose_name_plural = _('Записи')

    def __str__(self):
        return self.id
