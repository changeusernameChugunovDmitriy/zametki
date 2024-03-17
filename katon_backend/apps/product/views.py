from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer, NoteCreateSerializer


@api_view(['GET'])
def get_notes(request):
    note = Note.objects.all()
    serializer = NoteSerializer(note, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_note_one(request, id):
    note = Note.objects.get(pk=id)
    serializer = NoteSerializer(note)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_note(request, id):
    note = Note.objects.get(pk=id)
    serializer = NoteSerializer(note)
    note.delete()
    return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def create_note(request):
    serializer = NoteCreateSerializer(data=request.data)
    if serializer.is_valid():
        note = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
