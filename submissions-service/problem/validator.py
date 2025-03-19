import json
import os
import requests

def validate_json(filename):
    with open(filename, 'r') as f :
        try:
            input_data = json.load(f)
            print(input_data)
        except json.JSONEncodeError as e:
            return False, f"JSON decode error {e}"  
    if (len(input_data.keys())!=1 and 'Locations' not in input_data.keys()):
        return False, "JSON key error: only Locations key is accepted and must be present"
    elif (input_data['Locations'] is None):
        return False, "Locations list should not be empty"
    line_cnt = 0
    for loc in input_data['Locations']:
        line_cnt+=1
        if ('Latitude' not in loc.keys() or 'Longitude' not in loc.keys() or
            loc['Latitude'] is None or loc['Longitude'] is None):
            return False, "Missing either 'Latidue' or 'Longitude' values for location nr "+str(line_cnt)
        elif (not(isinstance(loc['Latitude'],(int,float)) and isinstance(loc['Longitude'],(int,float)) )):
            return False, "Invalid arguements for Location "+str(line_cnt)
    return True, "JSON is accepted"

""""
locations_3 = '''
    {
    "Locations": [
        {
        "Latitude": 37.99983328183838,
        "Longitude": 23.74317714798427
        },
        {
        "Latitude": 37.966783510525985,
        "Longitude": 23.778605533642235
        },
        {
        "Longitude": 23.773251398190194
        }
    ]
    }
'''
            
is_valid, msg = validate_json(locations_3)
print(is_valid,msg)
"""
SOLVER_SERVER_URL_PREFIX = "http://solver:6001/"

# SAVED_RESULTS_DIR = "/usr/src/app/myresults/"
# SAVED_RESULTS_DIR = "/usr/src/app/"
def get_output(filename):
    outfile = SAVED_RESULTS_DIR + filename 
    content_data = None
    try:
        with open(outfile) as out:
            content_data = out.read()
        return True, content_data
    except Exception as e:
        return False, str(e)
        
def download_output(raw_data,user_id,submission_name, folder_path):
    # OUTPUT_DIR = SAVED_RESULTS_DIR + str(user_id) + "/"
    uuid_folder = os.path.dirname(folder_path)
    print(uuid_folder)
    OUTPUT_DIR = os.path.join(uuid_folder)
    # outfile = OUTPUT_DIR + submission_name + ".out"
    outfile = os.path.join(OUTPUT_DIR, submission_name + ".txt")
    if not os.path.exists(OUTPUT_DIR):
        os.mkdir(OUTPUT_DIR)
    try:
        with open(outfile, 'w') as out:
            out.write(raw_data)
        print(f"Saved results into {outfile}")
    except Exception as e:
        print("Error in saving results!")
    return outfile
        
    