from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///movie_database.db"
db = SQLAlchemy(app)


class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=True)
    rating = db.Column(db.Integer)


db.create_all()


@app.route('/')
def home():
    return "hello";


@app.route('/add_movies', methods=['POST'])
def add_movie():
    movie_data = request.get_json()
    new_movie = Movie(title=movie_data['title'], rating=movie_data['rating'])

    db.session.add(new_movie)
    db.session.commit()

    return 'Done', 201


@app.route('/movies')
def movies():
    movies_list = Movie.query.all()
    all_movies = [{"Title": move.title, "Overall Rating": move.rating} for move in movies_list]
    return jsonify({'movies': all_movies})


if __name__ == "__main__":
    app.run(debug=1)


