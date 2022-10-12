from faker import Faker
from flask import Flask

fake = Faker()

app = Flask(__name__)

@app.route('/')
def createNames():
  newUsers = []
  for i in range(13):
    name = fake.first_name()
    lastName = fake.last_name()
    address = fake.address()
    email = fake.email()
    phone = fake.phone_number()
    newUsers.append({"name":name,"lastName":lastName,"address":address,"email":email,"phone":phone})
  return newUsers

if __name__=="__main__":
  app.run(host="0.0.0.0",port=3005,debug=True)