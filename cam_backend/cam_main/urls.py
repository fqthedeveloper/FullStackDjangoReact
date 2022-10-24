from django.urls import path
from . import views

urlpatterns = [

    path('banner/', views.BannerList.as_view()),
    path('service/', views.ServicesList.as_view()),
    path('gallery/', views.GalleryList.as_view()),
    path('contact/',views.ContactList.as_view()),
    path('proudect/',views.ProudctList.as_view()),
    path('custameradd/<int:pk>',views.Custameradd.as_view()),
    path('custameradd/<int:pk>',views.Custameradd.as_view()),
]