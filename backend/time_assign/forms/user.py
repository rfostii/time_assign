from django.contrib.auth.forms import (
    UserCreationForm as BaseUserCreationForm, 
    UserChangeForm as BaseUserChangeForm
)
from time_assign.models import User


class UserCreationForm(BaseUserCreationForm):
    """
    A form that creates a user, with no privileges, from the given email and
    password.
    """

    def __init__(self, *args, **kargs):
        super(UserCreationForm, self).__init__(*args, **kargs)

    class Meta:
        model = User
        fields = ('email',)

class UserChangeForm(BaseUserChangeForm):
    def __init__(self, *args, **kargs):
        super(UserChangeForm, self).__init__(*args, **kargs)

    class Meta:
        model = User
        fields = ('email',)