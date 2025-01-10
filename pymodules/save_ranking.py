import json
import os

def save_ranking(clearTime,ip):
    # ランキングデータファイルのパス
    filepath = 'database/ranking/ranking.json'

    # ランキングデータが存在しない場合の初期化
    if not os.path.exists(filepath):
        ranking_data = []
    else:
        with open(filepath, 'r') as ranking_file:
            try:
                ranking_data = json.load(ranking_file)
            except json.JSONDecodeError:
                ranking_data = []

    # 新しいクリアタイムを追加
    ranking_data.append({'clearTime': clearTime,'ip':ip})

    # JSONファイルに保存
    with open(filepath, 'w') as ranking_file:
        json.dump(ranking_data, ranking_file, indent=4)
