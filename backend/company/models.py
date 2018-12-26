from unidecode import unidecode
from django.db import models
from django.utils import timezone
from django.utils.http import urlquote
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.utils.text import slugify
from django_google_maps import fields as map_fields


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
    address = map_fields.AddressField(max_length=200)
    latitude = models.DecimalField(max_digits=30, decimal_places=20)
    longitude = models.DecimalField(max_digits=30, decimal_places=20)

    class Meta:
        verbose_name = _('company')
        verbose_name_plural = _('companies')

    def __str__(self):
        return self.name

    def get_absolute_url(self):        
        return reverse('company_slug', args=[str(self.slug)])

    def save(self, *args, **kwargs):
        self.slug = slugify(unidecode(self.name))
        super(Company, self).save(*args, **kwargs)

    def get_nearby_spots(self, lat, lng, radius=5000, limit=50):
        """
        use raw MySQL and Haversine Formula to search 
        companies nearby location
        http://en.wikipedia.org/wiki/Haversine_formula
        """
        radius = float(radius) / 1000.0

        query = """SELECT id, (6367*acos(cos(radians(%2f))
                *cos(radians(latitude))*cos(radians(longitude)-radians(%2f))
                +sin(radians(%2f))*sin(radians(latitude))))
                AS distance FROM company_company HAVING
                distance < %2f ORDER BY distance LIMIT 0, %d""" % (
            float(lat),
            float(lng),
            float(lat),
            radius,
            limit
        )

        return Company.objects.raw(query)
