import random
import string
from django.db import models



def generate_unique_code() -> str:
    """
    Generates a unique code of length 6 using uppercase letters.

    Returns:
        str: A unique code.
    """
    length: int = 6
    while True:
        # ascii make sure it's unique
        code: str = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

# fat models and thin views
class Room(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)