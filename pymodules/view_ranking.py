import json
import os

def view_ranking():
    filepath = 'database/ranking/ranking.json'

    if not os.path.exists(filepath):
        return []

    with open(filepath, 'r') as ranking_file:
        try:
            ranking_data = json.load(ranking_file)
        except json.JSONDecodeError:
            ranking_data = []
    
    return ranking_data
