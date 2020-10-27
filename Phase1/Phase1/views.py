from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse('''<h1>Welcome To SSLProjectASNN</h1>
    <a href="http://127.0.0.1:8000/login">Login</a> <br>
    <a href="http://127.0.0.1:8000/IDE">GoToIDE</a>
     ''')
def logout(request):
    return HttpResponse( "Logged Out Successfully!" )

def login(request):
    return HttpResponse('''<h1> Welcome Ajay</h1><a href="http://127.0.0.1:8000/logout">logout</a> ''')

def gotoIDE(request):
    return HttpResponse("IDE")