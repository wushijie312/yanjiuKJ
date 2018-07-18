"""myblog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

# 我们将    return render(request, 'blog/index.html', {"articles": articles}) 这句话改成        return HttpResponseRedirect('/blog/index') （注意引用HttpResponseRedirect这个class），这样地址栏就会重新定位到首页了。
# 加斜杠
# path('index/', views.index),
app_name='blog'
urlpatterns = [
    path('index/', views.index,name='blog_index'),
    path('artical/<int:artical_id>/', views.artical_page,name='artical_page'),
    path('edit/<int:artical_id>/', views.edit_page,name='edit_page'),
    path('edit/action', views.edit_action,name='edit_action'),
]
