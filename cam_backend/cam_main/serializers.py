from rest_framework import serializers
from . import models
from django.contrib.flatpages.models import FlatPage


class BannersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Banners
        fields = ['id','img','alt_text']


class ServicesSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Services
        fields = ['id','title', 'detail','img']


class GallerySerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Gallery
        fields = ['id','title', 'detail','img']


class GalleryImageSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.GalleryImage
        fields = ['id', 'gallery', 'alt_text', 'img']

class FlatPagesSerializer(serializers.ModelSerializer) :
    class Meta :
        model = FlatPage
        fields = ['id', 'title', 'content','url']


class ContactSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Contact
        fields = ['id', 'full_name', 'email','phone_number','massege', 'add_time']