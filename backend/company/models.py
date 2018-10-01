from django.db import models
from django.utils import timezone
from django.utils.http import urlquote
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='images/logos', blank=True, null=True)

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')

    def __str__(self):
        return self.name
        

# Create your models here.
class Company(models.Model):
    owner = models.ForeignKey('client.Client')
    category = models.ForeignKey('Category')
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='images/logos')
    city = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    house_number = models.IntegerField()
    phone_number = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique = True, default='')
    description = models.TextField(default='', blank=True)

    class Meta:
        verbose_name = _('company')
        verbose_name_plural = _('companies')

    def __str__(self):
        return self.name

    def get_absolute_url(self):        
        return reverse('company', args=[str(self.slug)])

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name, allow_unicode=True)
        super(Company, self).save(*args, **kwargs)
