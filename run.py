from mywebsite import app #Will import from init file of file

if __name__ == "__main__":
    # create_tables() #create if it does not already exist
    app.run(debug=False)