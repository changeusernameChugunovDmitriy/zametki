from django.urls import path, include

from .product.views import get_notes, get_note_one, delete_note, create_note

urlpatterns = [
    path('notes/', get_notes),
    path('note/<int:id>', get_note_one),
    path('delete/<int:id>', delete_note),
    path('create/', create_note)
]