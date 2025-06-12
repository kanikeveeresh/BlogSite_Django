from django.urls import path
from .views import RegisterView, LoginView, BlogPostView, BlogPostDetailView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('posts/', BlogPostView.as_view(), name='posts'),
    path('posts/<int:pk>/', BlogPostDetailView.as_view()),
]
