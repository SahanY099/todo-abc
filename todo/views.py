
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from .models import Todo
from .serializers import TodoSerializer
from .filters import TodoFilter


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    filterset_class = TodoFilter

    @action(detail=False, methods=['get'])
    def left_count(self, request):
        left_todos_count = Todo.objects.filter(completed=False).count()
        return Response(left_todos_count)

    @action(detail=False, methods=['post'])
    def complete(self, request):
        todo_id = request.data.get('id', None)
        todo = get_object_or_404(Todo, id=todo_id)
        todo.completed = not todo.completed
        todo.save()

        serializer = TodoSerializer(todo)
        return Response(data=serializer.data, status=HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def clear_completed(self, request):
        completed_todos = Todo.objects.filter(completed=True)
        completed_todos_ids = list(
            completed_todos.values_list('id', flat=True))

        completed_todos.delete()

        return Response(data=completed_todos_ids, status=HTTP_200_OK)
