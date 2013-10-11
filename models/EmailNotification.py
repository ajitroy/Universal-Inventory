from google.appengine.ext import db

class InterestedEmail(db.Model):
    email = db.StringProperty()
