from django.db import models
from django.utils.translation import ugettext_lazy as _


class Feedback(models.Model):
    company = models.ForeignKey('company.Company', verbose_name=_('Заклад'))
    employee = models.ForeignKey('client.Client', related_name='feedback_employee', verbose_name=_('Працівник'))    
    client = models.ForeignKey('client.Client', related_name='feedback_creator', verbose_name=_('Клієнт'))    
    assessment = models.FloatField(verbose_name=_('Оцінка'))
    comment = models.TextField(verbose_name=_('Коментар'))

    class Meta:
        verbose_name = _('Відгук')
        verbose_name_plural = _('Відгуки')

    def __str__(self):
        return str(self.id) + ' - ' + self.comment
