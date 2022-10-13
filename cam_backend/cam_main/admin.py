from django.contrib import admin
from . import models


class BannersAdmin(admin.ModelAdmin):
    list_display = ('alt_text', 'image_tag')


admin.site.register(models.Banners, BannersAdmin)


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('title', 'image_tag')


admin.site.register(models.Services, ServicesAdmin)

class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'image_tag')


admin.site.register(models.Gallery, GalleryAdmin)


class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('alt_text', 'image_tag')


admin.site.register(models.GalleryImage, GalleryImageAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone_number', 'massege')


admin.site.register(models.Contact, ContactAdmin)
