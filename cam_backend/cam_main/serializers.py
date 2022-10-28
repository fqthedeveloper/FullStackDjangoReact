from rest_framework import serializers
from . import models


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
        fields = ['id','img', 'text_alt']




class ContactSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Contact
        fields = ['id', 'full_name', 'email','phone_number','massege', 'add_time']


class CustamerSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Custamer
        fields = ['id', 'custamer_name', 'reviwe','img','alt_text']


class PrudectSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Prudect
        fields = ['id', 'p_name', 'details','img','alt_text']


class RatingSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.Rating
        fields = ['id', 'custamer', 'prudect','stars']


class SocialLinkSerializer(serializers.ModelSerializer) :
    class Meta :
        model = models.SocialLink
        fields = ['id', 'facebook', 'instagram','twiter','whatsapp']