from django.db import models
from django.conf import settings
from django.utils.translation import gettext as _

User = settings.AUTH_USER_MODEL


class Todo(models.Model):
    text = models.TextField(_("text"))
    completed = models.BooleanField(_("completed"), default=False)

    @property
    def status(self):
        if self.completed:
            return 'completed'
        return "active"

    class Meta:
        verbose_name = _("todo")
        verbose_name_plural = _("todos")

    def __str__(self):
        return self.text
