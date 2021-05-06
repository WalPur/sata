from django.db import models

# Create your models here.
class MasterClass(models.Model):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey("authentication.User", on_delete=models.CASCADE)

class Group(models.Model):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey("authentication.User", on_delete=models.CASCADE)
    icon = models.ImageField(upload_to="icons")

class lot(models.Model):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey("authentication.User", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="lots")
    cost = models.IntegerField()