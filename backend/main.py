from flask import Flask


app = Flask(__name__)

@app.route('/', methods=['GET'])

def api():
    return {
         'userId': 1,
         'title' : 'Flask',
         'completed': False
    }