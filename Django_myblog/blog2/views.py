from django.shortcuts import render
from django.http import HttpResponse
# Create your views here. 执行响应的代码所在模块  代码逻辑处理

# def index(request):
# 	return HttpResponse("hello wushijie")

def index(request):
	return render(request,'index.html',{'name':'blog布隆2','age':23})
