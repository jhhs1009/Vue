from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model=User
        fields = '__all__'