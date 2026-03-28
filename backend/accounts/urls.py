from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.get_user, name='get_user'),
    path('check/', views.check_auth, name='check_auth'),
    path('update-preferences/', views.update_user_preferences, name='update_preferences'),
    path('logout/', views.logout_user, name='logout'),
    path('callback/', views.oauth_login_callback, name='oauth_callback'),
]