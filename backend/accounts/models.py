from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    google_id = models.CharField(max_length=255, unique=True, null=True, blank=True)
    profile_picture = models.URLField(null=True, blank=True)
    google_access_token = models.TextField(null=True, blank=True)
    google_refresh_token = models.TextField(null=True, blank=True)
    gmail_permission_granted = models.BooleanField(default=False)
    
    introduction = models.TextField(null=True, blank=True)
    important_email_types = models.JSONField(default=list, blank=True)
    unimportant_email_types = models.JSONField(default=list, blank=True)
    personal_emails = models.JSONField(default=list, blank=True)
    current_activities = models.JSONField(default=list, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.email} - Profile"

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'