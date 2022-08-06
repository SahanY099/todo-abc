from random import choice
from django_property_filter import PropertyFilterSet, PropertyCharFilter, PropertyChoiceFilter

from .models import Todo


class TodoFilter(PropertyFilterSet):

    STATUS_CHOICES = (
        ('active', 'active'),
        ('completed', 'completed'),
        ('', 'all'),

    )

    status = PropertyChoiceFilter(
        field_name='status', choices=STATUS_CHOICES,  lookup_expr='contains')

    class Meta:
        model = Todo
        fields = ['completed', 'status']
