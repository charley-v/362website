
from flask import Flask, request, jsonify, session
import json
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from config import ApplicationConfig
from models import db, User
from flask_session import Session
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies,jwt_required, JWTManager
from datetime import timedelta, datetime, timezone


app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True) 
server_session = Session(app)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    username = request.json["username"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email = email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User( email = email, username = username, password = hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })


@app.route("/logintoken", methods=["POST"])
def login():
    try:
        data = request.get_json() 
        if not data:
            app.logger.error("No JSON data in request")
            return jsonify({"error": "Bad Request"}), 400

        email = data.get("email")
        password = data.get("password")
        if not email or not password:
            app.logger.error(f"Missing email or password: email={email}, password={password}")
            return jsonify({"error": "Missing email or password"}), 400

        user = User.query.filter_by(email=email).first()
        
        if user is None:
            app.logger.error(f"User not found: email={email}")
            return jsonify({"error": "Unauthorized Access"}), 401
      
        if not bcrypt.check_password_hash(user.password, password):
            app.logger.error(f"Password check failed for user: email={email}")
            return jsonify({"error": "Unauthorized"}), 401  
        
        access_token = create_access_token(identity=email)

        return jsonify({
            "email": user.email,
            "access_token": access_token
        })
    
    except Exception as e:
        app.logger.error(f"Error during login: {str(e)}")
        return jsonify({"error": "Internal Server Error"}), 500
    
    

@app.after_request
def refresh_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestap = datetime.timestamp(now + timedelta(minutes = 30))
        if target_timestap > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity)
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        return response


@app.route("/logout", methods =["POST"])
def logout_user():
    response = jsonify({"msg": "lougout successful"})
    unset_jwt_cookies(response)
    return response

@app.route('/profile/<email>')
@jwt_required()
def my_profile(email):
    current_user_email = get_jwt_identity()
    print(email)
    if not email or email != current_user_email:
        return jsonify({"error": "Unauthorized access"}), 401
    
    user = User.query.filter_by(email =email).first()

    response_body = {
        "id": user.id,
        "email": user.email
    }

    return response_body


if __name__ == "__main__":
    app.run(debug=True)