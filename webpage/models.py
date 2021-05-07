from django.db import models

# Create your models here.
class MasterClass(models.Model):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey("authentication.User", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Topic(models.Model):
    question = models.TextField()

    def __str__(self):
        return self.question[:20]

class Message(models.Model):
    text = models.TextField()
    q = models.ForeignKey("Topic", on_delete=models.CASCADE)

    def __str__(self):
        return self.text[:20]

class Group(models.Model):
    name = models.CharField(max_length=255)
    creator = models.ForeignKey("authentication.User", on_delete=models.CASCADE)
    icon = models.ImageField(upload_to="icons")

    def __str__(self):
        return self.name

class lot(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="lots", blank=True)
    cost = models.IntegerField()

    def __str__(self):
        return self.name
    