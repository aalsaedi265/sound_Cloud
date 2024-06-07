from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Room
from .serializers import RoomSerializer, CreateRoomSerializer

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer
    
    def post(self, request, format=None):
        """
        Handles the POST request to create a new room or update an existing one.

        Args:
            request (HttpRequest): The HTTP request object.
            format (str): The format of the request data.

        Returns:
            Response: The HTTP response object containing the serialized room data and status code.
        """
        # Create a session if it doesn't exist
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
            
        # Serialize the request data
        serializer = self.serializer_class(data=request.data)
        
        # Validate the serialized data
        if serializer.is_valid():
            # Extract the guest_can_pause and votes_to_skip values from the serialized data
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            
            # Query the Room model for a room with the same host
            queryset = Room.objects.filter(host=host)
            
            # If a room with the same host exists, update its guest_can_pause and votes_to_skip values
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)
            # If no room with the same host exists, create a new room
            else:
                room = Room(
                    host = host,
                    guest_can_pause = guest_can_pause,
                    votes_to_skip = votes_to_skip
                )
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        # If the request data is invalid, return a bad request response
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
