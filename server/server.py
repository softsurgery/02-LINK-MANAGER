from flask import Flask, request, jsonify
from pickle import dump,load
import os

def read_data_from_file(filename):
    file_path = os.path.join(filename)
    with open(file_path, 'rb') as file:
        try:
            data = load(file)
        except EOFError:
            data = []
    return data

def write_data_to_file(filename, data):
    file_path = os.path.join(filename)
    with open(file_path, 'wb') as file:
        dump(data, file)

script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir+"/data")

app = Flask(__name__)

@app.route('/<resource>', methods=['GET', 'POST'])
@app.route('/<resource>/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_request(resource, id=None):
    if request.method == 'GET':
        if id is None:
            data = read_data_from_file(f'{resource}.bin')
            return jsonify(data)
        else:
            data = read_data_from_file(f'{resource}.bin')
            if id < len(data):
                return jsonify(data[id])
            else:
                return jsonify({"error": "Resource not found"}), 404

    elif request.method == 'POST':
        data = request.json
        data_list = read_data_from_file(f'{resource}.bin')
        data['id'] = len(data_list)
        data_list.append(data)
        write_data_to_file(f'{resource}.bin', data_list)
        return jsonify(data), 201

    elif request.method == 'PUT':
        data = request.json
        data_list = read_data_from_file(f'{resource}.bin')
        if id < len(data_list):
            data_list[id] = data
            write_data_to_file(f'{resource}.bin', data_list)
            return jsonify(data)
        else:
            return jsonify({"error": "Resource not found"}), 404

    elif request.method == 'DELETE':
        data_list = read_data_from_file(f'{resource}.bin')
        if id < len(data_list):
            del data_list[id]
            write_data_to_file(f'{resource}.bin', data_list)
            return jsonify({"success": True})
        else:
            return jsonify({"error": "Resource not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)