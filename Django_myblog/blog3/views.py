from django.shortcuts import render
from django.http import HttpResponse
# Create your views here. 执行响应的代码所在模块  代码逻辑处理
from . import models
# def index(request):
# 	return HttpResponse("hello wushijie")

def index(request):
	artical=models.Articalthr.objects.get(pk=1)
	return render(request,'index.html',{'artical':artical})
