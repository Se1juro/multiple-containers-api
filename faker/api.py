from faker import Faker
from flask import Flask

fake = Faker()

app = Flask(__name__)

@app.route('/')
def createNames():
  names = [fake.unique.name() for i in range(13)]
  return {"names":names}

if __name__=="__main__":
  app.run(host="0.0.0.0",port=3005,debug=True)