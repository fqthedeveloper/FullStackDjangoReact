from django.urls import path
from . import views

urlpatterns = [

    path('banner/', views.BannerList.as_view()),
    path('service/', views.ServicesList.as_view()),
    path('gallery/', views.GalleryList.as_view()),
    path('banner/', views.GalleryImageList.as_view()),
    path('pages/',views.FlatPagesList.as_view()),
    path('page/<int:page_id>/<str:page_slug>/',views.FlatPageDeatil.as_view()),
    path('contact/',views.ContactList.as_view()),

]