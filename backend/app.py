from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from mysql.connector import connect
import json
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
CORS(app)

@app.before_request
def basic_authentication():
    if request.method.lower() == 'options':
        return Response()

@app.route("/test", methods=['POST', 'GET'])
def home():
    response = jsonify({"some": "data"})
    return response

@app.route("/fetchJobPostings", methods=["GET"])
def fetchJobPostings():
    mycursor = dbconn.cursor()
    mycursor.execute("SELECT * FROM JOB_POSTINGS")
    results = mycursor.fetchall()
    return results


@app.route("/login", methods=['POST'])
def login():
    requestBody = json.loads(request.data)
    mycursor = dbconn.cursor()
    mycursor.execute("SELECT * FROM EMP_DETAILS WHERE email=%s", (requestBody["email"],))
    results = mycursor.fetchall()
    if len(results)>0:
        password=results[0][1]
        role=results[0][2]
        if password==requestBody["password"]:
            return jsonify({'login':True, 'role':role})
    return jsonify({'login':False})

if __name__ == "__main__":
    app.run(debug=True)
