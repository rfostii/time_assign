from django.db import models
from django.utils import timezone
from django.utils.http import urlquote
from django.utils.translation import ugettext_lazy as _
from django.core.mail import send_mail
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import ClientManager


class Client(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name=_('Пошта'), max_length=254, unique=True)
    first_name = models.CharField(verbose_name=_('Ім\'я'), max_length=30, blank=True)
    last_name = models.CharField(verbose_name=_('Прізвище'), max_length=30, blank=True)
    is_staff = models.BooleanField(
        default=False,
        verbose_name=_('Персонал сайту'),
        help_text=_('Designates whether the user can log into this admin '
                    'site.'))
    is_active = models.BooleanField(
        default=True,
        verbose_name=_('Активний'),
        help_text=_('Designates whether this user should be treated as '
                    'active. Unselect this instead of deleting accounts.'))
    date_joined = models.DateTimeField(verbose_name=_('В системі з'), default=timezone.now)
    is_employee = models.BooleanField(_('Персонал'), default=False)
    company = models.ForeignKey('company.Company', verbose_name=_('Заклад'), null=True, blank=True)

    objects = ClientManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('Клієнт')
        verbose_name_plural = _('Клієнти')

    def get_absolute_url(self):
        return "/users/%s/" % urlquote(self.email)

    def get_full_name(self):
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip() or self.email

    def get_short_name(self):    
        return self.first_name or self.email

    def email_user(self, subject, message, from_email=None):
        send_mail(subject, message, from_email, [self.email])    

    def __str__(self):
        return str(self.id) + ' - ' + (self.first_name + ' ' + self.last_name if self.first_name else self.email)

