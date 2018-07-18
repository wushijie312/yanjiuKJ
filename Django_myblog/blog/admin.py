from django.contrib import admin

# Register your models here. 该应用的后台管理系统配置
from blog.models import Artical

class BlogAdmin(admin.ModelAdmin):
    list_display=('title', 'content','pub_time')
    list_filter = ('pub_time',)
admin.site.register(Artical,BlogAdmin)