from django.shortcuts import render
from django.http import HttpResponse
# Create your views here. 执行响应的代码所在模块  代码逻辑处理
from . import models
# def index(request):
# 	return HttpResponse("hello wushijie")

def index(request):
	articals=models.Artical.objects.all()
	return render(request,'index.html',{'articals':articals})

def artical_page(request,artical_id):
	artical=models.Artical.objects.get(pk=artical_id)
	return render(request,'artical_page.html',{'artical':artical})

def edit_page(request,artical_id):
	if str(artical_id) == '0':
		return render(request,'edit_page.html')
	art=models.Artical.objects.get(pk=artical_id)
	return render(request,'edit_page.html',{'artical':art})

def edit_action(request):
	title=request.POST.get('title','TITLE')
	content=request.POST.get('content','CONTENT')
	artical_id=request.POST.get('artical_id','0')
	if  str(artical_id) == '0':
		
		models.Artical.objects.create(title=title,content=content)
		articals=models.Artical.objects.all()
		return render(request,'index.html',{'articals':articals})

	artical=models.Artical.objects.get(pk=artical_id)
	artical.title=title
	artical.content=content
	artical.save()
	return render(request,'artical_page.html',{'artical':artical})