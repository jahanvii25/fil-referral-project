

# app = Flask(__name__)
# CORS(app, resources={r"/login": {"origins": "*", "methods": ["POST"]}})
# # Your routes and other backend code go here


import json
import mysql.connector
from flask import Flask, Response, jsonify, request
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import os

app = Flask(__name__)
cors = CORS(app) # This will enable CORS for all routes
app.config['CORS_HEADER'] = 'Content-Type'
# Your routes and other backend code go here

def connect_mysql():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="priyam",
            password="priyam",
            database="mydatabase"
        )

        return connection

    except mysql.connector.Error as e:
        print("Error connecting to MySQL database:", e)
        return None

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
    dbconn = connect_mysql()
    mycursor = dbconn.cursor()
    mycursor.execute("SELECT * FROM JOB_POSTINGS")
    results = mycursor.fetchall()
    
    return results
@app.route("/login", methods=['POST'])
@cross_origin()
def login():
    connection = connect_mysql()
    if connection:
        try:
            requestBody = json.loads(request.data)
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM Emp_Details WHERE email=%s", (requestBody["email"],))
            results = cursor.fetchall()
            cursor.close()
            if len(results) > 0:
               password = results[0][1]
               role = results[0][2]
               if password == requestBody["password"]:
                   response = jsonify({'login': True, 'role': role})
               else:
                   response = jsonify({'login': False})
            else:
                response = jsonify({'login': False})

        except mysql.connector.Error as e:
            response = jsonify({"error": "Error fetching login details from the database", "details": str(e)})

        finally:
            connection.close()
    else:
        response = jsonify({"error": "Error logging in to MySQL database"})
    response.headers.add("Access-Control-Allow-Origin", "*") 
    return response

@app.route('/create', methods=['POST'])
def create():
    if request.method == 'POST':
        id = request.form.get('id')
        name = request.json.get('name')
        contact = request.json.get('contact')
        email = request.json.get('email')
        relationship_with_person = request.json.get('relationship_with_person')
        address = request.json.get('address')
        city = request.json.get('city')
        pincode = request.json.get('pincode')
        
        # print("Data to be inserted: id=%s, name=%s, contact=%s, email=%s, relationship_with_person=%s, address=%s, city=%s, pincode=%s", id, name, contact, email, relationship_with_person, address, city, pincode)
        print("Data to be inserted: id={}, name={}, contact={}, email={}, relationship_with_person={}, address={}, city={}, pincode={}".format(id, name, contact, email, relationship_with_person, address, city, pincode))

        connection = connect_mysql()
        if connection:
            try:
                cursor = connection.cursor()
                sql = "INSERT INTO refferal_Details (id, name, contact, email, relationship_with_person, address, city, pincode) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                values = (id, name, contact, email, relationship_with_person, address, city, pincode)
                cursor.execute(sql, values)

                connection.commit()

                cursor.close()
                connection.close()

                return jsonify({"message": "Record inserted successfully"})

            except mysql.connector.Error as e:
                return jsonify({"error": "Error inserting record into the database", "details": str(e)})

            finally:
                if connection.is_connected():
                    connection.close()

        else:
            return jsonify({"error": "Error connecting to MySQL database"})

    else:
        return jsonify({"error": "Invalid request method"})
# Application form

@app.route('/form')  
@cross_origin()  
def form():
        connection = connect_mysql()
        if connection:
            try:
                cursor = connection.cursor()
                sql = "SELECT name, id, city FROM refferal_Details"
                # values = (id, name, contact, email, relationship_with_person, address, city, pincode)
                cursor.execute(sql)
                results = cursor.fetchall()

                connection.commit()

                cursor.close()
                connection.close()
                
                data = [{"name": row[0], "id": row[1], "city": row[2]} for row in results]
                print(data)
                return jsonify({"data": data})

            except mysql.connector.Error as e:
                return jsonify({"error": "Error inserting record into the database", "details": str(e)})

            finally:
                if connection.is_connected():
                    connection.close()


# Default route
@app.route('/')
def index():
    return "Welcome to My Refferal Page!"


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
