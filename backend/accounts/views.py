from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import logout
from .models import UserProfile
from .serializers import UserDetailSerializer, UserProfileSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    """Get current authenticated user profile"""
    try:
        profile = request.user.profile
    except UserProfile.DoesNotExist:
        profile = UserProfile.objects.create(user=request.user)
    
    serializer = UserDetailSerializer(request.user)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_user_preferences(request):
    """Update user preferences and introduction"""
    try:
        profile = request.user.profile
    except UserProfile.DoesNotExist:
        profile = UserProfile.objects.create(user=request.user)
    
    data = request.data
    
    if 'introduction' in data:
        profile.introduction = data['introduction']
    if 'important_email_types' in data:
        profile.important_email_types = data['important_email_types']
    if 'unimportant_email_types' in data:
        profile.unimportant_email_types = data['unimportant_email_types']
    if 'personal_emails' in data:
        profile.personal_emails = data['personal_emails']
    if 'current_activities' in data:
        profile.current_activities = data['current_activities']
    
    profile.save()
    serializer = UserProfileSerializer(profile)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def logout_user(request):
    """Logout user"""
    logout(request)
    return Response({'message': 'Logged out successfully'})

@api_view(['POST'])
def oauth_login_callback(request):
    """Handle OAuth login callback"""
    user = request.user
    if user.is_authenticated:
        try:
            profile = user.profile
        except UserProfile.DoesNotExist:
            profile = UserProfile.objects.create(user=user)
        
        serializer = UserDetailSerializer(user)
        return Response({
            'status': 'success',
            'user': serializer.data,
        })
    return Response({
        'status': 'error',
        'message': 'Not authenticated'
    }, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_auth(request):
    """Check if user is authenticated"""
    try:
        profile = request.user.profile
    except UserProfile.DoesNotExist:
        profile = UserProfile.objects.create(user=request.user)
    
    serializer = UserDetailSerializer(request.user)
    return Response({
        'authenticated': True,
        'user': serializer.data
    })