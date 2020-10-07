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
@app.route("/portfolio/spring")
def spring():
    return render_template("spring.html")

@app.route("/portfolio/muon")
def muon():
    return render_template("muon.html")

@app.route("/portfolio/augmented")
def augmented():
    return render_template("augmented.html")

@app.route("/portfolio/ligo")
def ligo():
    return render_template("ligo.html")

@app.route("/portfolio/DSC")
def dsc():
    return render_template("dsc.html")

@app.route("/portfolio/SHI")
def shi():
    return render_template("shi.html")

@app.route("/portfolio/yoyo")
def yoyo():
    return render_template("yoyo.html")

@app.route("/portfolio/moonshot")
def moonshot():
    return render_template("moonshot.html")

@app.route("/portfolio/infinity")
def infinity():
    return render_template("infinity.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")

@app.route("/saos")
def saos():
    return render_template("saos.html")

@app.route("/feedback")
def feedback():
    return render_template("feedback.html")

@app.route("/other")
def other():
    return render_template("other.html")


