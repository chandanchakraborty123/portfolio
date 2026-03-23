from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# ---------------- DATABASE CONNECTION ----------------

mongo_uri = os.getenv("MONGO_URI")

if not mongo_uri:
    raise Exception("❌ MONGO_URI not found in environment variables")

client = MongoClient(mongo_uri)
db = client["portfolio_db"]

projects_collection = db["projects"]
skills_collection = db["skills"]
experience_collection = db["experiences"]

# ---------------- HEALTH CHECK ----------------

@app.route('/')
def home():
    return "🚀 Portfolio Backend Running Successfully"

# ---------------- PROJECT APIs ----------------

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = []
    for p in projects_collection.find():
        p['_id'] = str(p['_id'])
        projects.append(p)
    return jsonify(projects)


@app.route('/projects', methods=['POST'])
def add_project():
    data = request.json
    result = projects_collection.insert_one(data)
    return jsonify({
        "message": "✅ Project added",
        "id": str(result.inserted_id)
    })


@app.route('/projects/<id>', methods=['PUT'])
def update_project(id):
    projects_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": request.json}
    )
    return jsonify({"message": "✅ Project updated"})


@app.route('/projects/<id>', methods=['DELETE'])
def delete_project(id):
    projects_collection.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "✅ Project deleted"})


# ---------------- SKILL APIs ----------------

@app.route('/skills', methods=['GET'])
def get_skills():
    skills = []
    for s in skills_collection.find():
        s['_id'] = str(s['_id'])
        skills.append(s)
    return jsonify(skills)


@app.route('/skills', methods=['POST'])
def add_skill():
    data = request.json
    result = skills_collection.insert_one(data)
    return jsonify({
        "message": "✅ Skill added",
        "id": str(result.inserted_id)
    })


@app.route('/skills/<id>', methods=['PUT'])
def update_skill(id):
    skills_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": request.json}
    )
    return jsonify({"message": "✅ Skill updated"})


@app.route('/skills/<id>', methods=['DELETE'])
def delete_skill(id):
    skills_collection.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "✅ Skill deleted"})


# ---------------- EXPERIENCE APIs ----------------

@app.route('/experience/add', methods=['POST'])
def add_experience():
    data = request.json
    result = experience_collection.insert_one(data)
    return jsonify({
        "message": "✅ Experience added",
        "id": str(result.inserted_id)
    })


@app.route('/experiences', methods=['GET'])
def get_experiences():
    experience_list = []
    for e in experience_collection.find():
        e['_id'] = str(e['_id'])
        experience_list.append(e)

    return jsonify({
        "list": experience_list,
        "message": "✅ Data fetched"
    })


# ---------------- ERROR HANDLER ----------------

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "❌ Route not found"}), 404


# ---------------- MAIN ----------------
# (Only for local run, Render uses Gunicorn)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)