import requests
import json
import os

PROBLEM_SERVER_URL_PREFIX = "http://problem_rp:6001/"
def save_locations_file(net_folder, submission_id):
    LOCATION_JSON_URL = PROBLEM_SERVER_URL_PREFIX + net_folder
    print("Location url:", LOCATION_JSON_URL)
    try:
        response = requests.get(LOCATION_JSON_URL)
        if response.status_code == 200:
            json_data = response.json()
            download_folder_path = os.path.join("locations", str(submission_id))
            download_path=os.path.join(download_folder_path, 'locations_downloaded.json')
            if not os.path.exists(download_folder_path):
                os.makedirs(download_folder_path)
            with open(download_path, "w") as json_file:
                json.dump(json_data, json_file)

            print("JSON file downloaded and saved successfully.")
            return download_path
        else:
            print(f"Failed to download JSON file. HTTP Status code: {response.status_code}")
    except Exception as e:
        print(str(e))
    
