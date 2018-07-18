from django.contrib import admin

# Register your models here. 该应用的后台管理系统配置
from blog.models import Artical

admin.site.register(Artical)