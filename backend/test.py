import unittest
from flask_testing import TestCase
from mysql.connector import connect
from dotenv import load_dotenv
import json
import os
from app import app

load_dotenv()
dbconn = connect(
    user=os.environ.get("user"),
    password=os.environ.get("password"),
    host=os.environ.get("host"),
    database=os.environ.get("database"),
)


class FlaskAPITestCase(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_home_endpoint(self):
        response = self.app.get("/test")
        data = json.loads(response.data.decode("utf-8"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data, {"some": "data"})

    def test_fetch_job_postings_endpoint(self):
        response = self.app.get("/fetchJobPostings")

        self.assertEqual(response.status_code, 200)

    def test_login_successful(self):
        payload = {"email": "ppriyam@gmail.com", "password": "P@12345"}
        response = self.app.post("/login", json=payload)
        data = json.loads(response.data.decode("utf-8"))

        self.assertEqual(response.status_code, 200)
        self.assertTrue(data["login"])
        self.assertIn("role", data)

    def test_login_unsuccessful(self):
        payload = {"email": "nonexistent@example.com", "password": "wrongpassword"}
        response = self.app.post("/login", json=payload)
        data = json.loads(response.data.decode("utf-8"))

        self.assertEqual(response.status_code, 200)
        self.assertFalse(data["login"])

    def test_options_request(self):
        response = self.app.options("/test")

        self.assertEqual(response.status_code, 200)

    def test_invalid_endpoint(self):
        response = self.app.get("/nonexistent_endpoint")

        self.assertEqual(response.status_code, 404)


if __name__ == "__main__":
    unittest.main()
