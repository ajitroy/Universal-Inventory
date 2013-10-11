import webapp2,os
from google.appengine.ext.webapp._template import template
from models.EmailNotification import *

class AppHandler(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), '../views' ,'hm.html')
        self.response.out.write(

            template.render(path,{
                "title"	: "Universal-Inventory"
        }))

class MktgHandler(webapp2.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), '../views' ,'mktg.html')
        self.response.out.write(

            template.render(path,{
                "title"	: "Universal-Inventory"
        }))

class MktgEmailHandler(webapp2.RequestHandler):
    def post(self):
        InterestedEmail(email=self.request.get('email')).put()
        self.response.set_status(200)


