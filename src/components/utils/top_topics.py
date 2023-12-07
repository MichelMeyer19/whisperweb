import requests
import pandas as pd

# purpose of this file is to connect to retrieve the Topics table, identify top 10 topics by number of requests and populate value in display_topic column
# we do so by retrieving the topics table (read) and updating values in the respective col (update)

headers = {
    'X-Parse-Application-Id': 'I4ZAiP31nKwNRdrFJtAs766FVZUPtLXWZvTstqI9',
    'X-Parse-REST-API-Key': 'fTG9Wppa07n6YXxmSU09du2VIznPUA9ORLNqVoXT',
    'Content-Type': 'application/json'
}

response = requests.get('https://parseapi.back4app.com/classes/Topics', headers=headers)

if response.status_code == 200:
    data = response.json()
    
    # output of above is a dictionary with just one key-value pair --> get the value
    data_list = data['results']
    df = pd.DataFrame(data_list)
    
    # obtain top 10 topics by sorting by nr_requests col
    df.sort_values(by = "number_requests", inplace=True, ascending=False)
    top_12_topic_ids = df["objectId"][:12].tolist()

    # change bool value in additional col display_topic
    all_topics = response.json()['results']

    for topic in all_topics:
        topic_id = topic['objectId']
        is_top_topic = topic_id in top_12_topic_ids

        url = f'https://parseapi.back4app.com/classes/Topics/{topic_id}'
        data = {"display_topic": is_top_topic}
        update_response = requests.put(url, json=data, headers=headers)

        if update_response.status_code == 200:
            print(f'Topic {topic_id} set to {"True" if is_top_topic else "False"}')
        else:
            print(f'Error setting topic {topic_id}:', update_response.status_code)

else:
    print('Error:', response.status_code)