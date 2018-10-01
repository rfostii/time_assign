from django.contrib.auth.forms import (
    UserCreationForm as BaseUserCreationForm, 
    UserChangeForm as BaseUserChangeForm
)
from client.models import Client


class ClientCreationForm(BaseUserCreationForm):
    """
    A form that creates a user, with no privileges, from the given email and
    password.
    """

    def __init__(self, *args, **kargs):
        super(ClientCreationForm, self).__init__(*args, **kargs)

    class Meta:
        model = Client
        fields = ('email',)

class ClientChangeForm(BaseUserChangeForm):
    def __init__(self, *args, **kargs):
        super(ClientChangeForm, self).__init__(*args, **kargs)

    class Meta:
        model = Client
        fields = ('email',)