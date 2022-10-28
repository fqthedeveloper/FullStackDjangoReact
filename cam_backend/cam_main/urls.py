from django.urls import path
from . import views

urlpatterns = [

    path('banner/', views.BannerList.as_view()),
    path('service/', views.ServicesList.as_view()),
    path('gallery/', views.GalleryList.as_view()),
    path('contact/',views.ContactList.as_view()),
    path('proudect/',views.ProudctList.as_view()),
    path('custamerlist/',views.Custamerlist.as_view()),
    path('custamerlist/<int:pk>',views.Custameradd.as_view()),
    path('sociallink/',views.SocialLink.as_view()),
]