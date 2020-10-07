from flask import Flask

app = Flask(__name__)
# app.secret_key = "jam"
app.config['SECRET_KEY'] = '787425c5d133b6b6f49fdad0a03b70fc'
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///users.sqlite3"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from mywebsite import routes