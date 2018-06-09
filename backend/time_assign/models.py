from django.db import models
from django.utils import timezone
from django.utils.http import urlquote
from django.utils.translation import ugettext_lazy as _
from django.core.mail import send_mail
from django.utils.text import slugify
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from time_assign.managers.client import ClientManager


# Create your models here.
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

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')

    def __str__(self):
        return self.name
        

# Create your models here.
class Company(models.Model):
    owner = models.ForeignKey('Client')
    category = models.ForeignKey(Category)
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='images/logos')
    city = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    house_number = models.IntegerField()
    phone_number = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique = True, default='')

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


class Service(models.Model):
    specialist = models.ForeignKey('Client')
    company = models.ForeignKey(Company)
    image = models.ImageField(upload_to='images/service')
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
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


class Client(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), max_length=254, unique=True)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    is_staff = models.BooleanField(_('staff status'), default=False,
        help_text=_('Designates whether the user can log into this admin '
                    'site.'))
    is_active = models.BooleanField(_('active'), default=True,
        help_text=_('Designates whether this user should be treated as '
                    'active. Unselect this instead of deleting accounts.'))
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)    

    objects = ClientManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('client')
        verbose_name_plural = _('clients')

    def get_absolute_url(self):
        return "/clients/%s/" % urlquote(self.email)

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip() or self.email

    def get_short_name(self):    
        return self.first_name or self.email

    def email_user(self, subject, message, from_email=None):
        send_mail(subject, message, from_email, [self.email])    

    def __str__(self):
        return self.first_name + ' ' + self.last_name if self.first_name else self.email


class Assigment(models.Model):
    company = models.ForeignKey(Company)
    client = models.ForeignKey(Client, related_name='assigment_client')
    employee = models.ForeignKey(Client, related_name='assigment_employee')        
    service = models.ForeignKey(Service)
    datetime = models.DateTimeField()
    duration = models.TimeField()
    comment = models.TextField()

    class Meta:
        verbose_name = _('assigment')
        verbose_name_plural = _('assigments')


class Feedback(models.Model):
    client = models.ForeignKey(Client, related_name='feedback_client')
    employee = models.ForeignKey(Client, related_name='feedback_employee')
    company = models.ForeignKey(Company)
    assessment = models.FloatField()
    comment = models.TextField()

    class Meta:
        verbose_name = _('feedback')
        verbose_name_plural = _('feedbacks')
