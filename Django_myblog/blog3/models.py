from django.db import models

# Create your models here. 数据模块 使用orm框架
class Articalthr(models.Model):
	title=models.CharField(max_length=64)
	content=models.TextField(null='true')

	def __str__(self):
		return self.title