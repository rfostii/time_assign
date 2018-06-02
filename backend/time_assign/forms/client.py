from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from time_assign.models import Client


class ClientCreationForm(UserCreationForm):
    """
    A form that creates a user, with no privileges, from the given email and
    password.
    """

    def __init__(self, *args, **kargs):
        super(ClientCreationForm, self).__init__(*args, **kargs)

    class Meta:
        model = Client
        fields = ('email',)

class ClientChangeForm(UserChangeForm):
    def __init__(self, *args, **kargs):
        super(ClientChangeForm, self).__init__(*args, **kargs)

    class Meta:
        model = Client
        fields = ('email',)