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
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='images/logos', blank=True, null=True)
    parent_category = models.ForeignKey('self', null=True, blank=True)

    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')

    def __str__(self):
        return self.name

class Service(models.Model):
    specialist = models.ForeignKey('client.Client')
    category = models.ForeignKey('Category')
    company = models.ForeignKey('company.Company')
    image = models.ImageField(upload_to='images/service', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    duration = models.IntegerField()
    currency = models.CharField(
        max_length=5, 
        choices=CURRENCIES,
        default='UAH',
    )
    period = models.CharField(
        max_length=5,
        choices=PERIODS,
        default='h',
    )

    class Meta:
        verbose_name = _('service')
        verbose_name_plural = _('services')

    def __str__(self):
        return self.name
