from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from mysql.connector import connect
import json
import os
from dotenv import load_dotenv
from flasgger import Swagger

load_dotenv()
dbconn = connect(
    user=os.environ.get("user"),
    password=os.environ.get("password"),
    host=os.environ.get("host"),
    database=os.environ.get("database"),
)

app = Flask(__name__)
CORS(app)
Swagger(app)


@app.before_request
def basic_authentication():
    if request.method.lower() == "options":
        return Response()


@app.route("/test", methods=["POST", "GET"])
def home():
    """
    This is the home endpoint
    ---
    responses:
      200:
        description: A simple response
    """
    response = jsonify({"some": "data"})
    return response


@app.route("/fetchJobPostings", methods=["GET"])
def fetchJobPostings():
    """
    This endpoint fetches job postings
    ---
    responses:
      200:
        description: A list of job postings
    """
    mycursor = dbconn.cursor()
    mycursor.execute("SELECT * FROM JOB_POSTINGS")
    results = mycursor.fetchall()
    return jsonify(results)


@app.route("/login", methods=["POST"])
def login():
    """
    This endpoint handles user login
    ---
    parameters:
      - name: email
        in: formData
        type: string
        required: true
        description: The user's email
      - name: password
        in: formData
        type: string
        required: true
        description: The user's password
    responses:
      200:
        description: Login status and user role
    """
    requestBody = json.loads(request.data)
    mycursor = dbconn.cursor()
    mycursor.execute(
        "SELECT * FROM EMP_DETAILS WHERE email=%s", (requestBody["email"],)
    )
    results = mycursor.fetchall()
    if len(results) > 0:
        password = results[0][1]
        role = results[0][2]
        if password == requestBody["password"]:
            return jsonify({"login": True, "role": role})
    return jsonify({"login": False})


if __name__ == "__main__":
    app.run(debug=True)
