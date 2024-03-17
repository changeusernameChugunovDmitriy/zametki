import datetime
from django.utils import timezone

from django.db import models


class Note(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField(max_length=255)
    data_create = models.DateTimeField(default=timezone.now)
    data_redact = models.DateTimeField(null=True)