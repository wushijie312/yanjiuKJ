from django.db import models

# Create your models here. 数据模块 使用orm框架
class Artical(models.Model):
	title=models.CharField(max_length=64)
	content=models.TextField(null='true')
	pub_time = models.DateTimeField(null=True)
	def __str__(self):
		return self.title