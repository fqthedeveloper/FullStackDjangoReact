from django.contrib import admin
from . import models


class BannersAdmin(admin.ModelAdmin):
    list_display = ('alt_text', 'image_tag')

admin.site.register(models.Banners, BannersAdmin)


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('title', 'image_tag')

admin.site.register(models.Services, ServicesAdmin)

class GalleryAdmin(admin.ModelAdmin):
    list_display = ('text_alt', 'image_tag')

admin.site.register(models.Gallery, GalleryAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'phone_number', 'massege')

admin.site.register(models.Contact, ContactAdmin)


class CustamerAdmin(admin.ModelAdmin):
    list_display = ('custamer_name', 'reviwe', 'img')

admin.site.register(models.Custamer, CustamerAdmin)


class PrudectAdmin(admin.ModelAdmin):
    list_display = ('p_name', 'details', 'img')

admin.site.register(models.Prudect, PrudectAdmin)


class RatingAdmin(admin.ModelAdmin):
    list_display = ('custamer', 'prudect', 'stars')

admin.site.register(models.Rating, RatingAdmin)


class SocialLinkadmin(admin.ModelAdmin):
    list_display = ('facebook', 'instagram', 'twiter','whatsapp')

admin.site.register(models.SocialLink, SocialLinkadmin)
