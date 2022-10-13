from django.db import models
from django.utils.html import mark_safe
from django.core.mail import send_mail
from django.conf import settings

from cam_backend.settings import EMAIL_HOST_USER
# Create your models here.

class Banners(models.Model) :
    img = models.ImageField(upload_to="banners/")
    alt_text = models.CharField(max_length=150)

    class Meta :
        verbose_name_plural = 'Banners'

    def __str__(self) :
        return self.alt_text

    def image_tag(self) :
        return mark_safe('<img src="%s" width="80" />' % (self.img.url))


class Services(models.Model) :
    title = models.CharField(max_length=150)
    detail = models.TextField()
    img = models.ImageField(upload_to="services/", null=True)

    def __str__(self) :
        return self.title

    def image_tag(self) :
        return mark_safe('<img src="%s" width="80" />' % (self.img.url))

class Gallery(models.Model) :
    title = models.CharField(max_length=150)
    detail = models.TextField()
    img = models.ImageField(upload_to="gallery/", null=True)

    def __str__(self) :
        return self.title

    def image_tag(self) :
        return mark_safe('<img src="%s" width="80" />' % (self.img.url))


class GalleryImage(models.Model) :
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, null=True)
    alt_text = models.CharField(max_length=150)
    img = models.ImageField(upload_to="gallery_imgs/", null=True)

    def __str__(self) :
        return self.alt_text

    def image_tag(self) :
        return mark_safe('<img src="%s" width="80" />' % (self.img.url))


class Contact(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    massege = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self) :
        return self.full_name
    
    def save(self, *args, **kwargs):
        subject = 'welcome to '
        message = f'Hi {Contact.full_name}, thank you for registering in.'
        email_from = settings.EMAIL_HOST_USER
        recipient_list = {Contact.email}
        send_mail( subject, message, email_from, recipient_list, fail_silently=False )
        return super(Contact,self).save(*args,**kwargs)