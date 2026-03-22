from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB connect
client = MongoClient(os.getenv("MONGO_URI"))
db = client["portfolio_db"]

projects_collection = db["projects"]
skills_collection = db["skills"]
experience_collection = db["experiences"]

# ---------------- PROJECT APIs ----------------

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = []
    for p in projects_collection.find():
        p['_id'] = str(p['_id'])  # convert ObjectId → string
        projects.append(p)
    return jsonify(projects)


@app.route('/projects', methods=['POST'])
def add_project():
    data = request.json
    result = projects_collection.insert_one(data)
    return {"message": "Project added", "id": str(result.inserted_id)}


@app.route('/projects/<id>', methods=['PUT'])
def update_project(id):
    projects_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": request.json}
    )
    return {"message": "Project updated"}


@app.route('/projects/<id>', methods=['DELETE'])
def delete_project(id):
    projects_collection.delete_one({"_id": ObjectId(id)})
    return {"message": "Project deleted"}


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
    return {"message": "Skill added", "id": str(result.inserted_id)}


@app.route('/skills/<id>', methods=['PUT'])
def update_skill(id):
    skills_collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": request.json}
    )
    return {"message": "Skill updated"}


@app.route('/skills/<id>', methods=['DELETE'])
def delete_skill(id):
    skills_collection.delete_one({"_id": ObjectId(id)})
    return {"message": "Skill deleted"}

@app.route('/experience/add', methods=['POST'])
def add_experience():
    data = request.json
    result =  experience_collection.insert_one(data)
    return {"message":"Experience Added"}


@app.route('/experiences', methods = ['GET'])
def get_experiences():
    experiences = {}
    experienceList = []
    for e in experience_collection.find():
        e['_id'] = str(e['_id'])
        experienceList.append(e)
        experiences ={
            'list':experienceList,
            'message':"Data Fetched"
        }
        return jsonify(experiences)
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
    # app.run(debug=True)
    