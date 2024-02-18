import mysql.connector
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

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

@app.route('/connect_mysql')
def connect_mysql_route():
    connection = connect_mysql()
    if connection:
        return jsonify({"message": "Connected to MySQL database"})
    else:
        return jsonify({"error": "Error connecting to MySQL database"})

@app.route('/all')
def show_all_records():
    connection = connect_mysql()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM refferal_Details")
            records = cursor.fetchall()
            cursor.close()
            return jsonify({"records": records})

        except mysql.connector.Error as e:
            return jsonify({"error": "Error fetching records from the database", "details": str(e)})

        finally:
            connection.close()
    else:
        return jsonify({"error": "Error connecting to MySQL database"})
    

@app.route("/test")
def home():
    return "Referral Hub API"

@app.route("/login")
def login():
    connection = connect_mysql()
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM Emp_Details")
            records = cursor.fetchall()
            cursor.close()
            return jsonify({"records": records})

        except mysql.connector.Error as e:
            return jsonify({"error": "Error fetching records from the database", "details": str(e)})

        finally:
            connection.close()
    else:
        return jsonify({"error": "Error connecting to MySQL database"})



@app.route("/fetchJobPostings")
def fetchJobPostings():
    connection = connect_mysql()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM JOB_POSTINGS")
    results = cursor.fetchall()
    return results


#for creating a new referral form 
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
                sql = "INSERT INTO refferal_details (id, name, contact, email, relationship_with_person, address, city, pincode) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
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



# Default route
@app.route('/')
def index():
    return "Welcome to My Refferal Page!"

if __name__ == '__main__':
    app.run(debug=True)
