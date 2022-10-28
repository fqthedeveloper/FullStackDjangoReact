from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import BannersSerializer, CustamerSerializer, ServicesSerializer, GallerySerializer, ContactSerializer , PrudectSerializer, SocialLinkSerializer
from rest_framework import generics
from rest_framework import permissions
from . import models
from django.core.mail import send_mail
from django.conf import settings

from cam_backend.settings import EMAIL_HOST_USER



class BannerList(generics.ListAPIView) :
    queryset = models.Banners.objects.all()
    serializer_class = BannersSerializer
    

class ServicesList(generics.ListAPIView) :
    queryset = models.Services.objects.all()
    serializer_class = ServicesSerializer
    
    

class GalleryList(generics.ListCreateAPIView) :
    queryset = models.Gallery.objects.all()
    serializer_class = GallerySerializer
    


class ContactList(generics.ListCreateAPIView) :
    queryset = models.Contact.objects.all()
    serializer_class = ContactSerializer

    def save(self, *args, **kwargs):
        subject = 'welcome to '
        message = f'Hi {models.Contact.full_name}, thank you for registering in.'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = {models.Contact.email}
        send_mail( subject, message, email_from, recipient_list, fail_silently=False )
        return super(models.Contact,self).save(*args,**kwargs)


class ProudctList(generics.ListCreateAPIView):
    queryset = models.Prudect.objects.all()
    serializer_class = PrudectSerializer


class Custamerlist(generics.ListCreateAPIView):
    queryset = models.Custamer.objects.all()
    serializer_class = CustamerSerializer


class Custameradd(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Custamer.objects.all()
    serializer_class = CustamerSerializer


class SocialLink(generics.ListAPIView):
    queryset = models.SocialLink.objects.all()
    serializer_class = SocialLinkSerializer