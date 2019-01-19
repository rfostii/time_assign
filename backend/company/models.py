from unidecode import unidecode
from django.db import models
from django.utils import timezone
from django.utils.http import urlquote
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.text import slugify
from django_google_maps import fields as map_fields
from .managers import CompanyManager


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name=_('Послуга'))
    logo = models.ImageField(upload_to='images/logos', verbose_name=_('Логотип'), blank=True, null=True)
    parent_category = models.ForeignKey('self', verbose_name=_('Батьківська категорія'), null=True, blank=True)

    class Meta:
        verbose_name = _('Категорія')
        verbose_name_plural = _('Категорії')

    def __str__(self):
        return str(self.id) + ' - ' + self.name

class Picture(models.Model):
    picture = models.ImageField(upload_to='images/pictures', verbose_name=_('Зображення'))

    class Meta:
        verbose_name = _('Зображення')
        verbose_name_plural = _('Зображення')

    def __str__(self):        
        return str(self.picture)

# Create your models here.
class Company(models.Model):    
    name = models.CharField(max_length=255, verbose_name=_('Назва'))
    owner = models.ForeignKey('client.Client', verbose_name=_('Власник'), related_name='company_owner')
    category = models.ForeignKey('Category', verbose_name=_('Категорія'))
    logo = models.ImageField(upload_to='images/logos', verbose_name=_('Логотип'))    
    country = models.CharField(max_length=255, verbose_name=_('Країна'))
    region = models.CharField(max_length=255, verbose_name=_('Регіон'))
    city = models.CharField(max_length=255, verbose_name=_('Місто'))
    street = models.CharField(max_length=255, verbose_name=_('Вулиця'))
    house_number = models.IntegerField(verbose_name=_('Номер будинку'))
    phone_number = models.CharField(max_length=255, verbose_name=_('Телефон'))
    slug = models.SlugField(max_length=255, unique = True, default='', verbose_name=_('Slug'))
    description = models.TextField(default='', blank=True, verbose_name=_('Опис'))
    address = map_fields.AddressField(max_length=200, verbose_name=_('Адреса'))
    latitude = models.DecimalField(max_digits=30, decimal_places=20, verbose_name=_('Широта'))
    longitude = models.DecimalField(max_digits=30, decimal_places=20, verbose_name=_('Довгота'))
    is_active = models.BooleanField(default=False, verbose_name=_('Активний'))
    procedures = models.ManyToManyField('service.Service', verbose_name=_('Послуги'), related_name='procedures', blank=True)
    pictures = models.ManyToManyField('Picture', verbose_name=_('Зображення'))

    objects = CompanyManager()

    class Meta:
        verbose_name = _('Заклад')
        verbose_name_plural = _('Заклади')

    def __str__(self):
        return str(self.id) + ' - ' + self.name

    def get_absolute_url(self):        
        return reverse('company_slug', args=[str(self.slug)])

    def save(self, *args, **kwargs):
        self.slug = slugify(unidecode(self.name))
        super(Company, self).save(*args, **kwargs)
    
