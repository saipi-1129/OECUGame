from flask import Flask, render_template, request, jsonify
from pymodules.save_ranking import save_ranking
from pymodules.view_ranking import view_ranking

app = Flask(__name__)

@app.route('/')
def index():
    ranking = view_ranking()
    
    return render_template('index.html', ranking=ranking)

# ランキングデータを受け取る
@app.route('/send-cleartime', methods=['POST'])
def receive_clear_time():
    data = request.json
    clear_time = data.get('clearTime')
    print(f"Received clear time: {clear_time} seconds")
    save_ranking(clear_time,request.remote_addr)
    return jsonify({'status': 'success', 'received_clear_time': clear_time})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
