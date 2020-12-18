from flask import render_template
from mywebsite import app

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

# Portfolio Links
@app.route("/spring")
def spring():
    return render_template("spring.html")

@app.route("/muon")
def muon():
    return render_template("muon.html")

@app.route("/augmented")
def augmented():
    return render_template("augmented.html")

@app.route("/ligo")
def ligo():
    return render_template("ligo.html")

@app.route("/DSC")
def dsc():
    return render_template("dsc.html")

@app.route("/SHI")
def shi():
    return render_template("shi.html")

@app.route("/yoyo")
def yoyo():
    return render_template("yoyo.html")

@app.route("/moonshot")
def moonshot():
    return render_template("moonshot.html")

@app.route("/infinity")
def infinity():
    return render_template("infinity.html")

@app.route("/other")
def other():
    return render_template("other.html")


