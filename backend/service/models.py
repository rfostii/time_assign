from django.db import models
from django.utils.translation import ugettext_lazy as _

PERIODS = (
    ('h', 'hour'),
    ('d', 'day'),
)

CURRENCIES = (
    ('UAH', 'Гривня'),
    ('RUB', 'Рубль'),
    ('USD', 'US Dollar'),
    ('EUR', 'Euro'),
)

class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name=_('Назва'))
    logo = models.ImageField(upload_to='images/logos', blank=True, null=True, verbose_name=_('Логотип'))
    parent_category = models.ForeignKey('self', null=True, blank=True, verbose_name=_('Батьківська категорія'))

    class Meta:
        verbose_name = _('Категорія')
        verbose_name_plural = _('Категорії')

    def __str__(self):
        return self.name

class Service(models.Model):
    company = models.ForeignKey('company.Company', verbose_name=_('Заклад'))
    employee = models.ForeignKey('client.Client', verbose_name=_('Працівник'))
    category = models.ForeignKey('Category', verbose_name=_('Категорія')) 
    image = models.ImageField(upload_to='images/service', blank=True, null=True, verbose_name=_('Логотип'))
    name = models.CharField(max_length=255, verbose_name=_('Назва'))
    description = models.TextField(verbose_name=_('Опис'))
    price = models.FloatField(verbose_name=_('Ціна'))
    duration = models.IntegerField(verbose_name=_('Тривалість'))
    period = models.CharField(
        max_length=5,
        choices=PERIODS,
        default='h',
        verbose_name=_('Період')
    )
    currency = models.CharField(
        max_length=5, 
        choices=CURRENCIES,
        default='UAH',
        verbose_name=_('Валюта')
    )    

    class Meta:
        verbose_name = _('Послуга')
        verbose_name_plural = _('Послуги')

    def __str__(self):
        return '{} - {} - {}'.format(self.id, self.name, self.company.name)
