from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import BannersSerializer, ServicesSerializer, GallerySerializer, GalleryImageSerializer, FlatPagesSerializer, ContactSerializer
from rest_framework import generics
from rest_framework import permissions
from . import models
from django.contrib.flatpages.models import FlatPage



class BannerList(generics.ListAPIView) :
    queryset = models.Banners.objects.all()
    serializer_class = BannersSerializer
    

class ServicesList(generics.ListAPIView) :
    queryset = models.Services.objects.all()
    serializer_class = ServicesSerializer
    
    

class GalleryList(generics.ListCreateAPIView) :
    queryset = models.Gallery.objects.all()
    serializer_class = GallerySerializer
    

class GalleryImageList(generics.ListCreateAPIView) :
    queryset = models.GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

    def get_queryset(self) :
        gallery_id = self.kwargs['gallery_id']
        gallery = models.Gallery.objects.get(pk=gallery_id)
        return models.GalleryImage.objects.filter(gallery=gallery)
    

class FlatPagesList(generics.ListAPIView) :
    queryset = FlatPage.objects.all()
    serializer_class = FlatPagesSerializer
    

class FlatPageDeatil(generics.RetrieveAPIView) :
    queryset = FlatPage.objects.all()
    serializer_class = FlatPagesSerializer


    def get_queryset(self) :
        page_id = self.kwargs['page_id']
        page = FlatPage.objects.get(pk=page_id)
        return FlatPage.objects.filter(page=page)


class ContactList(generics.ListCreateAPIView) :
    queryset = models.Contact.objects.all()
    serializer_class = ContactSerializer