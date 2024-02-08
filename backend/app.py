from flask import Flask
from mysql.connector import connect
from dotenv import load_dotenv
import os

load_dotenv()
dbconn = connect(
    user=os.environ.get("user"),
    password=os.environ.get("password"),
    host=os.environ.get("host"),
    database=os.environ.get("database"),
)


app = Flask(__name__)


@app.route("/test")
def home():
    return "Referral Hub API"


@app.route("/fetchJobPostings")
def fetchJobPostings():
    mycursor = dbconn.cursor()
    mycursor.execute("SELECT * FROM JOB_POSTINGS")
    results = mycursor.fetchall()
    return results


if __name__ == "__main__":
    app.run(debug=True)
