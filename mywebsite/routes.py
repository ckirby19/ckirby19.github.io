from flask import redirect, url_for,render_template,request,session,flash
from mywebsite import app

@app.route("/")
@app.route("/home")
@app.route("/#")
def home():
    return render_template("home.html")

@app.route("/spring")
def spring():
    return render_template("spring.html")

@app.route("/muon")
def muon():
    return render_template("muon.html")